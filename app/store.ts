import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { itemType } from "./data";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const LOCAL_STORAGE_CART_KEY = "persisted-cart-state";
export const cartSlice = createSlice({
	name: "cart",
	initialState: getInitialCartState(),
	reducers: {
		remove: (state) => {
			return [];
		},
		addItem: (state, action: PayloadAction<itemType>) => {
			return [...state, action.payload];
		},
	},
});

function getInitialCartState() {
	const persistedState = localStorage?.getItem(LOCAL_STORAGE_CART_KEY);
	if (!persistedState) {
		return [] as itemType[];
	}
	return JSON.parse(persistedState) as itemType[];
}

export const { remove, addItem } = cartSlice.actions;
const store = configureStore({
	reducer: { cart: cartSlice.reducer },
});
export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
