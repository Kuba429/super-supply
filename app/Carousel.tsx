"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import { ReactNode } from "react";

export function Carousel({
	children,
	time = 5000,
}: {
	children: ReactNode;
	time?: number;
}) {
	const slidesCount = React.Children.count(children);
	const [currentSlide, setCurrentSlide] = useState(0);
	useEffect(() => {
		const interval = setInterval(
			() => setCurrentSlide((s) => (s + 1) % slidesCount),
			time
		);
		return () => clearInterval(interval);
	}, [setCurrentSlide, currentSlide]); // added slide as dep for when user explicitly changes slide
	const slideStyle: CSSProperties = {
		transform: `translateX(-${currentSlide * 100}vw)`,
		transition: "transform 0.3s ease",
	};
	return (
		<div
			style={{ gridTemplateColumns: `repeat(${slidesCount},100vw)` }} // doesn't work in tailwind
			className={`grid`}
		>
			{React.Children.map(children, (node: ReactNode) => (
				<div style={slideStyle}>{node}</div>
			))}
		</div>
	);
}
