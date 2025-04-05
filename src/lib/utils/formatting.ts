// src/lib/utils/formatting.ts

/**
 * Format currency amount with the specified locale and currency
 */
export function formatCurrency(
    amount: number, 
    locale: string = 'es-MX', 
    currency: string = 'MXN'
): string {
    return new Intl.NumberFormat(locale, { 
        style: 'currency', 
        currency: currency 
    }).format(amount);
}

/**
 * Format percentage with specified number of digits
 */
export function formatPercentage(
    value: number, 
    fractionDigits: number = 1
): string {
    return value.toFixed(fractionDigits) + '%';
}

/**
 * Format date with specified locale and options
 */
export function formatDate(
    date: Date | string, 
    locale: string = 'es-MX',
    options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }
): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Get CSS class for risk level
 */
export function getRiskLevelClass(level: string): string {
    switch(level) {
        case 'Alto': return 'bg-red-100 text-red-700';
        case 'Medio': return 'bg-amber-100 text-amber-700';
        case 'Bajo': return 'bg-green-100 text-green-700';
        default: return 'bg-slate-100 text-slate-700';
    }
}

/**
 * Truncate text to specified length and add ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}