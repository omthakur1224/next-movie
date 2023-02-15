import { Action } from "./actionType";
import { TodoState } from "../components/contraint";

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(
  state: TodoState = initialState,
  action: Action
): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.text,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
