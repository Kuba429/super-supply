export default function () {
	return (
		<div className="relative flex h-80 w-52 cursor-pointer flex-col rounded bg-neutral-100 shadow-md after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-0 after:w-[calc(100%_+_4px)] after:translate-x-[-2px] after:translate-y-[2px] after:rounded after:bg-red-500 after:transition-all hover:after:h-[calc(100%_+_4px)]">
			<img
				src="banners/rocket.webp"
				alt=""
				className="flex-grow self-center justify-self-center object-contain"
			/>
			<div className="bg-neutral-100 p-2 shadow-inner">
				<h3 className="text-xl font-semibold">Title</h3>
				<h2 className="text-sm">$5000.0</h2>
			</div>
		</div>
	);
}
