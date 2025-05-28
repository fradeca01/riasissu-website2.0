// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'facebook',
		link: 'https://www.facebook.com/RIASISSU',
		icon: 'fb-icon'
	},
	{
		name: 'instagram',
		link: 'https://www.instagram.com/riasissu/',
		icon: 'instagram-icon'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/company/riasissu/',
		icon: 'linkedin-icon'
	}
]
