/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
	NextComponentType,
	NextPageContext,
	NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';

type NextLayoutComponentType<P = {}> = NextComponentType<
	NextPageContext,
	any,
	P
> & {
	getLayout?: (page: ReactNode) => ReactNode;
};

type NextLayoutPage<P = {}, IP = P> = NextComponentType<
	NextPageContext,
	IP,
	P
> & {
	getLayout: (page: ReactNode) => ReactNode;
};

type AppLayoutProps<P = {}> = AppProps & {
	Component: NextLayoutComponentType;
};
