import { IAction } from "./reducer";

export default function actionCreator<T>(type: string): IAction<T> {
  return Object.assign((payload: T) => ({ type, payload }), { type });
}

export const checkToDo = actionCreator<{todoId: number}>('checkToDo');
