"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
export function AccordionFilter({
	values,
	paramKey,
	title,
}: {
	title: string;
	paramKey: string;
	values: string[];
}) {
	const p = useSearchParams();
	const selectedValues = p.get(paramKey)?.split(",") ?? [];
	const [toggled, setToggled] = useState(selectedValues.length > 0);
	return (
		<div>
			<span
				className="cursor-pointer font-bold"
				onClick={() => setToggled((x) => !x)}
			>
				{title}
			</span>
			<ul
				style={{
					maxHeight: toggled ? "50vh" : "0",
					overflow: toggled ? "auto" : "hidden",
					transition: "ease all 0.3s",
				}}
			>
				{values.map((v) => (
					<li key={"filter-item-" + v} className="my-1 list-none">
						<label>
							<input
								type="checkbox"
								name={paramKey}
								value={v}
								defaultChecked={selectedValues.includes(v)}
								className="accent-red-500"
							/>{" "}
							{v}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}
