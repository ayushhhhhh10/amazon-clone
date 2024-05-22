export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC TO ADD TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //LOGIC TO REMOVE FROM BASKET
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
      break;
      case "SET_USER":
        return {
         ...state,
          user: action.user,
        };
        break;
    default:
      return state;
  }
};

export default reducer;
