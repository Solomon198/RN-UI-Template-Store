/// <reference  path="../entities/interfaces.d.ts"/>

interface BooksReducerProps {
  books: BookProps[];
  fetchBookStatus: string;
  fetchBooksError: string;
  isRefreshing: boolean;
  selectedBook: BookProps;
  lastFetched: any;
  queryParams: {
    page: number;
    search: string;
    category: string;
    per_page: number;
    hasNextPage: boolean;
  };
  categories: BookCategoriesProps[];
}

interface BookInCartProps extends BookProps {
  count: number;
}

interface BooksCartReducerProps {
  carts: BookInCartProps[];
}

interface storeProps {
  Books: BooksReducerProps;
  BooksCart: BooksCartReducerProps;
}

interface SagaActionProps {
  type: string;
  payload: any;
}
