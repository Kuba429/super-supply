import { CategoryFilter } from "./FilterAccordions";
import { categories } from "../data";

async function fetchData() {
	return { categories };
}
export default async function Filter() {
	const data = await fetchData();
	return (
		<div className="h-fit rounded bg-slate-100 p-3">
			<CategoryFilter categories={data.categories} />
			<div className="m-1 flex items-center justify-center">
				<button className="w-full rounded border border-red-500 bg-red-500 px-5 py-1 text-center text-white transition-colors hover:bg-slate-200 hover:text-red-500">
					Apply
				</button>
			</div>
		</div>
	);
}
