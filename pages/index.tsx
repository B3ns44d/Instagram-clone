import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@layout/index';
import Feed from '@layout/feed';
import Stories from '@containers/stories';
import Posts from '@containers/posts';

const Home: NextPage = () => (
	<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
		<Head>
			<title>Instagram</title>
			<meta
				name="description"
				content="A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Layout>
			<Feed>
				<section className="col-span-2">
					<Stories />
					<Posts />
				</section>
			</Feed>
		</Layout>
	</div>
);

export default Home;
