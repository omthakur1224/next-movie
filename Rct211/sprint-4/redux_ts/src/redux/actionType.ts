export type Action =
| { type: 'ADD_TODO'; text: string }
| { type: 'TOGGLE_TODO'; id: number }
| {type: "DELETE_TODO", id: number}
