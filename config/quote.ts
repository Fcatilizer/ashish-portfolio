// Edit the displayed choices here. Values match the existing quote API and database schema.
export const quoteProjectTypes = [
  { value: "web-app", label: "Web app" },
  { value: "android-app", label: "Android app" },
  { value: "ios-app", label: "iOS app" },
  { value: "dashboard", label: "Admin dashboard" },
  { value: "other", label: "Something else" },
] as const;

export const quoteBudgetOptions = [
  // An empty value is the API's supported representation of an unspecified budget.
  { value: "", label: "Not sure yet" },
  { value: "under-50k", label: "Under ₹50,000" },
  { value: "50k-2l", label: "₹50,000 – ₹2,00,000" },
  { value: "2l-10l", label: "₹2,00,000 – ₹10,00,000" },
  { value: "above-10l", label: "Above ₹10,00,000" },
] as const;

export type QuoteProjectType = (typeof quoteProjectTypes)[number]["value"];
