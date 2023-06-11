import { authMiddleware } from "@clerk/nextjs";

// const publicRoutes = [
//   "/",
//   "/sign-in",
//   "/sign-up",
//   "/api(.*)",
//   "/info(.*)",
//   "/proxy(.*)",
// ];

export default authMiddleware();

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
