import { configureStore, createSlice } from "@reduxjs/toolkit";
import { itemType } from "./data";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const cartSlice = createSlice({
	name: "cart",
	initialState: [] as itemType[],
	reducers: {
		remove: (state) => {
			state = [];
		},
	},
});

export const { remove } = cartSlice.actions;
const store = configureStore({
	reducer: { cart: cartSlice.reducer },
});
export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
