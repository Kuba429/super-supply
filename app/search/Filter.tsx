import { CategoryFilter } from "./FilterAccordions";
import { categories } from "../data";
import { redirect } from "next/navigation";

async function fetchData() {
	return { categories };
}
export default async function Filter() {
	async function applyFiltersAction(data: FormData) {
		"use server";
		const params: [string, string][] = [];

		const categoriesParam = data.getAll("category").toString();
		if (categoriesParam.length > 0)
			params.push(["categories", categoriesParam]);

		const urlParams = new URLSearchParams(params);
		redirect("/search?" + urlParams.toString());
	}
	const data = await fetchData();
	return (
		<div className="h-fit rounded bg-slate-100 p-3">
			<form action={applyFiltersAction}>
				<CategoryFilter categories={data.categories} />
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
