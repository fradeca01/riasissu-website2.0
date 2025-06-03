// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'RIASISSU | Rete Italiana dell3 Alliev3 delle Scuole e degli Istituti di Studi Superiori Universitari',
	siteDescription:
		'La Rete Italiana dell3 Alliev3 delle Scuole e degli Istituti di Studi Superiori Universitari ha principalmente due scopi: uno interno, ovvero creare connessioni fra gli allievi soci; uno esterno, cioè promuovere la cultura del merito nella collettività',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo_rete.png',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
