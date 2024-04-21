import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [ "/api/:path*", "/api/:path*/:param*"]
  
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

