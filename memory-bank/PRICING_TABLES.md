# Pricing Tables System Documentation

## Overview

The pricing tables system displays subscription plans with dynamic pricing, automatic discounts, and feature inheritance across plan tiers. The system integrates with the BreathCode API and uses internal JSON configurations for feature presentation and translations.

## System Architecture

### High-Level Flow

```
1. User visits pricing page
2. System fetches data from BreathCode API:
   - Available plans (/v1/payments/academy/plan)
   - User subscriptions (/v1/payments/me/subscription)
   - Service items per plan (/v2/payments/serviceitem)
   - Available coupons per plan
3. System processes and structures the data
4. Data merged with internal JSON configurations
5. UI renders pricing cards with features and discounts
```

## BreathCode API Integration

### 1. Fetching Plans

**Endpoint:** `/v1/payments/academy/plan`

**Parameters:**
- `academy`: Academy ID (54 for LearnPack)
- `Accept-Language`: Language header (en/es)

**Response:**
```json
[
  {
    "id": 123,
    "slug": "learnpack-learner",
    "title": "LearnPack Learner",
    "status": "ACTIVE",
    "currency": { "code": "USD" },
    "is_renewable": true,
    "price_per_month": 9.99,
    "price_per_year": 99.99,
    "service_items": [...]
  }
]
```

**Processing:**
- Filter plans by `status: "ACTIVE"`
- Extract pricing from multiple tiers
- Sort by monthly price (ascending)

### 2. Fetching User Subscriptions

**Endpoint:** `/v1/payments/me/subscription`

**Parameters:**
- `status`: "ACTIVE,FREE_TRIAL,FULLY_PAID"
- `Accept-Language`: Language header (en/es)

**Response:**
```json
{
  "subscriptions": [
    {
      "academy": { "slug": "learnpack" },
      "plans": [{ "slug": "learnpack-learner" }],
      "status": "ACTIVE",
      "valid_until": "2025-12-31",
      "next_payment_at": "2025-02-01"
    }
  ]
}
```

**Processing:**
- Filter subscriptions by academy slug
- Extract active plan slugs
- Match with available plans to mark current plan

### 3. Fetching Service Items

**Endpoint:** `/v2/payments/serviceitem`

**Parameters:**
- `plan`: Plan slug (e.g., "learnpack-learner")
- `country_code`: Country code (ES/US based on language)
- `Accept-Language`: Language header (en/es)

**Response:**
```json
[
  {
    "service": {
      "slug": "ai-course-generation",
      "title": "AI Course Generation"
    },
    "how_many": 5,
    "unit_price": 2.99,
    "sort_priority": 1,
    "features": [
      {
        "title": "AI Course Generation",
        "one_line_desc": "Create courses with AI",
        "description": "Generate interactive courses in minutes"
      }
    ]
  }
]
```

**Processing:**
- Sort by `sort_priority`
- Extract service slug, quantity (`how_many`), and unit price
- Build service data map for variable replacement

### 4. Fetching Coupons

**Endpoint:** BreathCode coupons endpoint (per plan)

**Response:**
```json
[
  {
    "slug": "LAUNCH20",
    "discount_type": "PERCENT_OFF",
    "discount_value": 0.2,
    "auto": true,
    "offered_at": "2025-01-01T00:00:00Z",
    "expires_at": null
  }
]
```

**Coupon Types:**
- `PERCENT_OFF`: `discount_value` is decimal 0-1 (e.g., 0.2 = 20% off)
- `FIXED_PRICE`: `discount_value` is the final price amount

**Auto-Applied Coupons:**
- Coupons with `"auto": true` are automatically applied
- Display shows original price with strikethrough and discounted price

## Internal JSON Configuration

### Structure

Two JSON files provide bilingual feature definitions:

**plan-features.en.json** (English)
**plan-features.es.json** (Spanish)

### Configuration Format

```json
{
  "plans": {
    "learnpack-learner": {
      "description": "Perfect for individual learners",
      "included": "Get started with:",
      "features": [
        {
          "slug": "ai-course-generation",
          "icon": "BookOpen",
          "title": "Create {how_many} monthly courses using AI",
          "buy_more": "{how_many} courses included, ${unit_price} for additional",
          "description": "Create courses in 2 minutes using AI"
        },
        {
          "slug": "logic-auto-grading",
          "icon": "Code2",
          "title": "Auto-grade assessments instantly",
          "description": "Deterministic grading methods"
        }
      ]
    },
    "learnpack-teacher": {
      "description": "Ideal for creators with an audience",
      "included": "Everything in LearnPack Learner, plus:",
      "features": [
        "ai-course-generation",
        {
          "slug": "learner-seats",
          "icon": "Users",
          "title": "Add {how_many} learner seats",
          "buy_more": "${unit_price} per additional seat/month"
        }
      ]
    }
  }
}
```

### Template Variables

Feature strings support dynamic variable replacement from BreathCode service data:

- `{how_many}` - Replaced with quantity from service item
- `{unit_price}` - Replaced with unit price from service item
- `{service_title}` - Replaced with service name

**Example:**
```
Template: "Create {how_many} monthly courses using AI"
Service Data: { "how_many": 5, "unit_price": 2.99 }
Result: "Create 5 monthly courses using AI"
```

## Data Flow & Processing

### Step 1: Fetch BreathCode Data

System makes parallel requests to BreathCode API:

```
Parallel BreathCode API Calls:
├── /v1/payments/academy/plan (academy=54)
└── /v1/payments/me/subscription (status=ACTIVE,FREE_TRIAL,FULLY_PAID)

For each plan:
├── /v2/payments/serviceitem (plan={slug}, country_code={code})
└── Coupons endpoint (plan={slug})
```

### Step 2: Process Plan Data

**From BreathCode Plans API:**

Extract pricing from available tiers (priority order):
1. `price_per_month` → Monthly subscription
2. `price_per_quarter` → Quarterly (÷3 for monthly equivalent)
3. `price_per_half` → 6-month (÷6 for monthly equivalent)
4. `price_per_year` → Annual subscription
5. `financing_options` → Installment plans

**Match with Subscriptions:**
- Compare plan slugs with active subscriptions
- Mark plans as "current" if user has active subscription
- Extract subscription metadata (status, valid_until, next_payment_at)

### Step 3: Feature Processing & Merging

**For each plan:**

1. **Load Internal Configuration**: Get plan config from JSON file based on language

2. **Process Features**: For each feature in configuration:

   **If feature is a string** (e.g., `"ai-course-generation"`):
   - Look up feature definition from cheaper plans (inheritance)
   - Get service data from BreathCode service items
   - Replace template variables with actual values

   **If feature is an object**:
   - Get service data from BreathCode service items
   - Replace template variables in title/buy_more fields
   - Use icon, description from configuration

3. **Build Feature List**: Array of merged features with:
   - `slug`: Feature identifier
   - `icon`: Lucide icon name
   - `title`: Display title (variables replaced)
   - `description`: Detailed description (optional)
   - `buyMore`: Purchase information (optional)

**Example Processing:**

```
JSON Config:
{
  "slug": "ai-course-generation",
  "icon": "BookOpen",
  "title": "Create {how_many} monthly courses",
  "buy_more": "{how_many} included, ${unit_price} for more"
}

BreathCode Service Data:
{
  "service": { "slug": "ai-course-generation" },
  "how_many": 5,
  "unit_price": 2.99
}

Output:
{
  "slug": "ai-course-generation",
  "icon": "BookOpen",
  "title": "Create 5 monthly courses",
  "buyMore": "5 included, $2.99 for more"
}
```

### Step 4: Feature Inheritance

Higher-tier plans inherit features from lower-tier plans based on pricing order.

**Plan Order** (by monthly price):
1. LearnPack Learner (cheapest)
2. LearnPack Teacher
3. LearnPack Academy (most expensive)

**Inheritance Rules:**
- String reference (e.g., `"ai-course-generation"`) = Inherit from cheaper plan
- Object definition = Override or add new feature
- Features looked up recursively from lower tiers

**Example:**

```json
// Learner Plan (Base)
{
  "features": [
    { "slug": "ai-course-generation", "title": "Create {how_many} courses" }
  ]
}

// Teacher Plan (inherits from Learner)
{
  "included": "Everything in LearnPack Learner, plus:",
  "features": [
    "ai-course-generation",  // ← Inherited, reuses Learner definition
    { "slug": "learner-seats", "title": "..." }  // ← New feature
  ]
}
```

## Price Calculation

### Base Price from BreathCode

BreathCode provides multiple pricing tiers:

```
Priority Order:
1. price_per_month → Direct monthly price
2. price_per_quarter → ÷3 for monthly equivalent
3. price_per_half → ÷6 for monthly equivalent
4. price_per_year → Annual (stored separately)
5. financing_options → Find cheapest monthly installment
```

### Billing Period Toggle

Users switch between billing views:

**Monthly View:**
- Display: Monthly price from BreathCode
- Label: "Billed Monthly"

**Annual View:**
- Display: Annual price ÷ 12 (monthly equivalent)
- Label: "Billed Yearly"
- Badge: "Save 20%"

### Discount Application

**Auto-Applied Coupons from BreathCode:**

1. Find coupon with `"auto": true`
2. Apply discount based on `discount_type`:

```
PERCENT_OFF:
  discounted = original × (1 - discount_value)
  Example: $10 × (1 - 0.2) = $8

FIXED_PRICE:
  discounted = discount_value
  Example: Override to $7.99
```

**Discount Display:**
- Original price: Strikethrough formatting
- Discount badge: Percentage or "DISCOUNT" label
- Final price: Highlighted in primary color
- Icon: Flame icon for visual emphasis

### Final Price Calculation

```
Process:
1. Determine base price (monthly or annual÷12)
2. Check BreathCode coupons for auto-applied discount
3. Calculate discounted price if applicable
4. Display:
   - With discount: Original price + discounted price
   - Without discount: Base price only
5. Add billing period label if annual view
```

## Plan Status Indicators

### Current Plan
- Source: User subscriptions from BreathCode
- Display: "Current Plan" badge
- Styling: Primary border, disabled button
- Match: Plan slug in active subscriptions

### Most Popular
- Source: Configured logic (default: second plan)
- Display: "Most Popular" badge
- Styling: Enhanced border and shadow
- Can be changed based on business rules

### Legacy Plans
- Source: User has subscription but plan not in active plans
- Display: Amber warning banner
- Message: "Your current plan is no longer available"
- Recommendation: Upgrade to available plan

### Free Trial
- Source: Subscription status = "FREE_TRIAL" from BreathCode
- Display: Blue information banner
- Message: "Free trial expires on {valid_until}"
- Action: Encourage plan selection

## UI Rendering Flow

### 1. Data Loading
```
State: Loading spinner displayed
Condition: BreathCode API calls in progress
```

### 2. Error Handling
```
Permission Error (403):
- Display: Amber alert
- Message: "Insufficient permissions"
- Action: None (requires admin intervention)

Network Error:
- Display: Red alert with error message
- Action: Retry button (refetches all data)
```

### 3. Warning Banners
```
Priority Display:
1. Free Trial Warning (if active)
2. Legacy Plan Warning (if applicable)
Location: Above pricing cards
```

### 4. Billing Toggle
```
Display: Toggle buttons (Annual/Monthly)
State Management: Updates all plan displays
Annual Benefits: "Save 20%" badge
```

### 5. Plan Cards

Each plan card displays:

**Header:**
- Status badge (Current Plan / Most Popular)
- Plan name (from BreathCode or formatted from slug)
- Custom description (from internal JSON)
- Pricing:
  - Without discount: Base price
  - With auto-coupon: Original (strikethrough) + Discounted
- Billing label (if annual view)
- CTA button (Get Started / Upgrade / Contact Us)

**Content:**
- Inheritance text (from internal JSON)
  - Example: "Everything in LearnPack Learner, plus:"
- Features list:
  - Icon (from JSON config)
  - Title (merged with BreathCode data)
  - Info button → Popover with description and "buy more" info