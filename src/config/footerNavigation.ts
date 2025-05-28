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
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Area Legale',
			subCategories: [
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: 'https://www.iubenda.com/privacy-policy/88846827'
				},
				{
					subCategory: 'Cookie Policy',
					subCategoryLink: 'https://www.iubenda.com/privacy-policy/88846827/cookie-policy'
				},
				{
					subCategory: 'Licenze di Terze Parti',
					subCategoryLink: '/licenses'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© RIASISSU 2025.'
	}
}
