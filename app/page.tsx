import Banners from "./Banners";
import ItemCard from "./ItemCard";
import { fetchAllItems, type itemType } from "./data";

async function fetchItems() {
	const allItems = fetchAllItems();
	const items: itemType[] = allItems;
	return items;
}

export default async function Home() {
	const data = await fetchItems();
	return (
		<>
			<Banners />
			<div className="m-10 grid grid-cols-4 place-items-center gap-5">
				<ItemCard />
			</div>
		</>
	);
}
