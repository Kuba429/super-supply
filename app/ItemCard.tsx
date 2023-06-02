import Image from "next/image";
import { type itemType } from "./data";

export default function ItemCard({ item }: { item: itemType }) {
	return (
		<div className="relative flex h-80 w-52 flex-shrink-0 cursor-pointer snap-center flex-col rounded bg-neutral-100 shadow-md after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-0 after:w-[calc(100%_+_4px)] after:translate-x-[-2px] after:translate-y-[2px] after:rounded after:bg-red-500 after:transition-all hover:after:h-[calc(100%_+_4px)]">
			<Image
				src={item.image}
				width={210}
				height={250}
				alt={item.name + " image"}
				className="h-1 flex-grow self-center justify-self-center object-contain p-1"
			/>
			<div className="rounded-b bg-neutral-100 p-2 shadow-inner">
				<h3 className="line-clamp-3 break-words text-xl font-semibold">
					{item.name}
				</h3>
				<h2 className="text-sm">${item.price.toLocaleString()}</h2>
			</div>
		</div>
	);
}
