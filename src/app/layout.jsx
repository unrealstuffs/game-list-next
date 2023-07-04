import { GlobalStyles } from '../styles/Global'
import StyledComponentsRegistry from '@/lib/registry'
import Theme from '@/providers/Theme'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Game List Next',
	description: 'Game List Next',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={openSans.className}>
				<StyledComponentsRegistry>
					<Theme>
						<GlobalStyles />
						{children}
					</Theme>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
