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
		title: 'Foxi.',
		aboutText:
			'Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.',
		logo: {
			src: '/logo.svg',
			alt: 'The tailwind astro theme',
			text: 'Foxi.'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features',
					subCategoryTarget: '_self'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq',
					subCategoryTarget: '_self'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing',
					subCategoryTarget: '_self'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog',
					subCategoryTarget: '_self'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms',
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
				{
					subCategory: 'Careers',
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
