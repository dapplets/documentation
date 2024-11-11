import BrowserOnly from '@docusaurus/BrowserOnly'
import { useEffect } from 'react'

export default function Home(): JSX.Element {
	return (
		<BrowserOnly>
			{() => {
				useEffect(() => {
					if (window) {
						window.location.href = 'docs/'
					}
				}, [])

				return <></>
			}}
		</BrowserOnly>
	)
}
