import { ADD_ARTICLE } from "./action-types.js";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

// let nextTodoId = 0
// export const addTodo = text => ({
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
// })
//
// export const setVisibilityFilter = filter => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })
//
// export const toggleTodo = id => ({
//     type: 'TOGGLE_TODO',
//     id
// })
//
// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }