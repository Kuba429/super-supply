import { useRouter, useSearchParams } from "next/navigation";
import { urlSearchParamsRaw } from "./searchEngine";

export function useSearch() {
	const router = useRouter();
	const searchParams = useSearchParams();
	return {
		search: (params: urlSearchParamsRaw) => {
			// note that useSearchParams returns readonly params so it has to be done as below
			const urlParams = new URLSearchParams(searchParams.toString());
			Object.entries(params).forEach(([key, val]) =>
				urlParams.set(key, val.toString())
			);
			router.push("/search?" + urlParams.toString());
		},
	};
}
