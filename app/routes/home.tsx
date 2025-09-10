import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export const handle = {
  buildtime: new Date().toISOString(),
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: new Date().toISOString() };
// }

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={handle.buildtime} />;
}
