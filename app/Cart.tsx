"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "./store";

export default function Cart() {
	const cart = useAppSelector((state) => state.cart);
	const itemCount = cart.length;
	return (
		<div className="flex max-w-xs items-center justify-end gap-1">
			<span role="status">{itemCount}</span>
			<FaShoppingCart className="aspect-square min-w-[20px]" size={20} />
		</div>
	);
}

//export function formatPrice(price: number) {
//	const integerLength = Math.trunc(price).toString().length;
//	return price.toPrecision(integerLength + 2);
//}
