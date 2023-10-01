import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
 
import styles from "./tailwind.css";

  export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <div className="text-center">
          <h1 className="font-normal text-2xl text-blue-500">Hello world :REMIX V2 </h1>
          <div>
            A skeletal REMIX repo with Tailwind css
          </div>
          </div>
          <Outlet />
  
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  

export const links = () => [
    {rel:"stylesheet",href:styles},
];



