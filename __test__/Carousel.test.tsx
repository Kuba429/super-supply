import { Carousel } from "@/app/Carousel";
import { cleanup, render, screen } from "@testing-library/react";

describe("<Carousel/>", () => {
	afterEach(() => cleanup());
	it("Gets rendered", () => {
		render(
			<Carousel>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</Carousel>
		);
		const carousel = screen.getByRole("list");
		expect(carousel).toBeInTheDocument();
	});
	it("Renders correct amount of children", () => {
		const CHILDREN_COUNT = 5;
		render(
			<Carousel>
				{new Array(CHILDREN_COUNT).fill(0).map((_, idx) => (
					<div key={`test_item_${idx}`}>Item {idx}</div>
				))}
			</Carousel>
		);
		const carousel = screen.getByRole("list");
		const children = screen.getAllByRole("listitem");
		expect(carousel).toBeInTheDocument();
		expect(children.length).toBe(CHILDREN_COUNT);
	});
	it("Renders correct amount of radio buttons for slide indication", () => {
		const CHILDREN_COUNT = 5;
		render(
			<Carousel showIndicator={true}>
				{new Array(CHILDREN_COUNT).fill(0).map((_, idx) => (
					<div key={`test_item_${idx}`}>Item {idx}</div>
				))}
			</Carousel>
		);
		const carousel = screen.getByRole("list");
		const radios = screen.getAllByRole("radio");
		expect(carousel).toBeInTheDocument();
		expect(radios.length).toBe(CHILDREN_COUNT);
	});
	it("Respect 'showIndicator' prop when false", () => {
		render(
			<Carousel showIndicator={false}>
				<div key="test_item_1">Item 1</div>
				<div key="test_item_2">Item 2</div>
				<div key="test_item_3">Item 3</div>
				<div key="test_item_4">Item 4</div>
				<div key="test_item_5">Item 5</div>
			</Carousel>
		);
		let nav = screen.queryByRole("navigation");
		expect(nav).not.toBeInTheDocument();
	});
	it("Respect 'showIndicator' prop when true", () => {
		render(
			<Carousel showIndicator={true}>
				<div key="test_item_1">Item 1</div>
				<div key="test_item_2">Item 2</div>
				<div key="test_item_3">Item 3</div>
				<div key="test_item_4">Item 4</div>
				<div key="test_item_5">Item 5</div>
			</Carousel>
		);
		let nav = screen.getByRole("navigation");
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
