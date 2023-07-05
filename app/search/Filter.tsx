import { AccordionFilter } from "./FilterAccordion";
import { categories, heroes, manufacturers } from "../data";
import { redirect } from "next/navigation";
import { urlSearchParamsRaw } from "./searchEngine";

async function fetchData() {
	return { categories, usedBy: heroes, manufacturers };
}
export default async function Filter() {
	const fetchedData = await fetchData();
	const filters: {
		title: string;
		paramKey: keyof urlSearchParamsRaw;
		values: string[];
	}[] = [
		{
			title: "Used by",
			paramKey: "usedBy",
			values: fetchedData.usedBy.map((c) => c.name),
		},
		{
			title: "Categories",
			paramKey: "categories",
			values: fetchedData.categories.map((c) => c.name),
		},
		{
			title: "Manufacturer",
			paramKey: "manufacturers",
			values: fetchedData.manufacturers.map((c) => c.name),
		},
	];
	async function applyFiltersAction(data: FormData) {
		"use server";
		const params: [string, string][] = [];
		for (const f of filters) {
			const param = data.getAll(f.paramKey).toString();
			if (param.length > 0) params.push([f.paramKey, param]);
		}

		const urlParams = new URLSearchParams(params);
		redirect("/search?" + urlParams.toString());
	}
	return (
		<div className="h-fit w-full whitespace-nowrap rounded  bg-slate-100 p-3 lg:w-fit">
			<h3 className="text-xl font-bold text-red-500">Filter</h3>
			<form action={applyFiltersAction}>
				{filters.map((f) => (
					<AccordionFilter
						title={f.title}
						paramKey={f.paramKey}
						values={f.values}
					/>
				))}

				<div className="m-1 flex items-center justify-center">
					<button
						type="submit"
						className="w-full rounded border border-red-500 bg-red-500 px-5 py-1 text-center text-white transition-colors hover:bg-slate-200 hover:text-red-500"
					>
						Apply
					</button>
				</div>
			</form>
		</div>
	);
}
