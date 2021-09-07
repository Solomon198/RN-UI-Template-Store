import {AddCart} from './actions';
const intialState: ReduxStore.BooksCart = {
  carts: [],
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case AddCart.ADD_TO_CART: {
      const carts = Object.assign([] as any[], state.carts) as any[];
      let itemExist = false;
      carts.forEach((item: ReduxStore.BookInCart) => {
        if (item.id === action.payload.id) {
          item.count += 1;
          itemExist = true;
        }
      });
      if (!itemExist) {
        let payload = action.payload;
        payload.count = 1;
        carts.push(payload);
      }

      state = {
        ...state,
        carts,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
