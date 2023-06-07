"use client";

import { useEffect, useState } from "react";

const FAVORITES_LOCAL_STORAGE_KEY = "favorite-items";
export default function AddToFavoritesButton({ itemId }: { itemId: string }) {
	const [added, setAdded] = useState(false);
	const handleClick = () => {
		const storedFavoritesString = localStorage.getItem(
			FAVORITES_LOCAL_STORAGE_KEY
		);
		const favorites = (storedFavoritesString ?? "").split(",");
		if (!added) {
			favorites.push(itemId);
			localStorage.setItem(
				FAVORITES_LOCAL_STORAGE_KEY,
				favorites.join(",")
			);
			setAdded(true);
			return;
		}
		localStorage.setItem(
			FAVORITES_LOCAL_STORAGE_KEY,
			favorites.filter((x) => x !== itemId).join(",")
		);
		setAdded(false);
	};
	useEffect(() => {
		const storedFavorites = localStorage.getItem(
			FAVORITES_LOCAL_STORAGE_KEY
		);
		if (!storedFavorites) {
			setAdded(false);
			return;
		}
		const favorites = storedFavorites.split(",");
		if (favorites.find((x) => x === itemId)) setAdded(true);
	}, []);
	return (
		<button
			onClick={handleClick}
			className={`aspect-square w-10 rounded border-2 ${
				added ? "bg-red-500 text-white" : "bg-white text-red-500"
			}`}
		>
			♥{/* TODO better icon */}
		</button>
	);
}
