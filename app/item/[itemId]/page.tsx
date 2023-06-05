import { fetchAllItems } from "@/app/data";

async function fetchData(id: string) {
	return fetchAllItems().find((i) => i.id === id);
}
export default async function ItemPage({
	params,
}: {
	params: { itemId: string };
}) {
	const data = await fetchData(params.itemId);
	if (!data) {
		// TODO make a 404 and redirect
		return <div>404</div>;
	}
	return (
		<div>
			{params.itemId} - {data?.name}
		</div>
	);
}
