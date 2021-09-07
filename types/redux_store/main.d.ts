/// <reference  path="./interfaces.d.ts"/>

declare namespace ReduxStore {
  type Books = BooksReducerProps;
  type BooksCart = BooksCartReducerProps;
  type store = storeProps;
  type BookInCart = BookInCartProps;

  type sagaAction = SagaActionProps;
}
