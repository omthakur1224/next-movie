export function addTodo(text: string) {
  return { type: "ADD_TODO", text };
}

export function toggleTodo(id: number) {
  return { type: "TOGGLE_TODO", id };
}
export function deleteTodo(id: number) {
  return { type: "DELETE_TODO", id };
}
