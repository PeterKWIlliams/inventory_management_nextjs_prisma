import { authMiddleware } from "@clerk/nextjs";
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
//

export default authMiddleware({
  publicRoutes: ["/api/webhook", "/api/uploadthing", "/"],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/((?!_next/image|_next/static|favicon.ico).*)",
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
