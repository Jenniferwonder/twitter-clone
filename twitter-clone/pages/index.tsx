import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { sanityClient } from "../sanity";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import { Toaster } from "react-hot-toast";

interface Props {
	tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
	return (
		<div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
			<Head>
				<title>Twitter 2.0</title>
			</Head>
			<Toaster />
			<main className="grid grid-cols-9">
				{/* Sidebar */}
				<Sidebar />

				{/* Feed */}
				<Feed tweets={tweets} />

				{/* Widgets */}
				<Widgets />
			</main>
		</div>
	);
};

export default Home;

/* Get the Server Side Rendered Data back to the Client*/
export const getServerSideProps: getServerSideProps = async (context) => {
	const tweets = await fetchTweets();
	return {
		props: {
			tweets,
		},
	};
};
