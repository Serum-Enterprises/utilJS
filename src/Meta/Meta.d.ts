/**
 * Get the Stack of the function calling this Getter
 */
export function __stack(): NodeJS.CallSite[];

/**
 * Get the Line Number of the function calling this Getter
 */
export function __line(): number;

/**
 * Get the Column Number of the function calling this Getter
 */
export function __column(): number;