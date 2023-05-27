import { type AppType } from "next/app";
import { api } from "~/utils/api";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <Head>
        <title>Roar</title>
        <meta name="description" content="😀" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Toaster position="bottom-center" />
      <>
        <SignedIn>
          <>
            <Component {...pageProps} />
            <Link href={"/"}>home</Link>
          </>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
