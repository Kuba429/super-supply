import ItemCard from "@/app/ItemCard";
import { cleanup, render } from "@testing-library/react";
import { testItemProp } from "./utils";

describe("<ItemCard />", () => {
	afterEach(() => cleanup());
	it("Renders data correctly", () => {
		const { getByText } = render(<ItemCard item={testItemProp} />);

		const nameEl = getByText(testItemProp.name);
		const priceEl = getByText(`$${testItemProp.price}`);

		expect(nameEl).toBeInTheDocument();
		expect(priceEl).toBeInTheDocument();
	});
	it("Renders the image correctly", () => {
		const { getByAltText } = render(<ItemCard item={testItemProp} />);

		const imageEl = getByAltText(`${testItemProp.name} image`);

		expect(imageEl).toBeInTheDocument();
	});
	it("Links to correct url", () => {
		const { getByRole } = render(<ItemCard item={testItemProp} />);

		const linkEl = getByRole("link") as HTMLLinkElement;

		expect(linkEl).toBeInTheDocument();
		expect(linkEl.href).toContain(`/item/${testItemProp.id}`);
	});
});
