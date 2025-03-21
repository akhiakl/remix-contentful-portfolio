import { createCookie } from "react-router";

export const cookie = createCookie("user-prefs", {
  path: "/",
  sameSite: "none",
  httpOnly: true,
  secure: true,
  secrets: [process.env.CONTENTFUL_PREVIEW_SECRET as string],
});


export const parseCookie = async (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  return (await cookie.parse(cookieHeader)) || {};
}