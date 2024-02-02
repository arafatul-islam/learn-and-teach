<ol>
<li> import * as path from "path"; in vite.config.js file </li>
<li> add  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  }, in define config object </li>
</ol>

---

import \* as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
resolve: {
alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
},
});

---

path.resolve(\_\_dirname, "src"): A sequence of paths or path segments.

The right-most parameter is considered {to}. Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.

@throws — {TypeError} if any of the arguments is not a string.
