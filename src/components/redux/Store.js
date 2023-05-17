import { configureStore } from '@reduxjs/toolkit';
import Todo from'./Todo';
 export const Store = configureStore({
  reducer: {
    todos:Todo
  },
})

