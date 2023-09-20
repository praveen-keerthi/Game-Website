import { createAction, props } from "@ngrx/store";

const getData = createAction(
  "[Home Page] any(Game) FromLoad", //[page] typeOfData onWhichEvent
  props<{ data: any }>(),  //props<data received:{}>
)

const getDataByTag = createAction(
  "[Home Page] any(Game) FilterClick",
  props<{ data: any }>()
)

const gameDetail = createAction(
  "[Home Page] any(Game) More Detail btn click",
  props<{ data: any }>()
)
const ProductAction = { getData, getDataByTag, gameDetail }


export { ProductAction }

