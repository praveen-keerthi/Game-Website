import { createReducer, on } from "@ngrx/store";
import { ProductAction } from "../actions/products.action";

export interface ProductState {
  products: any;
}

export const initialProductState: ProductState = {
  products: undefined
}

export const productReducer = createReducer(initialProductState,
  on(ProductAction.getData, (state: ProductState, action) => {
    return action.data;
  }),

  on(ProductAction.getDataByTag, (state: ProductState, action) => {
    return action.data;
  })

)

export interface DetailState {
  game: any;
}

export const initialGameState: DetailState = {
  game: undefined
}

export const gameDetailReducer = createReducer(initialGameState,
  on(ProductAction.gameDetail, (state: DetailState, action) => {
    return action.data;
  }))