"use client";

import React, {
	CSSProperties,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { ReactNode } from "react";

export function Carousel({
	children,
	time = 5000,
	showIndicator = false,
	customIndicatorClass,
}: {
	children: ReactNode;
	time?: number;
	showIndicator?: boolean;
	customIndicatorClass?: string;
}) {
	const slidesCount = React.Children.count(children);
	const [currentSlide, setCurrentSlide] = useState(0);
	useEffect(() => {
		const interval = setInterval(
			() => setCurrentSlide((s) => (s + 1) % slidesCount),
			time
		);
		return () => clearInterval(interval);
	}, [setCurrentSlide, currentSlide, time, slidesCount]); // added slide as dep for when user explicitly changes slide
	const slideStyle: CSSProperties = {
		transform: `translateX(-${currentSlide * 100}vw)`,
		transition: "transform 0.3s ease",
	};
	return (
		<>
			<div
				style={{ gridTemplateColumns: `repeat(${slidesCount},100vw)` }} // doesn't work in tailwind
				className={`grid overflow-x-hidden`}
			>
				{React.Children.map(children, (node: ReactNode) => (
					<div style={slideStyle}>{node}</div>
				))}
			</div>
			{showIndicator && (
				<SlideIndicator
					setCurrentSlide={setCurrentSlide}
					currentSlide={currentSlide}
					slidesCount={slidesCount}
					customIndicatorClass={customIndicatorClass}
				/>
			)}
		</>
	);
}
function SlideIndicator({
	slidesCount,
	setCurrentSlide,
	currentSlide,
	customIndicatorClass,
}: {
	slidesCount: number;
	setCurrentSlide: Dispatch<SetStateAction<number>>;
	currentSlide: number;
	customIndicatorClass?: string;
}) {
	return (
		<div className="flex h-4 w-full justify-center gap-2">
			{new Array(slidesCount).fill(null).map((_, idx) => (
				<input
					key={"slide-nav-" + idx}
					className={
						customIndicatorClass ??
						"h-2 w-10 cursor-pointer appearance-none border-2 border-red-500 bg-white outline-none transition-all checked:bg-red-500 hover:h-4"
					}
					type="checkbox"
					checked={currentSlide === idx}
					onChange={() => setCurrentSlide(idx)}
				/>
			))}
		</div>
	);
}
