import ItemCard from "../ItemCard";
import { fetchAllItems } from "../data";
import Filter from "./Filter";
import { applyParamFilters, urlSearchParamsRaw } from "./searchEngine";

async function fetchData(params: urlSearchParamsRaw) {
	console.log(params);
	return applyParamFilters(fetchAllItems(), params);
}

export default async function Search({
	searchParams,
}: {
	searchParams: urlSearchParamsRaw;
}) {
	const data = await fetchData(searchParams);
	return (
		<>
			<div className="relative flex flex-col gap-3 p-5 md:flex-row">
				{/* @ts-expect-error Async Server Component */}
				<Filter />
				<div className="flex flex-wrap justify-around gap-2 md:justify-start">
					{data.map((i) => (
						<ItemCard key={i.id} item={i} />
					))}
				</div>
			</div>
		</>
	);
}
