import KeyMirror from 'keymirror';

export const types = KeyMirror({
	CREATE_EVENT: null,
	UPDATE_EVENT: null,
	DELETE_EVENT: null,
});

export const initialState = [
	{
		id: '1',
		title: 'Trip to Tower of London',
		date: '2018-03-27T11:00:00+00:00',
		category: 'culture',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: "Tower of London, St Katharine's & Wapping, London",
		hostedBy: 'Bob',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
		attendees: [
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
			},
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
			},
		],
	},
	{
		id: '2',
		title: 'Trip to Punch and Judy Pub',
		date: '2018-03-28T14:00:00+00:00',
		category: 'drinks',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: 'Punch & Judy, Henrietta Street, London, UK',
		hostedBy: 'Tom',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
		attendees: [
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
			},
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
			},
		],
	},
];

export const categories = [
	{ key: 'drinks', text: 'Drinks', value: 'drinks' },
	{ key: 'culture', text: 'Culture', value: 'culture' },
	{ key: 'film', text: 'Film', value: 'film' },
	{ key: 'food', text: 'Food', value: 'food' },
	{ key: 'music', text: 'Music', value: 'music' },
	{ key: 'travel', text: 'Travel', value: 'travel' },
];
