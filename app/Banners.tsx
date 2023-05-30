import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

export default function Banners() {
	return (
		<Carousel showIndicator={true}>
			<ApparelBanner />
			<WeaponsBanner />
			<ArtifactsBanner />
		</Carousel>
	);
}

import apparelImage from "../public/banners/starlord.webp";
function ApparelBanner() {
	return (
		<section className="m-5 grid h-96 grid-cols-2 grid-rows-[1fr_auto_1fr] place-items-start gap-x-5 gap-y-5">
			<Image
				src={apparelImage}
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

import weaponImage from "../public/banners/rocket.webp";
function WeaponsBanner() {
	return (
		<section className="m-5 grid h-96 grid-cols-2 grid-rows-[1fr_auto_1fr] place-items-end items-start gap-x-5 gap-y-5">
			<h1 className="self-end text-3xl font-extrabold md:text-6xl">
				Weapons
			</h1>
			<p className="grid-row-2 max-w-sm self-center text-right">
				Unlock Limitless Power with our Handpicked Selection of Mighty
				Weapons
			</p>
			<ShopNowButton />
			<Image
				src={weaponImage}
				className="col-start-2 row-start-1 row-end-4 max-h-full place-self-center object-contain"
				alt="Thor's hammer"
			/>
		</section>
	);
}

import artifactImage from "../public/banners/gauntlet.webp";
import { Carousel } from "./Carousel";
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
			<Image
				src={artifactImage}
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
