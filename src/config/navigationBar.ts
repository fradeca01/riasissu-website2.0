// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
	target?: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/2riasissu.svg',
		alt: 'RIASISSU logo',
		text: 'RIASISSU'
	},
	navItems: [
		{ name: 'XCool', link: '/xcool/' },
		{
			name: 'L\'associazione',
			link: '#',
			submenu: [
				{ name: 'Organigramma', link: '/organigramma' },
				{ name: 'Storico giunte', link: '/storicogiunte' },
				{ name: 'Statuto', link: '/statuto' },
				{ name: 'Regolamento', link: '/regolamento' }
			]
		},
		{
			name: 'Eventi e attività',
			link: '#',
			submenu: [
				{ name: 'Il Chiasmo', link: 'https://www.treccani.it/magazine/chiasmo/' },
				{ name: 'Rete di Idee', link: 'https://ssc.unict.it/rete-di-idee/' },
				// { name: 'Scambi Interscuola', link: '/scambi' },
			]
		},
		{ name: 'News', link: '/news' },
		{ name: '5x1000', link: '/5x1000' },
		{ name: 'Contatti', link: '/contatti' }
	],
	navActions: [{ name: 'Area Riservata', link: 'https://riasissu.sharepoint.com/sites/RETEITALIANADELL3ALLIEV3DELLESCUOLEEDEGLIISTITUTIDISTUDISUPE', target: '_blank', style: 'primary', size: 'lg' }]
}
