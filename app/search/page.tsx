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
			{JSON.stringify(searchParams)}
			<div className="flex flex-col gap-3 p-5 sm:flex-row">
				{/* @ts-expect-error Async Server Component */}
				<Filter />
				<div className="m-auto flex flex-wrap justify-center gap-1 after:flex-auto md:justify-between md:gap-5">
					{data.map((i) => (
						<ItemCard key={i.id} item={i} />
					))}
				</div>
			</div>
		</>
	);
}
