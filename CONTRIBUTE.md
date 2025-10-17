# Contributing to LearnPack Website

Thank you for your interest in contributing to the LearnPack website! This guide will help you understand how to modify translation strings and website content through GitHub Pull Requests.

## 📁 Translation Files Structure

The website supports **English (en)** and **Spanish (es)** translations. Translation files are organized as follows:

```
client/public/
├── locales/
│   ├── en/
│   │   └── common.json          # General English translations
│   └── es/
│       └── common.json          # General Spanish translations
├── plan-features.en.json        # English pricing features
└── plan-features.es.json        # Spanish pricing features
```

## 🌍 Translation Categories

### 1. General Translations (`locales/{lang}/common.json`)

These files contain all general website content including:

- **Navigation** (`nav`): Header menu items
- **Hero Section** (`hero`): Main homepage content and form
- **Value Propositions** (`valueProps`): Feature highlights
- **Skills Showcase** (`skills`): Skill categories
- **How It Works** (`howItWorks`): Process steps
- **Statistics** (`stats`): Homepage metrics
- **Use Cases** (`useCases`): Application scenarios
- **Pricing** (`pricing`): Pricing page content (excluding dynamic features)
- **Final CTA** (`finalCta`): Call-to-action sections
- **Footer** (`footer`): Footer links and sections
- **Meta Tags** (`meta`): SEO metadata
- **Video Demo** (`videoDemo`): Demo section content
- **Common** (`common`): Shared UI strings (error, loading, success)

### 2. Pricing Features (`plan-features.{lang}.json`)

These files contain dynamic pricing plan features and descriptions:

- Plan descriptions
- Feature titles and descriptions
- Dynamic variable replacements (e.g., `{how_many}`, `{unit_price}`)
- Icon mappings for visual elements

## 🔧 How to Contribute Translations

### Step 1: Fork the Repository

1. Visit the [LearnPack repository](https://github.com/your-org/learnpack)
2. Click the "Fork" button in the top-right corner
3. This creates your own copy of the repository

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/learnpack.git
cd learnpack
```

### Step 3: Create a New Branch

Create a descriptive branch name for your changes:

```bash
git checkout -b update-spanish-translations
# or
git checkout -b fix-hero-section-typo
# or
git checkout -b add-french-language
```

### Step 4: Edit Translation Files

#### Editing Existing Translations

1. Navigate to the appropriate file:
   - General content: `client/public/locales/{lang}/common.json`
   - Pricing features: `client/public/plan-features.{lang}.json`

2. Edit the JSON file while maintaining the structure:

```json
{
  "hero": {
    "title": "Your New Translation Here",
    "subtitle": "Updated subtitle text"
  }
}
```

**Important Rules:**
- ✅ Keep the JSON structure intact
- ✅ Only modify the text values (right side of `:`)
- ✅ Preserve special variables like `{how_many}`, `{{year}}`, `{unit_price}`
- ✅ Maintain proper JSON syntax (commas, quotes, brackets)
- ❌ Don't change the keys (left side of `:`)
- ❌ Don't remove or add new keys without discussion

#### Adding a New Language

1. Create new directories and files:

```bash
# Create locale directory
mkdir -p client/public/locales/fr

# Copy English template
cp client/public/locales/en/common.json client/public/locales/fr/common.json
cp client/public/plan-features.en.json client/public/plan-features.fr.json
```

2. Translate all values in the new files

3. Update the i18n configuration in `client/src/i18n/index.ts`:

```javascript
supportedLngs: ['en', 'es', 'fr'], // Add your language code
```

4. Update the language selector component (if exists) to include the new language

### Step 5: Test Your Changes Locally

Before submitting, test your changes:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit `http://localhost:5000/?lang=es` (or your language code) to test translations.

**Test Checklist:**
- [ ] All text displays correctly
- [ ] No broken layouts due to long text
- [ ] Special characters render properly
- [ ] Variables like `{how_many}` are replaced correctly
- [ ] Pricing features display properly on `/pricing` page
- [ ] No JSON syntax errors

### Step 6: Commit Your Changes

```bash
# Stage your changes
git add client/public/locales/
git add client/public/plan-features.*.json

# Commit with a clear message
git commit -m "Update Spanish translations for hero section"
# or
git commit -m "Fix typo in pricing features EN"
# or  
git commit -m "Add French language support"
```

### Step 7: Push to Your Fork

```bash
git push origin your-branch-name
```

### Step 8: Create a Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request" button
3. Select your branch
4. Fill out the PR template:

```markdown
## Description
Brief description of what translations you updated or added

## Language(s) Affected
- [ ] English (en)
- [ ] Spanish (es)
- [ ] Other: ___________

## Type of Change
- [ ] Translation update (existing language)
- [ ] Translation fix (typo/error)
- [ ] New language addition
- [ ] Content update

## Testing
- [ ] Tested locally with language switcher
- [ ] Verified JSON syntax is valid
- [ ] Checked responsive layouts
- [ ] Confirmed variables render correctly

## Screenshots (if applicable)
Add before/after screenshots for visual changes
```

5. Submit the Pull Request

## 📝 Translation Guidelines

### Language Style
- **Tone**: Professional yet friendly
- **Voice**: Active voice preferred
- **Clarity**: Use simple, clear language
- **Consistency**: Maintain consistent terminology across all translations

### Technical Considerations

#### 1. Variable Placeholders
Some strings contain dynamic variables. **Never translate these**:

```json
{
  "title": "Create {how_many} monthly courses",  // ✅ Correct
  "title": "Créer {cuántos} cours mensuels"     // ❌ Wrong - don't translate {how_many}
}
```

#### 2. HTML Entities
Preserve HTML entities in translations:

```json
{
  "text": "Price: $55&nbsp;/mo"  // ✅ Keep &nbsp;
}
```

#### 3. Character Length
- Keep translations reasonably similar in length to avoid layout issues
- Test on mobile devices if translation is significantly longer
- Flag any concerns about text overflow in your PR

#### 4. Cultural Adaptation
- Adapt examples to be culturally appropriate
- Use local currency formats where applicable
- Consider regional variations (e.g., ES vs LATAM Spanish)

### Common Translation Patterns

**Dates and Times:**
```json
{
  "footer": {
    "copyright": "© {{year}} LearnPack"  // {{year}} is auto-replaced
  }
}
```

**Pricing Variables:**
```json
{
  "title": "Add {how_many} learner seats",        // Quantity from API
  "buy_more": "${unit_price} per seat/month"     // Price from API
}
```

**Pluralization:**
When applicable, use i18next plural forms:
```json
{
  "items": "{{count}} item",
  "items_plural": "{{count}} items"
}
```

## 🚀 Quick Reference

### File Locations

| Content Type | File Path | Purpose |
|--------------|-----------|---------|
| General EN translations | `client/public/locales/en/common.json` | All English UI text |
| General ES translations | `client/public/locales/es/common.json` | All Spanish UI text |
| EN pricing features | `client/public/plan-features.en.json` | English pricing content |
| ES pricing features | `client/public/plan-features.es.json` | Spanish pricing content |

### Testing URLs

- English: `http://localhost:5000/?lang=en`
- Spanish: `http://localhost:5000/?lang=es`
- Force language: Add `?lang=XX` to any URL

### JSON Validation

Validate your JSON before submitting:
```bash
# Using Node.js
node -e "JSON.parse(require('fs').readFileSync('client/public/locales/en/common.json'))"

# Or use online validators
# https://jsonlint.com/
```

## 🐛 Common Issues

### Issue: JSON Syntax Error
**Solution:** Use a JSON validator or IDE with JSON support. Common mistakes:
- Missing comma between properties
- Extra comma after last property
- Unescaped quotes in strings (use `\"`)
- Unmatched brackets `{}` or `[]`

### Issue: Translation Not Showing
**Solution:** 
1. Clear browser cache
2. Check browser console for errors
3. Verify JSON file is valid
4. Ensure language code is correct in URL

### Issue: Variables Not Replaced
**Solution:**
- Check variable syntax: `{variable_name}` or `{{variable_name}}`
- Don't add spaces: `{ variable }` ❌ → `{variable}` ✅
- Don't translate variable names

### Issue: Layout Breaking
**Solution:**
- Translation might be too long
- Test on different screen sizes
- Consider abbreviations or alternative phrasing
- Note in PR for design team review

## 📞 Getting Help

- **Questions?** Open a [GitHub Discussion](https://github.com/your-org/learnpack/discussions)
- **Bug Reports:** Create an [Issue](https://github.com/your-org/learnpack/issues)
- **General Help:** Comment on your PR and tag `@maintainer-name`

## ✅ PR Review Process

1. **Automated Checks**: JSON validation, build tests
2. **Manual Review**: Maintainer reviews translations
3. **Testing**: Changes tested in staging environment
4. **Feedback**: Maintainer may request changes
5. **Merge**: Once approved, your PR will be merged
6. **Deployment**: Changes go live with next release

## 🎯 Priority Areas for Translation

If you're looking for where to contribute, these areas are often in need of updates:

1. **New Features**: Recently added features may lack translations
2. **Pricing Content**: Frequently updated, needs synchronization
3. **Error Messages**: Often overlooked but important for UX
4. **Meta Descriptions**: Critical for SEO in different languages

## 📜 License

By contributing translations, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for helping make LearnPack accessible to users worldwide!** 🌍✨
