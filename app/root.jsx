import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import knacssUrl from './css/knacss.css'
import headerUrl from './css/header.css'
import stylesUrl from './css/styles.css'

export function links() {
  return [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/logo192.png' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'stylesheet', href: knacssUrl },
    { rel: 'stylesheet', href: headerUrl },
    { rel: 'stylesheet', href: stylesUrl },
  ]
}

export const meta = () => ({
  charset: "utf-8",
  title: "Alexis Launay",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
