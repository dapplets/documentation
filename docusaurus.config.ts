import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
	title: 'Documentation | Dapplets Platform',
	tagline: 'Welcome to the Dapplets',
	url: 'https://docs.dapplets.org',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: '/svg/logo.svg',
	organizationName: 'Dapplets',
	projectName: 'dapplet-mutable-web',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},

					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],
	plugins: ['docusaurus-plugin-sass', 'docusaurus-plugin-fontloader'],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'My Site Logo',
				src: 'img/sidebar-header-logo.svg',
				height: 120,
			},
		},
		footer: {
			links: [
				{
					label: 'What is Dapplets Project?',
					href: 'https://dapplets.org/#what-is',
				},
				{
					label: 'Innovation',
					href: 'https://dapplets.org/#innovation',
				},
				{
					label: 'How to use it?',
					href: 'https://dapplets.org/#to-use',
				},
				{
					label: 'Role model',
					href: 'https://dapplets.org/#economic',
				},
			],
		},
		colorMode: {
			disableSwitch: true,
		},
		algolia: {
			// The application ID provided by Algolia
			appId: 'RV9UMBHX9R',

			// Public API key: it is safe to commit it
			apiKey: '85ce5081b83416428f2a4e64d01d45b8',

			indexName: 'dapplets',

			// Optional: see doc section below
			contextualSearch: false,
			searchParameters: {
				facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],
			},

			// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
			// externalUrlRegex: 'external\\.com|domain\\.com',

			// Optional: Algolia search parameters
			// searchParameters: {},

			// Optional: path for search page that enabled by default (`false` to disable it)
			searchPagePath: 'search',

			//... other Algolia params
		},
		ssrTemplate: `<!DOCTYPE html>
<html <%~ it.htmlAttributes %>>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="Docusaurus v<%= it.version %>">
    <% if (it.noIndex) { %>
      <meta name="robots" content="noindex, nofollow" />
    <% } %>
    <%~ it.headTags %>
    <% it.metaAttributes.forEach((metaAttribute) => { %>
      <%~ metaAttribute %>
    <% }); %>
    <% it.stylesheets.forEach((stylesheet) => { %>
      <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
    <% }); %>
    <% it.scripts.forEach((script) => { %>
      <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
    <% }); %>
  </head>
  <body <%~ it.bodyAttributes %>>
    <script type="text/javascript">
    (function(window, document, dataLayerName, id) {
    window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
    function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
    var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
    var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
    tags.async=!0,tags.src="https://dapplets.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
    !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
    })(window, document, 'dataLayer', '9bed06dd-be95-40d0-aea8-cf1e92ac2643');
    </script>
    <%~ it.preBodyTags %>
    <div id="__docusaurus">
      <%~ it.appHtml %>
    </div>
    <% it.scripts.forEach((script) => { %>
      <script src="<%= it.baseUrl %><%= script %>"></script>
    <% }); %>
    <%~ it.postBodyTags %>
  </body>
</html>`,
	} satisfies Preset.ThemeConfig,
}

export default config
