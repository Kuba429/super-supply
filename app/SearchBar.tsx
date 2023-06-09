"use client";
import { FormEvent, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearch } from "./search/hooks";
import { usePathname } from "next/navigation";

export function SearchBar() {
	// TODO this can easily be done statelessly using formData; something to think about
	const [query, setQuery] = useState("");
	const { search } = useSearch();
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		search({ q: query });
	};

	const path = usePathname();
	useEffect(() => {
		setQuery("");
	}, [path]);
	return (
		<form
			onSubmit={handleSubmit}
			className="m-3 box-content flex flex-grow rounded"
		>
			<input
				name="query"
				type="text"
				className="w-full rounded-l border border-neutral-50 bg-neutral-100 px-1 md:w-1/2"
				placeholder="Search..."
				value={query}
				onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
			></input>
			<button
				type="submit"
				className="flex aspect-square cursor-pointer items-center justify-center rounded-r border border-neutral-50 bg-red-400 px-2 text-center text-white transition-colors hover:bg-red-200 hover:text-red-600"
			>
				<AiOutlineSearch size={20} />
			</button>
		</form>
	);
}
