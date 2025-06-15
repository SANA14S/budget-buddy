import { store } from "../app/store";
import { RootState } from "../app/store";
import { Settings } from "../types/types";

// Function to get settings from the store
function getSettings(): Settings {
  const state = store.getState() as RootState;
  return state.settings.settings;
}

// Function to format currency based on settings
export function formatCurrency(amount: number): string {
  if (amount <= 0) return "₹0"; // prevent negative/zero display

  const settings = getSettings();
  const currency = settings.currency || "INR";

  if (currency === "INR") {
    return `₹${amount.toLocaleString("en-IN")}`;
  }

  const formatter = new Intl.NumberFormat(navigator.language || "en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(amount);
}

