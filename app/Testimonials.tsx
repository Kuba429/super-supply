import Image from "next/image";
import { Carousel } from "./Carousel";
export default function Testimonials() {
	return (
		<>
			<h2 className="mt-5 text-center text-4xl font-bold text-neutral-700">
				Customer Stories: Real{" "}
				<span className="text-red-500">Heroes</span>, Real Experiences.
			</h2>
			<Carousel>
				<Testimonial
					name="Tony Stark"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Itaque architecto exercitationem cupiditate minus
					perspiciatis esse debitis nobis eligendi quasi aliquid."
					imageSrc="/people/tony-stark.png"
				/>
				<Testimonial
					name="Peter Parker"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Itaque architecto exercitationem cupiditate minus
					perspiciatis esse debitis nobis eligendi quasi aliquid."
					imageSrc="/people/peter-parker.jpg"
				/>
				<Testimonial
					name="Steve Rogers"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Itaque architecto exercitationem cupiditate minus
					perspiciatis esse debitis nobis eligendi quasi aliquid."
					imageSrc="/people/steve-rogers.jpg"
				/>
			</Carousel>
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
