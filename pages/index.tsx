import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@layout/index';
import Feed from '@containers/feed';

const Home: NextPage = () => (
	<div>
		<Head>
			<title>Instagram</title>
			<meta
				name="description"
				content="A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Layout>
			<Feed />
		</Layout>
	</div>
);

export default Home;
