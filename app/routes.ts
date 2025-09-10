import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
 {
    path: "/",                 // root page
    file: "routes/home.tsx",
    prerender: () => ["/"],    
    ssr: false
  },
] satisfies RouteConfig;
