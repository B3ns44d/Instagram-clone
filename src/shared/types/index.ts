import type { ComponentType, SVGProps, ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type NextPageWithLayout<P = Record<never, never>> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
