import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import LandingPage from "./in";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider afterSignInUrl="/">
      <Head>
        <title>Inventory Management</title>
        <meta name="description" content="Inventory management software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <SignedOut>
        <LandingPage></LandingPage>
      </SignedOut>

      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
