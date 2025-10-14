/**
 * BreathCode API Integration for Pricing Tables
 * Academy ID: 54 (LearnPack)
 * 
 * Requires VITE_BREATHCODE_API_TOKEN environment variable
 */

const BREATHCODE_API_BASE = 'https://breathecode.herokuapp.com';
const LEARNPACK_ACADEMY_ID = 54;
const API_TOKEN = import.meta.env.VITE_BREATHCODE_API_TOKEN;

/**
 * Get common headers for BreathCode API requests
 */
function getHeaders(language: string = 'en'): HeadersInit {
  const headers: HeadersInit = {
    'Accept-Language': language,
    'Content-Type': 'application/json',
  };
  
  if (API_TOKEN) {
    headers['Authorization'] = `Token ${API_TOKEN}`;
  }
  
  return headers;
}

export interface Plan {
  id: number;
  slug: string;
  title: string;
  status: string;
  currency: { code: string };
  is_renewable: boolean;
  price_per_month?: number;
  price_per_quarter?: number;
  price_per_half?: number;
  price_per_year?: number;
  financing_options?: Array<{
    monthly_price: number;
    how_many_months: number;
  }>;
}

export interface Subscription {
  academy: { slug: string };
  plans: Array<{ slug: string }>;
  status: string;
  valid_until: string;
  next_payment_at: string;
}

export interface ServiceItem {
  service: {
    slug: string;
    title: string;
  };
  how_many: number;
  unit_price: number;
  sort_priority: number;
  features?: Array<{
    title: string;
    one_line_desc: string;
    description: string;
  }>;
}

export interface Coupon {
  slug: string;
  discount_type: 'PERCENT_OFF' | 'FIXED_PRICE';
  discount_value: number;
  auto: boolean;
  offered_at: string;
  expires_at: string | null;
}

/**
 * Fetch all active plans for LearnPack academy
 */
export async function fetchPlans(language: string = 'en'): Promise<Plan[]> {
  try {
    const response = await fetch(
      `${BREATHCODE_API_BASE}/v1/payments/academy/plan?academy=${LEARNPACK_ACADEMY_ID}`,
      {
        headers: getHeaders(language),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch plans: ${response.statusText}`);
    }

    const plans: Plan[] = await response.json();
    
    // Filter only active plans and sort by monthly price
    return plans
      .filter(plan => plan.status === 'ACTIVE')
      .sort((a, b) => {
        const priceA = a.price_per_month || 0;
        const priceB = b.price_per_month || 0;
        return priceA - priceB;
      });
  } catch (error) {
    console.error('Error fetching plans:', error);
    return [];
  }
}

/**
 * Fetch user's active subscriptions
 */
export async function fetchSubscriptions(language: string = 'en'): Promise<Subscription[]> {
  try {
    const response = await fetch(
      `${BREATHCODE_API_BASE}/v1/payments/me/subscription?status=ACTIVE,FREE_TRIAL,FULLY_PAID`,
      {
        headers: getHeaders(language),
      }
    );

    if (!response.ok) {
      // User might not be logged in - this is okay
      return [];
    }

    const data = await response.json();
    return data.subscriptions || [];
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return [];
  }
}

/**
 * Fetch service items for a specific plan
 */
export async function fetchServiceItems(
  planSlug: string,
  language: string = 'en',
  countryCode: string = 'US'
): Promise<ServiceItem[]> {
  try {
    const response = await fetch(
      `${BREATHCODE_API_BASE}/v2/payments/serviceitem?plan=${planSlug}&country_code=${countryCode}`,
      {
        headers: getHeaders(language),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch service items: ${response.statusText}`);
    }

    const items: ServiceItem[] = await response.json();
    
    // Sort by priority
    return items.sort((a, b) => (a.sort_priority || 999) - (b.sort_priority || 999));
  } catch (error) {
    console.error('Error fetching service items:', error);
    return [];
  }
}

/**
 * Fetch available coupons for a plan
 * Note: The actual endpoint might vary - this is a placeholder
 */
export async function fetchCoupons(planSlug: string, language: string = 'en'): Promise<Coupon[]> {
  try {
    // TODO: Replace with actual coupon endpoint when available
    const response = await fetch(
      `${BREATHCODE_API_BASE}/v1/payments/plan/${planSlug}/coupon`,
      {
        headers: getHeaders(language),
      }
    );

    if (!response.ok) {
      return [];
    }

    const coupons: Coupon[] = await response.json();
    return coupons;
  } catch (error) {
    console.error('Error fetching coupons:', error);
    return [];
  }
}

/**
 * Calculate discounted price based on coupon
 */
export function calculateDiscountedPrice(
  originalPrice: number,
  coupon: Coupon | null
): { discounted: number; discount: number; percentage: number } | null {
  if (!coupon || !coupon.auto) {
    return null;
  }

  let discountedPrice = originalPrice;
  let discountAmount = 0;
  let percentage = 0;

  if (coupon.discount_type === 'PERCENT_OFF') {
    discountAmount = originalPrice * coupon.discount_value;
    discountedPrice = originalPrice - discountAmount;
    percentage = coupon.discount_value * 100;
  } else if (coupon.discount_type === 'FIXED_PRICE') {
    discountedPrice = coupon.discount_value;
    discountAmount = originalPrice - coupon.discount_value;
    percentage = (discountAmount / originalPrice) * 100;
  }

  return {
    discounted: Math.round(discountedPrice * 100) / 100,
    discount: Math.round(discountAmount * 100) / 100,
    percentage: Math.round(percentage),
  };
}

/**
 * Get monthly price from plan (handles different billing periods)
 */
export function getMonthlyPrice(plan: Plan): number {
  if (plan.price_per_month) return plan.price_per_month;
  if (plan.price_per_quarter) return plan.price_per_quarter / 3;
  if (plan.price_per_half) return plan.price_per_half / 6;
  if (plan.financing_options && plan.financing_options.length > 0) {
    // Find cheapest financing option
    const cheapest = plan.financing_options.reduce((min, option) => 
      option.monthly_price < min.monthly_price ? option : min
    );
    return cheapest.monthly_price;
  }
  return 0;
}

/**
 * Get annual price (or monthly * 12 if not available)
 */
export function getAnnualPrice(plan: Plan): number {
  if (plan.price_per_year) return plan.price_per_year;
  const monthly = getMonthlyPrice(plan);
  return monthly * 12;
}
