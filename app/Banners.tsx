"use client";
import { BsArrowRightShort } from "react-icons/bs";
export default function () {
	return <ApparelBanner />;
}

function WeaponsBanner() {
	return (
		<section className="h-96 flex items-center justify-center gap-12">
			<div className="flex justify-center flex-col gap-5">
				<h1 className="text-6xl font-extrabold">Weapons</h1>
				<p className="max-w-sm">
					Shop for the most reliable weapons on the market
				</p>
				<ShopNowButton />
			</div>
			<img
				src="banners/thors-hammer.png"
				className="h-1/2 object-contain rotate-45"
				alt="Thor's hammer"
			/>
		</section>
	);
}

function ApparelBanner() {
	return (
		<section className="h-96 flex items-center justify-center gap-12">
			<img
				src="banners/starlord.webp"
				className="h-full object-contain"
				alt="Starlord"
			/>
			<div className="flex justify-center items-end flex-col gap-5">
				<h1 className="text-6xl font-extrabold">Apparel</h1>
				<p className="max-w-sm text-right">
					Step into greatness with our remarkable range of costumes
					and suits, tailored for extraordinary heroes
				</p>
				<ShopNowButton />
			</div>
		</section>
	);
}
function ArtifactsBanner() {
	return (
		<section className="h-96 flex items-center justify-center gap-12">
			<div className="flex justify-center items-start flex-col gap-5">
				<h1 className="text-6xl font-extrabold">Artifacts</h1>
				<p className="max-w-sm">
					Buy some of the most powerful objects in the universe!
				</p>
				<ShopNowButton />
			</div>
			<img
				src="banners/gauntlet.webp"
				className="h-2/3 object-contain"
				alt="Infinity Gauntlet"
			/>
		</section>
	);
}
const ShopNowButton = () => {
	return (
		<button className="group flex items-center rounded bg-red-500 text-white text-xl px-3 py-2">
			Shop now
			<BsArrowRightShort className="group-hover:translate-x-1 transition-transform" />
		</button>
	);
};
