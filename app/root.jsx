import { Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration } from "react-router";
import stylesUrl from "./app.css?url";

export const links = () => [{ rel: "stylesheet", href: stylesUrl }];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <NavLink className="brand" to="/">Fieldnote</NavLink>
          <nav><NavLink to="/">Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/blog">Blog</NavLink></nav>
        </header>
        <main>{children}</main>
        <footer>© Fieldnote</footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
