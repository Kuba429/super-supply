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
	const style: CSSProperties = {
		transform: `translateX(-${currentSlide * 100}vw)`,
		transition: "transform 0.3s ease",
	};
	useEffect(() => {
		const interval = setInterval(
			() => setCurrentSlide((s) => (s + 1) % slidesCount),
			time
		);
		return () => clearInterval(interval);
	}, [setCurrentSlide, currentSlide]); // added slide as dep for when user explicitly changes slide
	return (
		<div className={`grid grid-cols-[repeat(${slidesCount},100vw)]`}>
			{React.Children.map(children, (c: ReactNode) => (
				<div style={style} className={``}>
					{c}
				</div>
			))}
		</div>
	);
}
