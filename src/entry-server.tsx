import { renderToString } from "react-dom/server";
import App from "./App";

export function render(routePath: string) {
  return renderToString(<App routePath={routePath} />);
}
