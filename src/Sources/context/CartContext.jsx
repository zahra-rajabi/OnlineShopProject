import { useReducer, useContext, createContext } from "react";
import { sumProducts } from "../../helpers/helper";
const CartContext = createContext();
const initialState = {
  selectedItems: [],
  ItemCounter: 0,
  total: 0,
  CheckOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        CheckOut: false,
      };

    default:
      throw new Error("Invalid Action");
  }
};
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export { useCart };
export default CartProvider;
