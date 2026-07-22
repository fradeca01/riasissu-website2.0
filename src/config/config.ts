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
	ogImage: '/og.svg',
	// `logo.src` è un path statico verso public/2riasissu.svg (unica copia del logo): serve
	// come stringa per la favicon (<link rel="icon" href={configData.logo.src}>) e per i
	// componenti che ricevono un `src` stringa (navbar, footer), quindi non passa da
	// astro:assets. Le pagine che mostrano il logo puntano allo stesso file statico.
	logo: {
		src: '/2riasissu.svg',
		alt: 'RIASISSU. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'dark',
	scrollAnimations: true
}
