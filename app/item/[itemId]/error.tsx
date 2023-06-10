"use client";

export default function Error() {
	return (
		<div className="px-5 py-10">
			<h1 className="text-6xl font-bold text-red-500">
				Item not found :(
			</h1>
			<h3 className="text-2xl">
				Sorry, seems like the item You're trying to access doesn't
				exist.
			</h3>
		</div>
	);
}
