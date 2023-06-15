import ItemCard from "@/app/ItemCard";
import { itemType } from "@/app/data";
import { cleanup, render } from "@testing-library/react";

describe("<ItemCard />", () => {
	afterEach(() => cleanup());
	const item: itemType = {
		id: "unique-test-id",
		name: "Test item",
		image: "/some_image_url",
		price: 123,
		usedBy: ["Iron Man", "Black Panther"],
		categories: ["weapons", "defensive equipment"],
		manufacturer: "Pym Technologies",
	};
	it("Renders data correctly", () => {
		const { getByText } = render(<ItemCard item={item} />);

		const nameEl = getByText(item.name);
		const priceEl = getByText(`$${item.price}`);

		expect(nameEl).toBeInTheDocument();
		expect(priceEl).toBeInTheDocument();
	});
	it("Renders the image correctly", () => {
		const { getByAltText } = render(<ItemCard item={item} />);

		const imageEl = getByAltText(`${item.name} image`);

		expect(imageEl).toBeInTheDocument();
	});
	it("Links to correct url", () => {
		const { getByRole } = render(<ItemCard item={item} />);

		const linkEl = getByRole("link") as HTMLLinkElement;

		expect(linkEl).toBeInTheDocument();
		expect(linkEl.href).toContain(`/item/${item.id}`);
	});
});
