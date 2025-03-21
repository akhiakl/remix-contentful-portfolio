import { type RouteConfig, route } from "@react-router/dev/routes";

export default [route(":lang?", "routes/($lang).home.tsx"), route("/api/draft", "routes/api/draft.ts"), route("/api/disable-draft", "routes/api/disable-draft.ts")] satisfies RouteConfig;
