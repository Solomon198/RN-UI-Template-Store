import {AddCart} from './actions';
const intialState: ReduxStore.BooksCart = {
  carts: [],
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case AddCart.ADD_TO_CART: {
      const carts = Object.assign([] as any[], state.carts) as any[];
      let itemExist = false;
      carts.forEach((item: ReduxStore.BookInCart, index) => {
        if (item._id === action.payload._id) {
          if (action.isAdding) {
            item.count += 1;
            itemExist = true;
          } else {
            if (item.count > 1) {
              item.count -= 1;
            } else {
              carts.splice(index, 1);
            }
            itemExist = true;
          }
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
