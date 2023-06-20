import { useRouter, useSearchParams } from "next/navigation";

type urlSearchParams = {
	q?: string;
	category?: string;
};
export function useSearch() {
	const router = useRouter();
	const searchParams = useSearchParams();
	return {
		search: (params: urlSearchParams) => {
			// note that useSearchParams returns readonly params so it has to be done as below
			const urlParams = new URLSearchParams(searchParams.toString());
			Object.entries(params).forEach(([key, val]) =>
				urlParams.set(key, val)
			);
			router.push("/search?" + urlParams.toString());
		},
	};
}
