const formatCurrency = (
  field = 0,
  locales = "",
  currency = "",
  minimumFractionDigits = 0
) =>
  field.toLocaleString(locales, {
    style: "currency",
    currency,
    minimumFractionDigits,
  });

export default formatCurrency;
