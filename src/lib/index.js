// place files you want to import through the `$lib` alias in this folder.
import storage from './storage';
export const _bb = storage('nwp_files', {
	files: [
		{
			id: 2,
			group: 'dungeon_723',
			name: 'Dungeon723 Clip',
			description: 'Dungeon Session ',
			contentUrl: 'https://147/ii/mov2/bb_dungeon-723-clip.mp4',
			thumbnailUrl: 'https://nwp-cgn.de/147/ii/mov2/img/vlcsnap-2023-07-17-00h08m10s245.png',
			daten: {}
		},
		{
			id: 3,
			group: 'dungeon_723',
			name: 'Dungeon723 Final HD',
			description: 'Dungeon Session ',
			contentUrl: 'https://147/ii/mov2/bb_dungeon-723-clip-00.14.18.333-00.19.15.883-Final.mp4',
			thumbnailUrl: 'https://nwp-cgn.de/147/ii/mov2/img/vlcsnap-2023-07-17-00h07m57s118.png',
			daten: {}
		},
		{
			id: 4,
			group: 'dungeon_723',
			name: 'Dungeon723 Doggy',
			description: 'Dungeon Session ',
			contentUrl: 'https://147/ii/mov2/bb_dungeon-723-clip-00.10.54.600-00.14.18.243-Doggy.mp4',
			thumbnailUrl: 'https://nwp-cgn.de/147/ii/mov2/img/bb_dungeon-723-clip-00.14.18.467.jpeg',
			daten: {}
		},
		{
			id: 5,
			group: 'dungeon_723',
			name: 'Dungeon723 CBT',
			description: 'Dungeon Session ',
			contentUrl: 'https://147/ii/mov2/bb_dungeon-723-clip-00.03.57.867-00.10.54.519-CBT.mp4',
			thumbnailUrl: 'https://nwp-cgn.de/147/ii/mov2/img/bb_dungeon-723-clip-00.03.57.867.jpeg',
			daten: {}
		},
		{
			id: 6,
			group: 'dungeon_723',
			name: 'Dungeon723 Fitness',
			description: 'Dungeon Session ',
			contentUrl: 'https://147/ii/mov2/bb_dungeon-723-clip-00.00.00.000-00.03.57.800-Fitness.mp4',
			thumbnailUrl: 'https://nwp-cgn.de/147/ii/mov2/img/vlcsnap-2023-07-17-00h07m57s118.png',
			daten: {}
		},
		{
			id: 1,
			group: 'dungeon_723',
			name: 'Dungeon723 Final',
			description: 'Dungeon Session ',
			contentUrl: 'https://147/ii/mov2/bb_dungeon-723-final.mp4',
			thumbnailUrl: 'https://nwp-cgn.de/147/ii/mov2/img/vlcsnap-2023-07-17-00h07m57s118.png',
			daten: {}
		}
	],
	sessions: [
		{
			id: 1,
			group: 'dungeon_723',
			name: 'Dungeon Session',
			kat: 'session',
			thumb: 'https://nwp-cgn.de/147/ii/mov2/img/vlcsnap-2023-07-17-00h08m10s245.png'
		}
	]
});
function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
export function sleep(milliseconds = 1000) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
const addkomma = (int = 0) => int.toLocaleString();
const getRandInt = (min, max) => Math.random() * (max - min) + min;

function randonNumb(min, max) {
	// min and max included
	let n = Math.floor(Math.random() * (max - min + 1) + min);
	return n.toFixed(0);
}
// export { clickOutside, sleep, randonNumb };
