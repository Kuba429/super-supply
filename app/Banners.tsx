"use client";
import {
	CSSProperties,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function () {
	const SLIDES_COUNT = 3;
	const [slide, setSlide] = useState(0);
	useEffect(() => {
		const interval = setInterval(
			() => setSlide((s) => (s + 1) % SLIDES_COUNT),
			5000
		);
		return () => clearInterval(interval);
	}, [setSlide, slide]); // added slide as dep for when user explicitly changes slide

	// tailwind doesn't seem to be working well with arbitrary values when state is involved
	const style: CSSProperties = {
		transform: `translateX(-${slide * 100}vw)`,
		transition: "transform 0.3s ease",
	};
	return (
		<>
			<div className="grid w-screen grid-cols-[repeat(3,_100vw)] overflow-x-hidden transition-transform">
				<div style={style}>
					<ApparelBanner />
				</div>
				<div style={style}>
					<WeaponsBanner />
				</div>
				<div style={style}>
					<ArtifactsBanner />
				</div>
			</div>
			<SlideIndicator
				SLIDES_COUNT={SLIDES_COUNT}
				slide={slide}
				setSlide={setSlide}
			/>
		</>
	);
}
function SlideIndicator({
	SLIDES_COUNT,
	setSlide,
	slide,
}: {
	SLIDES_COUNT: number;
	setSlide: Dispatch<SetStateAction<number>>;
	slide: number;
}) {
	return (
		<div className="flex w-full justify-center gap-2">
			{Array.from({ length: SLIDES_COUNT }, (_, idx) => (
				<div
					key={"slide-nav-" + idx}
					className={
						"h-2 w-10 cursor-pointer border-2 border-red-500 transition-all hover:h-4 " +
						(idx === slide ? "bg-red-500" : "bg-white")
					}
					onClick={() => setSlide(idx)}
				></div>
			))}
		</div>
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
				Unlock Limitless Power with our Handpicked Selection of Mighty
				Weapons
			</p>
			<ShopNowButton />
			<img
				src="banners/rocket.webp"
				className="col-start-2 row-start-1 row-end-4 max-h-full place-self-center object-contain"
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
