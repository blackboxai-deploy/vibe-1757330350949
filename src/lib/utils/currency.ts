export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatPrice = (price: number): string => {
  return formatCurrency(price);
};

export const calculateDiscount = (originalPrice: number, discountPercentage: number): number => {
  return originalPrice * (discountPercentage / 100);
};

export const calculateDiscountedPrice = (originalPrice: number, discountPercentage: number): number => {
  return originalPrice - calculateDiscount(originalPrice, discountPercentage);
};

export const calculateTax = (subtotal: number, taxRate: number = 0.08): number => {
  return subtotal * taxRate;
};

export const calculateShipping = (subtotal: number, freeShippingThreshold: number = 50): number => {
  return subtotal >= freeShippingThreshold ? 0 : 9.99;
};

export const formatCompactNumber = (num: number): string => {
  if (num < 1000) return num.toString();
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K`;
  return `${(num / 1000000).toFixed(1)}M`;
};