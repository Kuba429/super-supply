"use client";
import { BsArrowRightShort } from "react-icons/bs";
export default function () {
	// TODO carousel
	return (
		<>
			<ApparelBanner />
			<WeaponsBanner />
			<ArtifactsBanner />
		</>
	);
}

function ApparelBanner() {
	return (
		<section className="m-5 grid h-96 grid-cols-2 grid-rows-[1fr_auto_1fr] place-items-start gap-x-5 gap-y-5">
			<img
				src="banners/starlord.webp"
				className="row-start-1 row-end-4 max-h-full place-self-center object-contain"
				alt="Starlord"
			/>
			<h1 className="grid-row-1 self-end text-3xl font-extrabold md:text-6xl">
				Apparel
			</h1>
			<p className="grid-row-2 max-w-sm self-center text-left">
				Step into greatness with our remarkable range of costumes and
				suits, tailored for extraordinary heroes
			</p>
			<button className="group flex items-center rounded bg-red-500 px-3 py-2 text-xl text-white">
				Shop now
				<BsArrowRightShort className="transition-transform group-hover:translate-x-1" />
			</button>
		</section>
	);
}

function WeaponsBanner() {
	return (
		<section className="m-5 grid h-96 grid-cols-2 grid-rows-[1fr_auto_1fr] place-items-end items-start gap-x-5 gap-y-5">
			<h1 className="self-end text-3xl font-extrabold md:text-6xl">
				Weapons
			</h1>
			<p className="grid-row-2 max-w-sm self-center text-right">
				Shop for the most reliable weapons on the market
			</p>
			<ShopNowButton />
			<img
				src="banners/thors-hammer.png"
				className="col-start-2 row-start-1 row-end-4 max-h-full rotate-45 place-self-center object-contain"
				alt="Thor's hammer"
			/>
		</section>
	);
}

function ArtifactsBanner() {
	return (
		<section className="m-5 grid h-96 grid-cols-2 grid-rows-[1fr_auto_1fr] place-items-start gap-x-5 gap-y-5">
			<h1 className="grid-row-1 self-end text-3xl font-extrabold md:text-6xl">
				Artifacts
			</h1>
			<p className="grid-row-2 max-w-sm self-center text-left">
				Buy some of the most powerful objects in the universe!
			</p>
			<ShopNowButton />
			<img
				src="banners/gauntlet.webp"
				className="row-start-1 row-end-4 max-h-full place-self-center object-contain"
				alt="Infinity Gauntlet"
			/>
		</section>
	);
}
const ShopNowButton = () => {
	return (
		<button className="group flex items-center rounded bg-red-500 px-3 py-2 text-xl text-white">
			Shop now
			<BsArrowRightShort className="transition-transform group-hover:translate-x-1" />
		</button>
	);
};
