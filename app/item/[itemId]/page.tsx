import { fetchAllItems } from "@/app/data";
import Image from "next/image";
import AddToFavoritesButton from "./AddToFavorite";
import AddToCartButton from "./AddToCartButton";

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
		throw new Error("Item not found");
	}
	const deliveryDate = new Date();
	deliveryDate.setDate(deliveryDate.getDate() + 2); // TODO add delivery date to items
	return (
		<div className="m-5 flex flex-col gap-5 lg:flex-row">
			<Image
				className="max-h-[50vh] w-full rounded bg-white object-contain p-5 shadow-lg lg:w-1/2"
				height={400}
				width={400}
				src={data.image}
				alt={data.name}
			/>
			<div>
				{data.manufacturer && <h3>{data.manufacturer}</h3>}
				<h1 className="text-5xl font-bold">{data.name}</h1>
				<h2 className="my-5 text-xl">${data.price.toLocaleString()}</h2>
				<p className="my-5">
					<span className="text-red-500">★★★★★</span> (30)
				</p>
				<div className="flex w-full gap-2">
					<AddToCartButton item={data} />
					<AddToFavoritesButton itemId={data.id} />
				</div>
				<h3 className="my-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Corrupti consequatur qui, minima repellat ipsum quidem a
					fuga facilis assumenda maxime libero perspiciatis earum
					tenetur laudantium facere repudiandae hic tempore
					voluptates!
				</h3>
				<div className="rounded border-2 border-red-500 bg-white  p-5">
					Delivery: {formatDate(deliveryDate)}
				</div>
			</div>
		</div>
	);
}

function formatDate(date: Date) {
	let suffix = "";
	const dateDay = date.getDate();
	// exceptions first
	if (dateDay === 11 || dateDay === 12 || dateDay === 13) {
		suffix = "th";
	} else if (dateDay.toString().at(-1) === "1") {
		suffix = "st";
	} else if (dateDay.toString().at(-1) === "2") {
		suffix = "nd";
	} else if (dateDay.toString().at(-1) === "3") {
		suffix = "rd";
	} else {
		suffix = "th";
	}
	return `${daysOfWeek[date.getDay()]}, ${
		months[date.getMonth()]
	} ${dateDay}${suffix}`;
}

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
