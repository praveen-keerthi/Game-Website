import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DetailState, ProductState } from "../reducers/products.reducer";

export const selectProductSelector = createFeatureSelector<ProductState>('products');

export const detailedGameDataSelector = createFeatureSelector<DetailState>("game");

// export const productData = createSelector(
//   selectProductSelector,
//   (val) => {
//     return val.products;
//   }
// )

// export const gameData = createSelector(
//   detailedGameDataSelector,
//   (val) => {
//     return val.game
//   }
// )