import { heroType, itemType } from "../data";

export type urlSearchParamsRaw = {
	q?: string;
	categories?: string;
	usedBy?: string;
	manufacturers?: string;
	priceMin?: number;
	priceMax?: number;
};

export type urlSeachParamsParsed = {
	q?: string;
	categories: string[];
	usedBy: string[];
	manufacturers: string[];
	priceMin: number;
	priceMax: number;
};

// TODO: split this into smaller functions
export function applyParamFilters(
	items: itemType[],
	rawParams: urlSearchParamsRaw
) {
	const params = parseSearchParams(rawParams);
	return items.filter((item) => {
		// reject if no match on categories
		if (
			params.categories.length > 0 &&
			!item.categories.some((c) => params.categories.includes(c))
		)
			return false;
		// reject if price not withing queried range
		const itemActualPrice = item.price - item.price * (item.discount ?? 0);
		if (params.priceMax && itemActualPrice > params.priceMax) return false;
		if (params.priceMin && itemActualPrice < params.priceMin) return false;
		// reject if no match on manufacturer
		if (
			params.manufacturers.length > 0 &&
			!params.manufacturers.includes(
				item.manufacturer?.toLowerCase() ?? ""
			)
		)
			return false;
		// if no match on superhero
		if (
			params.usedBy.length > 0 &&
			!item.usedBy.some((h) => params.usedBy.includes(h.toLowerCase()))
		) {
			return false;
		}
		return true;
	});
}
function parseSearchParams(params: urlSearchParamsRaw) {
	const parsed: urlSeachParamsParsed = {
		...params,
		usedBy: parseArrayParam(params.usedBy ?? ""),
		categories: parseArrayParam(params.categories ?? ""),
		manufacturers: parseArrayParam(params.manufacturers ?? ""),
		priceMax: params.priceMax ?? Infinity,
		priceMin: params.priceMin ?? -Infinity,
	};
	return parsed;
}
function parseArrayParam(param: string) {
	return param
		.split(",")
		.filter((i) => i.length)
		.map((c) => c.toLowerCase());
}
