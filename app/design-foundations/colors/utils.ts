// Utility functions for color manipulations and accessibility calculations

/**
 * Converts a hex color string to RGB values
 * @param hex Hex color string (e.g., "#FF3300" or "#F30")
 * @returns Object with r, g, b values
 */
export function HexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Handle shorthand hex (e.g., #F30)
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return { r, g, b };
}

/**
 * Calculates the relative luminance of a color
 * Based on WCAG 2.1 definition: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 * @param rgb RGB values as an array [r, g, b]
 * @returns Relative luminance value
 */
export function GetRelativeLuminance(rgb: [number, number, number]): number {
  // Convert RGB values to the range [0, 1]
  const [r, g, b] = rgb.map(val => val / 255);
  
  // Apply the formula for relative luminance
  const rsrgb = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gsrgb = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bsrgb = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  
  return 0.2126 * rsrgb + 0.7152 * gsrgb + 0.0722 * bsrgb;
}

/**
 * Calculates the contrast ratio between two colors
 * Based on WCAG 2.1 definition: https://www.w3.org/TR/WCAG21/#contrast-ratio
 * @param rgb1 First color as RGB array [r, g, b]
 * @param rgb2 Second color as RGB array [r, g, b]
 * @returns Contrast ratio (1:1 to 21:1)
 */
export function GetContrastRatio(
  rgb1: [number, number, number], 
  rgb2: [number, number, number]
): number {
  const l1 = GetRelativeLuminance(rgb1);
  const l2 = GetRelativeLuminance(rgb2);
  
  // Ensure lighter color is first for the formula
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Determines WCAG conformance level for text
 * @param contrastRatio The calculated contrast ratio
 * @param isLargeText Whether the text is large (18pt+ or 14pt+ bold)
 * @returns 'AAA', 'AA', 'AA Large', or 'Fail'
 */
export function GetWcagLevel(contrastRatio: number, isLargeText = false): string {
  if (contrastRatio >= 7) return 'AAA';
  if (contrastRatio >= 4.5) return 'AA';
  if (isLargeText && contrastRatio >= 3) return 'AA Large';
  return 'Fail';
}

/**
 * Converts RGB color to HSL
 * @param r Red component (0-255)
 * @param g Green component (0-255)
 * @param b Blue component (0-255)
 * @returns HSL values as [h, s, l]
 */
export function RgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    
    h /= 6;
  }
  
  return [h * 360, s * 100, l * 100];
}

/**
 * Lightens or darkens a color by a percentage
 * @param hex Hex color string
 * @param percent Percentage to lighten (positive) or darken (negative)
 * @returns Modified hex color
 */
export function AdjustColor(hex: string, percent: number): string {
  const { r, g, b } = HexToRgb(hex);
  const [h, s, l] = RgbToHsl(r, g, b);
  
  // Adjust lightness
  const newL = Math.max(0, Math.min(100, l + percent));
  
  // Convert back to hex
  return HslToHex(h, s, newL);
}

/**
 * Converts HSL color to Hex
 * @param h Hue (0-360)
 * @param s Saturation (0-100)
 * @param l Lightness (0-100)
 * @returns Hex color string
 */
export function HslToHex(h: number, s: number, l: number): string {
  h /= 360;
  s /= 100;
  l /= 100;
  
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
