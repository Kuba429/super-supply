import { itemType } from "@/app/data";
import {
	applyParamFilters,
	matchesCategories,
	matchesManufacturers,
	matchesPriceRange,
	matchesQuery,
	matchesUsedBy,
	parseArrayParam,
	parseSearchParams,
	urlSearchParamsRaw,
} from "@/app/search/searchEngine";

test("parseArrayParam", () => {
	const raw = "param1,param2,pAraM3";
	const parsed = parseArrayParam(raw);
	expect(parsed).toHaveLength(3);
	expect(parsed[0]).toBe("param1");
	expect(parsed[1]).toBe("param2");
	expect(parsed[2]).toBe("param3");
});

test("parseSearchParams", () => {
	const raw: urlSearchParamsRaw = {
		categories: "caTegOry1,categorY2",
		priceMin: 40,
		usedBy: "somEone",
	};
	const parsed = parseSearchParams(raw);

	expect(parsed.usedBy).toHaveLength(1);
	expect(parsed.usedBy[0]).toBe("someone");
	expect(parsed.categories).toHaveLength(2);
	expect(parsed.categories[0]).toBe("category1");
	expect(parsed.categories[1]).toBe("category2");
	expect(parsed.priceMin).toBe(40);
	expect(parsed.priceMax).toBe(Infinity);
	expect(parsed.manufacturers).toHaveLength(0);
});

const items = [
	{
		id: "123",
		usedBy: ["Hulk", "Spider-Man"],
		categories: ["weapons"],
		name: "test item",
		price: 400,
		image: "url",
		manufacturer: "Oscorp",
	},
	{
		id: "123",
		usedBy: ["Spider-Man"],
		categories: ["weapons", "suits"],
		name: "test item2",
		price: 9000,
		image: "url",
		manufacturer: "Pym Technologies",
	},
] satisfies itemType[];

describe("ApplyParamFilters", () => {
	it("filter by usedBy", () => {
		const usedByHulk = applyParamFilters(items, { usedBy: "hulk" });
		expect(usedByHulk).toHaveLength(1);
		const usedByHawkeye = applyParamFilters(items, { usedBy: "hawkeye" });
		expect(usedByHawkeye).toHaveLength(0);
		const usedBySpiderman = applyParamFilters(items, {
			usedBy: "spider-man",
		});
		expect(usedBySpiderman).toHaveLength(2);
	});
	it("filter by query", () => {
		const queryTest = applyParamFilters(items, { q: "test2" });
		expect(queryTest).toHaveLength(1);

		const queryNonMatching = applyParamFilters(items, {
			q: "non matching",
		});
		expect(queryNonMatching).toHaveLength(0);

		const queryTtt = applyParamFilters(items, { q: "tT t" });
		expect(queryTtt).toHaveLength(2);
	});
	it("filter by categories", () => {
		const suits = applyParamFilters(items, { categories: "suits" });
		expect(suits).toHaveLength(1);
		const weapons = applyParamFilters(items, { categories: "wEaPOns" });
		expect(weapons).toHaveLength(2);
	});
	it("filter by priceMax", () => {
		const max1 = applyParamFilters(items, { priceMax: 5000 });
		expect(max1).toHaveLength(1);

		const max2 = applyParamFilters(items, { priceMax: 10000 });
		expect(max2).toHaveLength(2);

		const max3 = applyParamFilters(items, { priceMax: 1 });
		expect(max3).toHaveLength(0);
	});
	it("filter by priceMin", () => {
		const min1 = applyParamFilters(items, { priceMin: 500 });
		expect(min1).toHaveLength(1);

		const min2 = applyParamFilters(items, { priceMin: 100 });
		expect(min2).toHaveLength(2);

		const min3 = applyParamFilters(items, { priceMin: 99999999 });
		expect(min3).toHaveLength(0);
	});
	it("filter by price range", () => {
		const r1 = applyParamFilters(items, { priceMax: 5000, priceMin: 10 });
		expect(r1).toHaveLength(1);

		const r2 = applyParamFilters(items, {
			priceMax: 220123000,
			priceMin: 30,
		});
		expect(r2).toHaveLength(2);

		const r3 = applyParamFilters(items, {
			priceMax: 999999,
			priceMin: 50000,
		});
		expect(r3).toHaveLength(0);
	});
});

describe("Matching functions", () => {
	it("matchesQuery", () => {
		const m1 = matchesQuery(items[0], parseSearchParams({ q: "test" }));
		expect(m1).toBe(true);

		const m2 = matchesQuery(
			items[0],
			parseSearchParams({ q: "dont match on this query" })
		);
		expect(m2).toBe(false);

		const m3 = matchesQuery(items[0], parseSearchParams({ q: "tt tm" }));
		expect(m3).toBe(true);
	});
	it("matchesCategories", () => {
		const matchedBySuits = matchesCategories(
			items[0],
			parseSearchParams({ categories: "suits" })
		);
		expect(matchedBySuits).toBe(false);

		const matchedByWeapons = matchesCategories(
			items[0],
			parseSearchParams({ categories: "weapons" })
		);
		expect(matchedByWeapons).toBe(true);
	});
	it("matchesUsedBy", () => {
		const matchedBySpidey = matchesCategories(
			items[0],
			parseSearchParams({ usedBy: "spider-man" })
		);
		expect(matchedBySpidey).toBe(true);

		const matchedByUnrecorded = matchesUsedBy(
			items[0],
			parseSearchParams({ usedBy: "someone who doesnt exist" })
		);
		expect(matchedByUnrecorded).toBe(false);
	});
	it("machesManufacturers", () => {
		const matchedByOscorp = matchesManufacturers(
			items[0],
			parseSearchParams({ manufacturers: "oscorp" })
		);
		expect(matchedByOscorp).toBe(true);

		const matchedBySomethingElse = matchesManufacturers(
			items[0],
			parseSearchParams({ manufacturers: "abcasdasdadsad" })
		);
		expect(matchedBySomethingElse).toBe(false);
	});
	it("matchesPriceRange", () => {
		const r1 = matchesPriceRange(
			items[0],
			parseSearchParams({ priceMin: 1, priceMax: 40001231 })
		);
		expect(r1).toBe(true);

		const r2 = matchesPriceRange(
			items[0],
			parseSearchParams({ priceMin: 5, priceMax: 6 })
		);
		expect(r2).toBe(false);
	});
});
