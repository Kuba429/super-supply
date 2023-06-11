"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "./store";

export default function Cart() {
	const cart = useAppSelector((state) => state.cart);
	const price = cart.reduce((acc, c) => acc + c.price, 0);
	return (
		<div className="flex aspect-square items-center justify-center gap-1">
			<span>${formatPrice(price)}</span>
			<FaShoppingCart size={20} />
		</div>
	);
}

function formatPrice(price: number) {
	return price;
}
