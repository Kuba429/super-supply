import Banners from "./Banners";
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
		</>
	);
}
