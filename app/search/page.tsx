import ItemCard from "../ItemCard";
import { fetchAllItems } from "../data";
import { applyParamFilters, urlSearchParamsRaw } from "./searchEngine";

async function fetchData(params: urlSearchParamsRaw) {
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
			<div className="m-auto flex flex-wrap justify-center gap-1 p-5 after:flex-auto md:justify-between md:gap-5">
				{data.map((i) => (
					<ItemCard key={i.id} item={i} />
				))}
			</div>
		</>
	);
}
