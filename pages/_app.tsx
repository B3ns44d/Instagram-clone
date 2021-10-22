import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { Provider } from 'next-auth/client';
import { nextAuthProviderConfig } from '@shared/utils';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
	<Provider options={nextAuthProviderConfig} session={pageProps.session}>
		<Component {...pageProps} />
	</Provider>
);

export default MyApp;
