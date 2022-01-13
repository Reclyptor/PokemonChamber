import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, Middleware } from "redux";
import { Pokemon } from "../../types/Pokemon";
import rootReducer from "../reducer";

export type State = {
  pokemon?: Pokemon[];
};

const configureStore = (initialState: State = {}) => {
  const middleware: Middleware[] = [];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState as ReturnType<typeof rootReducer>, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && (module as any).hot) {
    (module as any).hot.accept("../reducer", () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureStore;