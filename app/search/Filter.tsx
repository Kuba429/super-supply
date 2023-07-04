import { AccordionFilter } from "./FilterAccordion";
import { categories, heroes, manufacturers } from "../data";
import { redirect } from "next/navigation";

async function fetchData() {
	return { categories, usedBy: heroes, manufacturers };
}
export default async function Filter() {
	async function applyFiltersAction(data: FormData) {
		"use server";
		const params: [string, string][] = [];
		const categoriesParam = data.getAll("categories").toString();
		if (categoriesParam.length > 0)
			params.push(["categories", categoriesParam]);

		const usedByParams = data.getAll("usedBy").toString();
		if (usedByParams.length > 0) params.push(["usedBy", usedByParams]);

		const manufacturersParam = data.getAll("manufacturers")?.toString();
		if (manufacturersParam.length > 0)
			params.push(["manufacturers", manufacturersParam]);

		const urlParams = new URLSearchParams(params);
		redirect("/search?" + urlParams.toString());
	}
	const fetchedData = await fetchData();
	return (
		<div className="h-fit rounded bg-slate-100 p-3">
			<h3 className="text-xl font-bold text-red-500">Filter</h3>
			<form action={applyFiltersAction}>
				<AccordionFilter
					title={"Category"}
					paramKey={"categories"}
					values={fetchedData.categories.map((c) => c.name)}
				/>
				<AccordionFilter
					title={"Used by"}
					paramKey={"usedBy"}
					values={fetchedData.usedBy.map((c) => c.name)}
				/>
				<AccordionFilter
					title={"Manufacturer"}
					paramKey={"manufacturers"}
					values={fetchedData.manufacturers.map((c) => c.name)}
				/>
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
