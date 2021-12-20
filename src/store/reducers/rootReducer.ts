import { combineReducers } from "redux";
// import { listItem } from "../../App";
import todoReducer from "./todoReducer";

// export interface IRootReducer {
//   todoStore: listItem[],
// };

// export const initialState = {
//   todoStore: []
// };

// export const initialState2 =[{
//     title: "kek",
//   }];

//  function todo(state = initialState2, action: {type: string}) {
//   switch (action.type) {
//     case "kek": return {};
//     default:
//       return state;
//   }
// };

export const rootReducer = combineReducers({
  todoStore: todoReducer,
  // todo: todo
});

export type RootState = ReturnType<typeof rootReducer>;
