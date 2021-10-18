/* eslint-disable @next/next/no-img-element */
import SocialMediaIcons from '@components/SocialMediaIcons';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { signIn } from 'next-auth/client';
import { SIGNIN_WITH_GOOGLE } from '@shared/constants';

const SignIn: NextPage = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const onSubmit = () => {
		if (emailRef.current.value && passwordRef.current.value === '') {
			throw Error('Email and Password are required');
		}
		return signIn('email', {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		});
	};

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
			<Head>
				<title>Login</title>
			</Head>
			<div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
				<div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
					<div className="bg-no-repeat instagram-logo" />
					<form className="mt-8 w-64 flex flex-col">
						<input
							ref={emailRef}
							className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
							id="email"
							placeholder="Phone number, username, or email"
							type="text"
						/>
						<input
							className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
							id="password"
							placeholder="Password"
							type="password"
						/>
						<button
							type="submit"
							className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium"
							onClick={() => onSubmit()}
						>
							Log In
						</button>
					</form>
					<div className="flex justify-evenly space-x-2 w-64 mt-4">
						<span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
						<span className="flex-none uppercase text-xs text-gray-400 font-semibold">
							or
						</span>
						<span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
					</div>
					<button className="mt-4 flex" type="button">
						<img
							src="https://bit.ly/3AMDUXj"
							alt="google logo"
							className="objectFit bg-no-repeat mr-1 h-4 w-4"
						/>
						<button
							type="button"
							onClick={() => signIn(SIGNIN_WITH_GOOGLE)}
							className="text-xs text-blue-900 font-semibold"
						>
							Log in with Google
						</button>
					</button>

					<Link href="/reset/password">
						<a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
							Forgot password?
						</a>
					</Link>
				</div>
				<div className="bg-white border border-gray-300 text-center w-80 py-4">
					<span className="text-sm">Don't have an account?</span>
					<Link href="/auth/signup">
						<a className="text-blue-500 text-sm font-semibold pl-2 cursor-pointer">
							Sign up
						</a>
					</Link>
				</div>
				<div className="mt-3 text-center">
					<Link href="/" passHref>
						<a className="text-xs cursor-pointer">Get the app</a>
					</Link>
					<div className="flex mt-3 space-x-2">
						<SocialMediaIcons iconType="apple-store-logo" />
						<SocialMediaIcons iconType="google-store-logo" />
					</div>
				</div>
			</div>
		</div>
	);
};

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const providers = await getProviders();
// 	return {
// 		props: {
// 			providers,
// 		},
// 	};
// };

export default SignIn;
