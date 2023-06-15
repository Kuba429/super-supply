import { Carousel } from "@/app/Carousel";
import { cleanup, render } from "@testing-library/react";

describe("<Carousel/>", () => {
	afterEach(() => cleanup());
	it("Gets rendered", () => {
		const { getByRole } = render(
			<Carousel>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</Carousel>
		);
		const carousel = getByRole("list");
		expect(carousel).toBeInTheDocument();
	});
	it("Renders correct amount of children", () => {
		const CHILDREN_COUNT = 5;
		const { getByRole, getAllByRole } = render(
			<Carousel>
				{new Array(CHILDREN_COUNT).fill(0).map((_, idx) => (
					<div key={`test_item_${idx}`}>Item {idx}</div>
				))}
			</Carousel>
		);
		const carousel = getByRole("list");
		const children = getAllByRole("listitem");
		expect(carousel).toBeInTheDocument();
		expect(children.length).toBe(CHILDREN_COUNT);
	});
	it("Renders correct amount of radio buttons for slide indication", () => {
		const CHILDREN_COUNT = 5;
		const { getByRole, getAllByRole } = render(
			<Carousel showIndicator={true}>
				{new Array(CHILDREN_COUNT).fill(0).map((_, idx) => (
					<div key={`test_item_${idx}`}>Item {idx}</div>
				))}
			</Carousel>
		);
		const carousel = getByRole("list");
		const radios = getAllByRole("radio");
		expect(carousel).toBeInTheDocument();
		expect(radios.length).toBe(CHILDREN_COUNT);
	});
	it("Respect 'showIndicator' prop when false", () => {
		const { queryByRole } = render(
			<Carousel showIndicator={false}>
				<div key="test_item_1">Item 1</div>
				<div key="test_item_2">Item 2</div>
				<div key="test_item_3">Item 3</div>
				<div key="test_item_4">Item 4</div>
				<div key="test_item_5">Item 5</div>
			</Carousel>
		);
		let nav = queryByRole("navigation");
		expect(nav).not.toBeInTheDocument();
	});
	it("Respect 'showIndicator' prop when true", () => {
		const { getByRole } = render(
			<Carousel showIndicator={true}>
				<div key="test_item_1">Item 1</div>
				<div key="test_item_2">Item 2</div>
				<div key="test_item_3">Item 3</div>
				<div key="test_item_4">Item 4</div>
				<div key="test_item_5">Item 5</div>
			</Carousel>
		);
		let nav = getByRole("navigation");
		expect(nav).toBeInTheDocument();
	});
	it("Passes custom class through", () => {
		const CUSTOM_CLASS = "THIS_IS_A_TEST_CLASS";
		const { container } = render(
			<Carousel customIndicatorClass={CUSTOM_CLASS} showIndicator={true}>
				<div key="test_item_1">Item 1</div>
				<div key="test_item_2">Item 2</div>
				<div key="test_item_3">Item 3</div>
				<div key="test_item_4">Item 4</div>
				<div key="test_item_5">Item 5</div>
			</Carousel>
		);
		const el = container.querySelector("." + CUSTOM_CLASS);
		expect(el).toBeInTheDocument();
	});
});
