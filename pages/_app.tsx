import '../styles/globals.css';
import type { ReactElement } from 'react';
import { Provider } from 'next-auth/client';
import { nextAuthProviderConfig } from '@shared/utils';
import { AppPropsWithLayout } from '@shared/types/index';
import { RecoilRoot as AppProvider } from 'recoil';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
	const getLayout = Component.getLayout || ((page: ReactElement) => page);

	return (
		<Provider options={nextAuthProviderConfig} session={pageProps.session}>
			<AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
		</Provider>
	);
};

export default MyApp;
