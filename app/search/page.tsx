export default async function Search({
	searchParams,
}: {
	searchParams: { q?: string };
}) {
	return (
		<div>
			<p>{searchParams.q}</p>
		</div>
	);
}
