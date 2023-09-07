import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = (input: RootLayoutProps) => {
	const { children } = input;

	return (
		<div className='flex flex-col min-h-screen mx-auto max-w-5xl px-4 pt-8 pb-16'>
			<div className='flex-grow'>
				<Header />
				<main className='my-0 py-16'>{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default RootLayout;
