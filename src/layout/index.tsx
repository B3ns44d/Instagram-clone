import { childrenProps } from '@shared/interfaces';
import type { FC, ReactElement } from 'react';
import Header from './Header';

const Layout: FC = ({ children }: childrenProps): ReactElement => (
	<div>
		<Header />
		{children}
	</div>
);

export default Layout;
