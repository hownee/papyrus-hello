/**
 * File Name: vite.config.js
 * Author: Alexandre Kévin DE FREITAS MARTINS
 * Creation Date: 8/9/2025
 * Description: This is the vite.config.js
 * Copyright (c) 2025 Hownee Inc.
 * Version: 1.0.0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "remote_modules",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App.jsx",
            },
            shared: {
                react: {
                    singleton: true,
                    // requiredVersion: "^18.0.0",
                },
                "react-dom": {
                    singleton: true,
                    // requiredVersion: "^18.0.0",
                },
            },
            runtime: {
                async: true,
            },
            runtimePlugins: [],
        }),
    ],
    server: {
        port: 4173,
        cors: true,
        host: true,
    },
    preview: {
        port: 4173,
        cors: true,
        host: true,
    },
    build: {
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            external: [],
            output: {
                minifyInternalExports: false,
            },
        },
    },
});
