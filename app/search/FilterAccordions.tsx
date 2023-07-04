"use client";
import { useState } from "react";
import { categoriesType } from "../data";
import { useSearchParams } from "next/navigation";
export function CategoryFilter({ categories }: { categories: categoriesType }) {
	const selectedCategories =
		useSearchParams().get("categories")?.split(",") ?? [];
	const [toggled, setToggled] = useState(selectedCategories.length > 0);
	return (
		<div>
			<h3 className="text-xl font-bold text-red-500">Filter</h3>
			<span
				className="cursor-pointer font-bold"
				onClick={() => setToggled((x) => !x)}
			>
				Category
			</span>
			<ul
				style={{
					maxHeight: toggled ? "50vh" : "0",
					overflow: toggled ? "auto" : "hidden",
					transition: "ease all 0.3s",
				}}
			>
				{categories.map((c) => (
					<li key={c.name} className="my-1 list-none">
						<label>
							<input
								type="checkbox"
								name="category"
								value={c.name}
								defaultChecked={selectedCategories.includes(
									c.name
								)}
							/>{" "}
							{c.name}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}
