import ItemCard from "@/app/ItemCard";
import { type categoryType, fetchAllItems } from "@/app/data";

async function fetchData(category: categoryType) {
	return fetchAllItems().filter((i) => i.categories.includes(category));
}
export default async function Category({
	params,
}: {
	params: { category: categoryType };
}) {
	const data = await fetchData(params.category);
	return (
		<>
			<h1 className="mx-5 mt-5 text-3xl font-semibold capitalize">
				{params.category}
			</h1>
			<div className="m-5 flex flex-wrap gap-5">
				{data.map((i) => (
					<ItemCard item={i} key={i.id} />
				))}
			</div>
		</>
	);
}
