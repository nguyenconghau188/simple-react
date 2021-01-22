export const getTodoList = (store) => store.todoList;

export const getTodoById = (store, id) => ({ ...store.todoMap[id], id });

export const getTodos = (store) => getTodoList(store).map((id) => getTodoById(store, id));
