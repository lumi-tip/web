import yaml from 'js-yaml';

interface RedirectRule {
  from: string;
  to: string;
}

interface RedirectsConfig {
  redirects: RedirectRule[];
}

let redirectsCache: RedirectRule[] | null = null;

async function loadRedirects(): Promise<RedirectRule[]> {
  if (redirectsCache) {
    return redirectsCache;
  }

  try {
    const response = await fetch('/redirects.yml');
    if (!response.ok) {
      console.warn('Redirects file not found');
      return [];
    }

    const yamlText = await response.text();
    const config = yaml.load(yamlText) as RedirectsConfig;
    
    redirectsCache = config.redirects || [];
    return redirectsCache;
  } catch (error) {
    console.error('Error loading redirects:', error);
    return [];
  }
}

export function normalizePathname(pathname: string): string {
  let normalized = pathname;
  
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  
  if (normalized.endsWith('/') && normalized.length > 1) {
    normalized = normalized.slice(0, -1);
  }
  
  return normalized;
}

export function buildRedirectUrl(to: string, search: string): string {
  const isAbsolute = to.startsWith('http://') || to.startsWith('https://');
  
  if (!search || search === '?') {
    return to;
  }
  
  if (isAbsolute) {
    const url = new URL(to);
    const existingParams = new URLSearchParams(url.search);
    const newParams = new URLSearchParams(search);
    
    newParams.forEach((value, key) => {
      if (!existingParams.has(key)) {
        existingParams.set(key, value);
      }
    });
    
    url.search = existingParams.toString();
    return url.toString();
  } else {
    const separator = to.includes('?') ? '&' : '?';
    const queryString = search.startsWith('?') ? search.slice(1) : search;
    return queryString ? `${to}${separator}${queryString}` : to;
  }
}

export async function checkForRedirect(pathname: string, search: string = ''): Promise<string | null> {
  const redirects = await loadRedirects();
  const normalizedPath = normalizePathname(pathname);
  
  const matchedRule = redirects.find(rule => {
    const normalizedFrom = normalizePathname(rule.from);
    return normalizedFrom === normalizedPath;
  });
  
  if (matchedRule) {
    return buildRedirectUrl(matchedRule.to, search);
  }
  
  return null;
}
