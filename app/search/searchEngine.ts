import { itemType } from "../data";

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

export function applyParamFilters(
	items: itemType[],
	rawParams: urlSearchParamsRaw
) {
	const params = parseSearchParams(rawParams);
	return items.filter((item) => {
		return (
			matchesPriceRange(item, params) &&
			matchesManufacturers(item, params) &&
			matchesUsedBy(item, params) &&
			matchesCategories(item, params)
		);
	});
}

export function matchesPriceRange(
	item: itemType,
	params: urlSeachParamsParsed
) {
	const itemActualPrice = item.price - item.price * (item.discount ?? 0);
	return (
		itemActualPrice < params.priceMax && itemActualPrice > params.priceMin
	);
}

export function matchesCategories(
	item: itemType,
	params: urlSeachParamsParsed
) {
	return (
		params.categories.length < 1 ||
		item.categories.some((c) => params.categories.includes(c))
	);
}

export function matchesUsedBy(item: itemType, params: urlSeachParamsParsed) {
	return (
		params.usedBy.length < 1 ||
		item.usedBy.some((c) => params.usedBy.includes(c.toLowerCase()))
	);
}

export function matchesManufacturers(
	item: itemType,
	params: urlSeachParamsParsed
) {
	return (
		params.manufacturers.length < 1 ||
		params.manufacturers.includes(item.manufacturer?.toLowerCase() ?? "")
	);
}

export function parseSearchParams(params: urlSearchParamsRaw) {
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
export function parseArrayParam(param: string) {
	return param
		.split(",")
		.filter((i) => i.length)
		.map((c) => c.toLowerCase());
}
