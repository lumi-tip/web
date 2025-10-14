/**
 * Pricing Data Processor
 * Merges BreathCode API data with internal JSON configuration
 * Handles template variable replacement and feature inheritance
 */

import { Plan, ServiceItem, Coupon, calculateDiscountedPrice, getMonthlyPrice, getAnnualPrice } from './breathcode-api';

export interface FeatureConfig {
  slug: string;
  icon: string;
  title: string;
  buy_more?: string;
  description?: string;
}

export interface PlanConfig {
  description: string;
  included: string;
  features: Array<FeatureConfig | string>;
}

export interface PlansConfig {
  plans: Record<string, PlanConfig>;
}

export interface ProcessedFeature {
  slug: string;
  icon: string;
  title: string;
  description?: string;
  buyMore?: string;
}

export interface ProcessedPlan {
  slug: string;
  title: string;
  description: string;
  included: string;
  monthlyPrice: number;
  annualPrice: number;
  currency: string;
  features: ProcessedFeature[];
  coupon: Coupon | null;
  discountedMonthly: number | null;
  discountedAnnual: number | null;
  discountPercentage: number | null;
  isCurrentPlan: boolean;
  isMostPopular: boolean;
}

/**
 * Load plan features configuration from JSON
 */
export async function loadPlanFeatures(language: string = 'en'): Promise<PlansConfig> {
  try {
    const response = await fetch(`/plan-features.${language}.json`);
    if (!response.ok) {
      throw new Error('Failed to load plan features');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading plan features:', error);
    return { plans: {} };
  }
}

/**
 * Create service data map for template variable replacement
 */
function createServiceDataMap(serviceItems: ServiceItem[]): Record<string, ServiceItem> {
  const map: Record<string, ServiceItem> = {};
  serviceItems.forEach(item => {
    map[item.service.slug] = item;
  });
  return map;
}

/**
 * Check if a string contains template variables
 */
function hasTemplateVars(str: string): boolean {
  return /\{how_many\}|\{unit_price\}|\{service_title\}/i.test(str);
}

/**
 * Replace template variables in a string
 * Returns null if service data is unavailable and the template requires it
 */
function replaceTemplateVars(
  template: string,
  serviceData: ServiceItem | undefined
): string | null {
  const hasVars = hasTemplateVars(template);
  
  // If template has variables but no service data, return null to skip this field
  if (hasVars && !serviceData) {
    return null;
  }
  
  // If template has no variables, return as-is
  if (!hasVars) {
    return template;
  }

  // Replace variables with actual data
  return template
    .replace(/\{how_many\}/g, String(serviceData!.how_many))
    .replace(/\{unit_price\}/g, String(serviceData!.unit_price))
    .replace(/\{service_title\}/g, serviceData!.service.title);
}

/**
 * Process a single feature (resolve inheritance if needed)
 */
function processFeature(
  feature: FeatureConfig | string,
  serviceDataMap: Record<string, ServiceItem>,
  allPlanConfigs: Record<string, PlanConfig>,
  processedPlans: string[]
): ProcessedFeature | null {
  // If feature is a string, it's inherited - look it up from cheaper plans
  if (typeof feature === 'string') {
    const slug = feature;
    
    // Search in cheaper plans (already processed)
    for (const processedPlanSlug of processedPlans) {
      const planConfig = allPlanConfigs[processedPlanSlug];
      if (!planConfig) continue;

      const foundFeature = planConfig.features.find(f => 
        typeof f === 'object' && f.slug === slug
      ) as FeatureConfig | undefined;

      if (foundFeature) {
        const serviceData = serviceDataMap[slug];
        const title = replaceTemplateVars(foundFeature.title, serviceData);
        
        // Skip feature if title can't be rendered (requires service data that's missing)
        if (title === null) {
          return null;
        }
        
        const buyMore = foundFeature.buy_more 
          ? replaceTemplateVars(foundFeature.buy_more, serviceData)
          : undefined;
        
        return {
          slug: foundFeature.slug,
          icon: foundFeature.icon,
          title,
          description: foundFeature.description,
          buyMore: buyMore !== null ? buyMore : undefined,
        };
      }
    }
    
    return null; // Feature not found in inheritance chain
  }

  // Feature is an object - process it directly
  const serviceData = serviceDataMap[feature.slug];
  const title = replaceTemplateVars(feature.title, serviceData);
  
  // Skip feature if title can't be rendered (requires service data that's missing)
  if (title === null) {
    return null;
  }
  
  const buyMore = feature.buy_more 
    ? replaceTemplateVars(feature.buy_more, serviceData)
    : undefined;
  
  return {
    slug: feature.slug,
    icon: feature.icon,
    title,
    description: feature.description,
    buyMore: buyMore !== null ? buyMore : undefined,
  };
}

/**
 * Process all plans with API data and configuration
 */
export async function processPlans(
  apiPlans: Plan[],
  serviceItemsByPlan: Record<string, ServiceItem[]>,
  couponsByPlan: Record<string, Coupon[]>,
  language: string = 'en'
): Promise<ProcessedPlan[]> {
  const config = await loadPlanFeatures(language);
  const processedPlans: ProcessedPlan[] = [];
  const processedPlanSlugs: string[] = [];

  // Sort plans by monthly price (for inheritance order)
  const sortedPlans = [...apiPlans].sort((a, b) => 
    getMonthlyPrice(a) - getMonthlyPrice(b)
  );

  for (const plan of sortedPlans) {
    const planConfig = config.plans[plan.slug];
    
    // Skip if no configuration for this plan
    if (!planConfig) {
      console.warn(`No configuration found for plan: ${plan.slug}`);
      continue;
    }

    const serviceItems = serviceItemsByPlan[plan.slug] || [];
    const serviceDataMap = createServiceDataMap(serviceItems);
    
    const coupons = couponsByPlan[plan.slug] || [];
    const autoCoupon = coupons.find(c => c.auto) || null;

    const monthlyPrice = getMonthlyPrice(plan);
    const annualPrice = getAnnualPrice(plan);

    // Calculate discounted prices if auto coupon exists
    const monthlyDiscount = calculateDiscountedPrice(monthlyPrice, autoCoupon);
    const annualDiscount = calculateDiscountedPrice(annualPrice, autoCoupon);

    // Process features
    const features: ProcessedFeature[] = [];
    for (const feature of planConfig.features) {
      const processed = processFeature(
        feature,
        serviceDataMap,
        config.plans,
        processedPlanSlugs
      );
      if (processed) {
        features.push(processed);
      }
    }

    // Determine if this is the most popular plan (second in the list)
    const isMostPopular = sortedPlans.indexOf(plan) === 1;

    processedPlans.push({
      slug: plan.slug,
      title: plan.title,
      description: planConfig.description,
      included: planConfig.included,
      monthlyPrice,
      annualPrice,
      currency: plan.currency.code,
      features,
      coupon: autoCoupon,
      discountedMonthly: monthlyDiscount?.discounted || null,
      discountedAnnual: annualDiscount?.discounted || null,
      discountPercentage: monthlyDiscount?.percentage || null,
      isCurrentPlan: false,
      isMostPopular,
    });

    processedPlanSlugs.push(plan.slug);
  }

  return processedPlans;
}

