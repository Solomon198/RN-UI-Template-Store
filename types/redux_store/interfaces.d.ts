/// <reference  path="../entities/interfaces.d.ts"/>

interface BooksReducerProps {
  books: BookProps[];
  fetchBookStatus: string;
  fetchBooksError: string;
  page: number;
  selectedBook: BookProps;
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
