const SIDEBAR_LINKS = {
	'/git-basic/': [
		{ text: 'Intro', link: '/git-basic/' },
		{ text: 'Version Control', link: '/git-basic/version-control' },
		{ text: 'Git', link: '/git-basic/git' },
		{ text: 'Konfigurasi', link: '/git-basic/konfigurasi' },
		{ text: 'Repository', link: '/git-basic/repository' },
		{ text: 'The Three Tree', link: '/git-basic/the-three-tree' },
		{ text: 'Workflow', link: '/git-basic/workflow' },
		{ text: 'Snapshot & Hash', link: '/git-basic/snapshot-hash' },
		{ text: 'Menambah File', link: '/git-basic/tambah-file' },
		{ text: 'Mengubah File', link: '/git-basic/update-file' },
		{ text: 'Menghapus File', link: '/git-basic/hapus-file' },
		{ text: 'Membatalkan Perubahan', link: '/git-basic/cancel-changes' },
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
	{ text: 'Docs', link: '/docs' },
	{
		text: 'Materi',
		items: [
			{ text: 'Git Dasar', link: '/git-basic/'},
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