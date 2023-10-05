// import { get } from 'svelte/store';
// import { _bb } from '$lib';

// const db = get(_bb);

// export function load({ params }) {
// 	let str = params.group;
// 	let arr = db.files.filter((f) => f.group === str);
// 	return {
// 		files: arr
// 	};
// }

export async function load({ fetch, params }) {
	const res = await fetch(`https://nwp-cgn.de/apis/bbs/${params.group}`);
	const db = await res.json();
	const d = db.data2.filter((x) => x.id === params.id);

	return { groups: db.data1, tracks: d };
}
