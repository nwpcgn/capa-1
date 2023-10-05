export async function load({ fetch, params }) {
	const res = await fetch(`https://nwp-cgn.de/apis/bbs`);
	const d = await res.json();

	return { groups: d.data1, tracks: d.data2 };
}
