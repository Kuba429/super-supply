"use client";
import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";
export default function Testimonials() {
	const [slide, setSlide] = useState(0);
	const style: CSSProperties = {
		transform: `translateX(-${slide * 100}vw)`,
		transition: "transform 0.3s ease",
	};
	useEffect(() => {
		const interval = setInterval(() => setSlide((s) => (s + 1) % 3), 5000);
		return () => clearInterval(interval);
	}, [setSlide, slide]); // added slide as dep for when user explicitly changes slide
	return (
		<>
			<h2 className="mt-5 text-center text-4xl font-bold text-neutral-700">
				Customer Stories: Real{" "}
				<span className="text-red-500">Heroes</span>, Real Experiences.
			</h2>
			<div className="grid grid-cols-[repeat(3,100vw)] overflow-x-hidden">
				<div style={style}>
					<Testimonial
						name="Tony Stark"
						description="
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Itaque architecto exercitationem cupiditate minus
					perspiciatis esse debitis nobis eligendi quasi aliquid."
						imageSrc="/people/tony-stark.png"
					/>
				</div>
				<div style={style}>
					<Testimonial
						name="Peter Parker"
						description="
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Itaque architecto exercitationem cupiditate minus
					perspiciatis esse debitis nobis eligendi quasi aliquid."
						imageSrc="/people/peter-parker.jpg"
					/>
				</div>
				<div style={style}>
					<Testimonial
						name="Steve Rogers"
						description="
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Itaque architecto exercitationem cupiditate minus
					perspiciatis esse debitis nobis eligendi quasi aliquid."
						imageSrc="/people/steve-rogers.jpg"
					/>
				</div>
			</div>
		</>
	);
}

function Testimonial({
	name,
	description,
	imageSrc,
}: {
	name: string;
	description: string;
	imageSrc: string;
}) {
	return (
		<div className="m-auto flex w-2/3 items-center justify-center gap-4 p-5">
			<Image
				src={imageSrc}
				alt="Tony Stark"
				width={200}
				height={200}
				className="aspect-square rounded-full bg-slate-300 object-contain shadow-2xl"
			/>
			<div>
				<h3 className="pb-1 text-2xl font-bold text-neutral-700">
					{name}
				</h3>
				<p className="text-md">{description}</p>
			</div>
		</div>
	);
}
