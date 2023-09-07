import { PageComponent } from "@/common/types";
import RootLayout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	const getLayout = (Component as PageComponent)?.getLayout || ((page) => page);

	return getLayout(<Component {...pageProps} />);
}
