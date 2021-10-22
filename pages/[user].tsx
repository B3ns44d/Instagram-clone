/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@layout/index';
import { ReactElement } from 'react';

const UserProfile: NextPage = () => (
	<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
		<Head>
			<title>Instagram</title>
		</Head>
		<div>Hello from user profile</div>
	</div>
);
// @ts-ignore
UserProfile.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default UserProfile;
