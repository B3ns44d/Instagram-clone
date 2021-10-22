/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@layout/index';
import Feed from '@layout/Feed';
import Stories from '@containers/stories';
import Posts from '@containers/posts';
import { UserMiniProfile } from '@containers/userProfile';
import Suggestions from '@containers/suggestions';
import { useSession } from 'next-auth/client';
import { ReactElement } from 'react';

const Home: NextPage = () => {
	const [session] = useSession();
	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>Instagram</title>
				<meta
					name="description"
					content="A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Feed>
				<section className="col-span-2">
					<Stories />
					<Posts />
				</section>
				{session && (
					<section className="hidden xl:inline-grid md:col-span-1">
						<div className="fixed top-20">
							<UserMiniProfile />
							<Suggestions />
						</div>
					</section>
				)}
			</Feed>
		</div>
	);
};
// @ts-ignore
Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Home;
