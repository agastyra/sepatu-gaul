import { createContext, useReducer, useContext } from "react";

const TotalPriceContext = createContext();
const TotalPriceDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return (state = action.payload);
    default:
      return action.type;
  }
};

const TotalPriceContextProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(reducer, 0);

  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
};

export const useTotalPrice = () => useContext(TotalPriceContext);
export const useTotalPriceDispatch = () =>
  useContext(TotalPriceDispatchContext);

export default TotalPriceContextProvider;
