import { prefix, type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  // for all api routes
  ...prefix('api', [...await flatRoutes({
    rootDirectory: "routes/api",
  })]),
  // for remaining routes
  ...(await flatRoutes({
    ignoredRouteFiles: ["./routes/api/*"],
  })),
] satisfies RouteConfig;
