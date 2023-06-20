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
		if (!matchesPriceRange(item, params)) return false;
		if (!matchesManufacturers(item, params)) return false;
		if (!matchesUsedBy(item, params)) return false;
		if (!matchesCategories(item, params)) return false;
		return true;
	});
}

export function matchesPriceRange(
	item: itemType,
	params: urlSeachParamsParsed
) {
	const itemActualPrice = item.price - item.price * (item.discount ?? 0);
	if (itemActualPrice > params.priceMax) return false;
	if (itemActualPrice < params.priceMin) return false;
	return true;
}

export function matchesCategories(
	item: itemType,
	params: urlSeachParamsParsed
) {
	if (params.categories.length < 1) return true;
	if (item.categories.some((c) => params.categories.includes(c))) return true;
	return false;
}

export function matchesUsedBy(item: itemType, params: urlSeachParamsParsed) {
	if (params.usedBy.length < 1) return true;
	if (item.usedBy.some((c) => params.usedBy.includes(c.toLowerCase())))
		return true;
	return false;
}

export function matchesManufacturers(
	item: itemType,
	params: urlSeachParamsParsed
) {
	if (params.manufacturers.length < 1) return true;
	if (params.manufacturers.includes(item.manufacturer?.toLowerCase() ?? ""))
		return true;
	return false;
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
