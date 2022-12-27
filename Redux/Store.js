import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './Slice/LoginSlice';
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
// import localStorage from 'redux-persist/es/storage';
// import {FLUSH, persistStore, persistReducer} from 'redux-persist';


// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage: localStorage,
//     stateReconciler: autoMergeLevel2,
//     userData: ["login"], //Things u want to persist
//     blacklist: [], //Things u dont
//   };

//   const persistReducers=persistReducer(loginReducer)

  export const store=configureStore({
    reducer:{
        root: loginReducer,
    },
    devTools:true
  })

//   export const persistor=persistStore(store)
