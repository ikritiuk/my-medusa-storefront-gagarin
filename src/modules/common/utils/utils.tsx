const countryTranslations: { [key: string]: string } = {
  "Russian Federation": "Россия",
  "Belarus": "Беларусь",
  "Kazakhstan": "Казахстан",
  // Add more countries as needed
};

export function translateCountryToRussian(country: string): string {
  return countryTranslations[country] || country; // Return the original name if not found
}

export function formatCurrency(value: string): string {
  const regex = /(\bRUB\s+)([\d,]+)\.\d{2}/;
  return value.replace(regex, '$2 ₽').trim();
}

export function formatCurrencyX2(value: string): string {
  const regex = /(\d[\d,]*)/; // Matches the numeric part
  const match = value.match(regex);

  if (match) {
    const numericValue = parseFloat(match[0].replace(/,/g, '')); // Remove commas and convert to number
    const doubledValue = numericValue * 2; // Double the value
    // Format back to currency without decimal part
    return `${doubledValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} RUB`; // Format without decimals
  }

  return value; // Return the original value if no match is found
}
