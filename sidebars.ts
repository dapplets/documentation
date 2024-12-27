import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
	tutorialSidebar: [
		'introduction',
		'why-mutable-web',
		'how-to-start',
		'introduction-to-mutable-web/mutable-web-is-a-semantic-based',
		{
			type: 'category',
			collapsed: true,
			label: 'Structure of the Mutable Web',
			items: [
				'structure-of-the-mutable-web/semantic-context',
				'structure-of-the-mutable-web/insertion-points-widgets-controllers-applications',
				'structure-of-the-mutable-web/mutations-mutators-users',
			],
		},
		'universal-life-cycle-in-mutable-web/universal-life-cycle-in-mutable-web',
		{
			type: 'category',
			collapsed: true,
			label: 'Features',
			items: ['features/picker'],
		},
		{
			type: 'category',
			collapsed: true,
			label: 'Examples',
			items: [
				'examples/examples-of-app-configurations',
				'examples/examples-of-mutation-configurations',
				'examples/examples-of-parsers-configurations',
			],
		},
		{
			type: 'category',
			collapsed: true,
			label: 'API',
			items: [
				'api/dapplet-context-picker',
				'api/highlighter',
				'api/injectable-target',
				'api/latch-props',
				'api/target',
				'api/target-condition',
				'api/transferable-context',
				'api/get-connected-accounts-net',
			],
		},
	],
}

export default sidebars
