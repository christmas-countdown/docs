const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
	title: 'Christmas Countdown',
	tagline: 'Documentation for the Christmas Countdown projects.',
	url: 'https://docs.christmascountdown.live',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'christmas-countdown', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					// sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/christmas-countdown/docs/edit/main/',
					path: 'docs/discord',
					routeBasePath: 'discord',
					sidebarPath: require.resolve('./sidebars/discord.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
		[
			'redocusaurus',
			{
				specs: [{
					specUrl: 'https://cdn.statically.io/gh/christmas-countdown/api/main/openapi.yaml',
					routePath: 'api/pine'
				}],
			}
		],
	],

	plugins: [
		[
			'@docusaurus/plugin-content-blog',
			{
				editUrl: 'https://github.com/christmas-countdown/docs/edit/main/',
				id: 'news',
				path: './news',
				showReadingTime: true,
				routeBasePath: 'news'
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				editUrl: 'https://github.com/christmas-countdown/docs/edit/main/',
				id: 'other',
				path: 'docs/other',
				routeBasePath: 'other',
				sidebarPath: require.resolve('./sidebars/other.js'),
			}
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Christmas Countdown',
				logo: {
					alt: 'Santa',
					src: 'img/logo.svg',
				},
				items: [
					{ to: 'discord/introduction', label: 'Discord bot docs', position: 'left' },
					{ to: 'api', label: 'API docs', position: 'left' },
					{ to: 'other/introduction', label: 'Other docs', position: 'left' },
					{ to: 'news', label: 'News', position: 'left' },
					// {
					// 	type: 'docsVersionDropdown',
					// 	docsPluginId: 'default'
					//	position: 'right',
					// },
					// {
					// 	type: 'docsVersionDropdown',
					// 	docsPluginId: 'other'
					//	position: 'right',
					// },
					{
						href: 'https://go.eartharoid.me/discord',
						label: 'Discord',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Discord bot',
								to: '/discord/introduction',
							},
							{
								label: 'API',
								to: '/api',
							},
							{
								label: 'Other',
								to: '/other/introduction',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://go.eartharoid.me/discord',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/eartharoid',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'News',
								to: '/news',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/christmas-countdown',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Isaac Saunders`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
	themes: ['@docusaurus/theme-live-codeblock'],
});
