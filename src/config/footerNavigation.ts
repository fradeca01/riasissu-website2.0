// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
	subCategoryTarget: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'RIASISSU.',
		aboutText:
			'Rete Italiana dell3 Alliev3 delle Scuole e degli Istituti di Studi Superiori Universitari',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Foxi.'
		}
	},
	footerColumns: [
		{
			category: 'Associazione',
			subCategories: [
				{
					subCategory: 'Organigramma',
					subCategoryLink: '/organigramma',
					subCategoryTarget: '_self'
				},
				{
					subCategory: 'Statuto',
					subCategoryLink: '/statuto',
					subCategoryTarget: '_self'
				},

				{
					subCategory: 'Storico Giunte',
					subCategoryLink: '/changelog',
					subCategoryTarget: '_self'
				},

				{
					subCategory: '5x1000',
					subCategoryLink: '/5x1000',
					subCategoryTarget: '_self'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/',
					subCategoryTarget: '_self'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/blog',
					subCategoryTarget: '_self'
				},

			]
		},
		{
			category: 'Area Legale',
			subCategories: [
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: 'https://www.iubenda.com/privacy-policy/88846827',
					subCategoryTarget: '_blank'
				},
				{
					subCategory: 'Cookie Policy',
					subCategoryLink: 'https://www.iubenda.com/privacy-policy/88846827/cookie-policy',
					subCategoryTarget: '_blank'
				},
				{
					subCategory: 'Licenze di Terze Parti',
					subCategoryLink: '/licenses',
					subCategoryTarget: '_self'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© RIASISSU 2025.'
	}
}
