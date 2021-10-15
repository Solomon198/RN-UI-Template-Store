export function formatAmountWithComma(amount: string | number) {
  // eslint-disable-next-line radix
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getNewQueryParams(
  queryParams: entities.queryParams,
  newParams: entities.queryParams,
) {
  let $newParams = newParams as any;
  let newQueryParams = queryParams;
  Object.keys(newParams).forEach((key: any) => {
    newQueryParams = {...newQueryParams, [key]: $newParams[key]};
  });

  return newQueryParams;
}

export const DefaultQueryParams = {
  page: 1,
  search: '',
  category: '',
  per_page: 20,
};
