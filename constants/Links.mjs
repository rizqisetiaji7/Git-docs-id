export const SIDEBAR_LINKS = {
	'/docs/': [
		{ text: 'Prolog', link: '/docs/' }
	],
	'/docs/basic/': [
		{ text: 'Intro', link: '/docs/basic/' },
		{ text: 'Version Control', link: '/docs/basic/version-control' },
		{ text: 'Git', link: '/docs/basic/git' },
		{ text: 'Konfigurasi', link: '/docs/basic/konfigurasi' },
		{ text: 'Repository', link: '/docs/basic/repository' },
		{ text: 'The Three States', link: '/docs/basic/the-three-states' },
		{ text: 'Workflow', link: '/docs/basic/workflow' },
	],
	'/docs/git-branching/': [
		{ text: 'Intro', link: '/docs/git-branching/' },
	],
	'/docs/git-remote/': [
		{ text: 'Intro', link: '/docs/git-remote/' },
	],
}


export const NAV_LINKS = [
	{ text: 'Home', link: '/' },
	{
		text: 'Materi',
		items: [
			{ text: 'Git Dasar', link: '/docs/basic/'},
			{ text: 'Git Branching', link: '/docs/git-branching/'},
			{ text: 'Git Remote', link: '/docs/git-remote/'},
		]
	}
]

export const SOCIAL_LINKS = [
	{ icon: 'github', link: 'https://github.com/rizqisetiaji7/Git-docs-id' }
]