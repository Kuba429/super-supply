import { fetchAllItems } from "@/app/data";
import Image from "next/image";

async function fetchData(id: string) {
	return fetchAllItems().find((i) => i.id === id);
}
export default async function ItemPage({
	params,
}: {
	params: { itemId: string };
}) {
	const data = await fetchData(params.itemId);
	if (!data) {
		// TODO make a 404 and redirect
		return <div>404</div>;
	}
	return (
		<div className="m-5 flex gap-5">
			<Image
				className="w-1/2 rounded bg-white object-contain p-5 shadow-lg"
				height={400}
				width={400}
				src={data.image}
				alt={data.name}
			/>
			<div className="">
				{/* TODO add to data */}
				<h3>Manufacturer</h3>
				<h1 className="text-5xl font-bold">{data.name}</h1>
				<h2 className="my-5 text-xl">${data.price.toLocaleString()}</h2>
			</div>
		</div>
	);
}
