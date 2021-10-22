/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@layout/index';
import { ReactElement } from 'react';

const Direct: NextPage = () => (
	<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
		<Head>
			<title>Instagram - Direct</title>
		</Head>
	</div>
);
// @ts-ignore
Direct.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Direct;
