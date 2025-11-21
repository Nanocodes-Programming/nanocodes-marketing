import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to an element by ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (in pixels)
 * @param focusFirstInput - If true, focuses the first input field after scrolling (default: false)
 */
export function scrollToElement(elementId: string, offset: number = 0, focusFirstInput: boolean = false) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // If focusFirstInput is true, wait for scroll to complete then focus first input
    if (focusFirstInput) {
      // Wait for smooth scroll to complete (typically takes ~500-1000ms)
      // Using setTimeout to ensure scroll animation has time to start
      setTimeout(() => {
        // Find the first enabled input field within the scrolled element
        // This selector targets all common input types and inputs without a type attribute
        const firstInput = element.querySelector<HTMLInputElement>(
          'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
        );
        if (firstInput) {
          firstInput.focus();
          // Scroll the input into view one more time to ensure it's fully visible
          firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 600); // Delay to allow smooth scroll to complete
    }
  }
}
