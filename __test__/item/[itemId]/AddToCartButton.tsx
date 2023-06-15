import AddToCartButton from "../../../app/item/[itemId]/AddToCartButton";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { testItemProp } from "@/__test__/utils";
import ReduxProvider from "@/app/ReduxProvider";

describe("<AddToCartButton />", () => {
	afterEach(() => cleanup());
	it("Renders button correctly", () => {
		const { getByText } = render(
			<ReduxProvider>
				<AddToCartButton item={testItemProp} />
			</ReduxProvider>
		);

		const buttonBeforeClick = getByText("Add to cart");
		expect(buttonBeforeClick).toBeInTheDocument();

		fireEvent.click(buttonBeforeClick);

		const buttonAfterClick = getByText("Go to your cart");
		expect(buttonAfterClick).toBeInTheDocument();
	});
});
