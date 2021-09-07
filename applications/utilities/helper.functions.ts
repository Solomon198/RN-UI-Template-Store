export function formatAmountWithComma(amount: string | number) {
  // eslint-disable-next-line radix
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
