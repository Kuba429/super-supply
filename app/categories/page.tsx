import Link from "next/link";
import { categories, heroes } from "../data";

async function fetchData() {
	return { categories, heroes };
}
export default async function Categories() {
	const data = await fetchData();
	return (
		<>
			<h1 className="mx-5 mt-5 text-3xl font-semibold">
				Browse categories:
			</h1>
			<div className="grid cursor-pointer grid-cols-2 place-items-center gap-5 p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{data.categories.map((i) => (
					<Link
						href={`/categories/${i.name}`}
						className="flex h-40 w-full flex-col items-center rounded bg-white p-3 shadow-lg transition-colors hover:bg-slate-50"
					>
						<img
							className="h-4/5 object-contain"
							src={
								i.image.length > 0
									? i.image
									: "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1"
							}
						/>
						<h3 className="line-clamp-3 break-words capitalize">
							{i.name}
						</h3>
					</Link>
				))}
			</div>
		</>
	);
}
