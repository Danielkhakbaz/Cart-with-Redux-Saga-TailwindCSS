import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Reducers } from "./product-reducers";
import { watchAllSagas } from "./product-sagas";

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAllSagas);

export type RootState = ReturnType<typeof Store.getState>;
