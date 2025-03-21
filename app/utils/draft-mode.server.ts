import { parseCookie, cookie as serverCookie } from "./cookies.server";

export const draftMode = async (request: Request) => {
  const cookie = await parseCookie(request)
  return {
    enable: async () => {
      return {
        'Set-Cookie': await serverCookie.serialize({ ...cookie, draft: true }),
      }
    },
    disable: async () => {
      return {
        'Set-Cookie': await serverCookie.serialize({ ...cookie, draft: false }),
      }
    },
    get isEnabled() {
      return cookie?.draft === true;
    }
  }

}