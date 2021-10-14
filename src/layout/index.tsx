import { childrenProps } from '@shared/interfaces';
import type { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }: childrenProps): JSX.Element => (
	<div>
		<Header />
		{children}
	</div>
);

export default Layout;
