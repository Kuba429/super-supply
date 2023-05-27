import { ReactNode } from "react";
import Banners from "./Banners";
import ItemCard from "./ItemCard";
import { fetchAllItems, type itemType } from "./data";

async function fetchItems() {
	const allItems = fetchAllItems();
	const items: itemType[] = allItems;
	return items;
}

export default async function Home() {
	return (
		<>
			<Banners />
			{/* @ts-expect-error Async Server Component */}
			<TopSellersDisplay />
			{/* @ts-expect-error Async Server Component */}
			<HotDealsDisplay />
		</>
	);
}

function DisplayHeader({ children }: { children: ReactNode }) {
	return (
		<h2 className="ml-5 mt-5 text-3xl font-bold text-neutral-700">
			{children}
		</h2>
	);
}
function DisplayContainer({ data }: { data: itemType[] }) {
	return (
		<div className="flex w-full snap-x gap-4 overflow-scroll p-5 shadow-inherit">
			{data.map((i) => (
				<ItemCard item={i} />
			))}
		</div>
	);
}
async function TopSellersDisplay() {
	const data = await fetchItems();
	return (
		<>
			<DisplayHeader>Top Sellers</DisplayHeader>
			<DisplayContainer data={data} />
		</>
	);
}
async function HotDealsDisplay() {
	const data = await fetchItems();
	return (
		<>
			<DisplayHeader>Hot Deals</DisplayHeader>
			<DisplayContainer data={data} />
		</>
	);
}
