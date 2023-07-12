import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { itemType } from "./data";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const LOCAL_STORAGE_CART_KEY = "persisted-cart-state";
export const cartSlice = createSlice({
	name: "cart",
	initialState: getInitialCartState(),
	reducers: {
		remove: (_state) => {
			localStorage.setItem(LOCAL_STORAGE_CART_KEY, "");
			return [];
		},
		addItem: (state, action: PayloadAction<itemType>) => {
			const newState = [...state, action.payload];
			localStorage.setItem(
				LOCAL_STORAGE_CART_KEY,
				JSON.stringify(newState)
			);
			return newState;
		},
	},
});

function getInitialCartState() {
	const persistedState = localStorage?.getItem(LOCAL_STORAGE_CART_KEY);
	if (!persistedState || persistedState.length < 2) {
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
