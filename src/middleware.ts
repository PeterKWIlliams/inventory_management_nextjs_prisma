import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { api } from "./utils/api";

// const publicRoutes = [
//   "/",
//   "/sign-in",
//   "/sign-up",
//   "/api(.*)",
//   "/info(.*)",
//   "/proxy(.*)",
// ];

// export default authMiddleware({
//   afterAuth(auth, req) {

//     const profileAdd = new URL("/profile/add", req.url);
//     return NextResponse.redirect(profileAdd);
//   },
// });

export default authMiddleware({
  ignoredRoutes: ["/api/{webhook}"],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};

// import { getAuth } from "@clerk/nextjs/server";
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { userId } = getAuth(req);
//     // Load any data your application needs for the API route
//   return res.status(200).json({data})
// };
