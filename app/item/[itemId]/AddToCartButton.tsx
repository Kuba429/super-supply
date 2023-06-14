"use client";
import { itemType } from "@/app/data";
import { addItem, useAppDispatch, useAppSelector } from "@/app/store";

export default function AddToCartButton({ item }: { item: itemType }) {
	const dispatch = useAppDispatch();
	const cart = useAppSelector((s) => s.cart);
	if (cart.find((i) => i.id === item.id)) {
		return (
			<button className="flex-grow rounded border-2 border-red-500 bg-white px-5 py-2 uppercase text-red-500">
				Go to your cart
			</button>
		);
	}
	return (
		<button
			onClick={() => dispatch(addItem(item))}
			className="flex-grow rounded border-2 bg-red-500 px-5 py-2 uppercase text-white"
		>
			Add to cart
		</button>
	);
}
