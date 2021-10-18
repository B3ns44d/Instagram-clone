import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { nextAuthConfig } from '@shared/configs/index';

export default NextAuth({
	providers: [
		Providers.Facebook({
			clientId: nextAuthConfig.facebook.clientId,
			clientSecret: nextAuthConfig.facebook.clientSecret,
		}),
		Providers.Google({
			clientId: nextAuthConfig.google.clientId,
			clientSecret: nextAuthConfig.google.clientSecret,
		}),
	],
	pages: {
		signIn: '/auth/signin',
	},
	debug: true,
});
