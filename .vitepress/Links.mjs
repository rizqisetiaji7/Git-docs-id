const SIDEBAR_LINKS = {
	'/docs': [
		{ text: 'Prolog', link: '/docs' }
	],

	'/basic/': [
		{ text: 'Intro', link: '/basic/' },
		{ text: 'Version Control', link: '/basic/version-control' },
		{ text: 'Git', link: '/basic/git' },
		{ text: 'Konfigurasi', link: '/basic/konfigurasi' },
		{ text: 'Repository', link: '/basic/repository' },
		{ text: 'The Three Tree', link: '/basic/the-three-tree' },
		{ text: 'Workflow', link: '/basic/workflow' },
		{ text: 'Snapshot & Hash', link: '/basic/snapshot-hash' },
		{ text: 'Menambah File', link: '/basic/tambah-file' },
		{ text: 'Mengubah File', link: '/basic/update-file' },
		{ text: 'Menghapus File', link: '/basic/hapus-file' },
	],

	'/git-branching/': [
		{ text: 'Intro', link: '/git-branching/' },
	],

	'/git-remote/': [
		{ text: 'Intro', link: '/git-remote/' },
	],
}


const NAV_LINKS = [
	{ text: 'Home', link: '/' },
	{
		text: 'Materi',
		items: [
			{ text: 'Git Dasar', link: '/basic/'},
			{ text: 'Git Branching', link: '/git-branching/'},
			{ text: 'Git Remote', link: '/git-remote/'},
		]
	}
]

const SOCIAL_LINKS = [
	{ icon: 'github', link: 'https://github.com/rizqisetiaji7/Git-docs-id' }
]

const links = {
	nav: NAV_LINKS,
	sidebar: SIDEBAR_LINKS,
	socialLinks: SOCIAL_LINKS,
}

export default links