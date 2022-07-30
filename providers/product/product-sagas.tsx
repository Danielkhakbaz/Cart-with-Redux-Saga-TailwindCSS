import { all, call, put, takeEvery } from "redux-saga/effects";
import { productsFetch } from "../../services/api/fetchProducts";
import { ProductActions } from "./product-actions";

function* getProducts(): any {
  const products = yield call(productsFetch);
  yield put({ type: ProductActions.GET_PRODUCTS_SUCCESS, products });
}

function* increment(product: any): any {
  yield put({ type: ProductActions.INCREMENT_SUCCESS, product });
}

function* decrement(product: any): any {
  yield put({ type: ProductActions.DECREMENT_SUCCESS, product });
}

export function* watchAllSagas() {
  yield all([
    takeEvery(ProductActions.GET_PRODUCTS, getProducts),
    takeEvery(ProductActions.INCREMENT, increment),
    takeEvery(ProductActions.DECREMENT, decrement),
  ]);
  yield;
}
