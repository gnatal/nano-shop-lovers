import {configureStore, createSlice, ThunkAction} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { Action, combineReducers, createStore } from 'redux';

const reducer = {}
const rootReducer = combineReducers(reducer);
const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const makeStore = () =>{
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return createStore(rootReducer);
  }
  return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);


// export const subjectSlice = createSlice({
//     name: 'subject',

//     initialState: {} as any,

//     reducers: {
//         setEnt(state, action) {
//             return action.payload;
//         },
//     },

//     extraReducers: {
//         [HYDRATE]: (state, action) => {
//             console.log('HYDRATE', state, action.payload);
//             return {
//                 ...state,
//                 ...action.payload.subject,
//             };
//         },
//     },
// });

// export const fetchSubject = (id: any): AppThunk => async dispatch => {
//     const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

//     await timeoutPromise(200);

//     dispatch(
//         subjectSlice.actions.setEnt({
//             [id]: {
//                 id,
//                 name: `Subject ${id}`,
//             },
//         }),
//     );
// };
