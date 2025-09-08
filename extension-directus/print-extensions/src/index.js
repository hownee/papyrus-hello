/**
 * File Name: index.js
 * Author: Alexandre Kévin DE FREITAS MARTINS
 * Creation Date: 8/9/2025
 * Description: This is the index.js
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

import { defineHook } from "@directus/extensions-sdk";

export default defineHook(({ action }, { services, getSchema, database }) => {
    action("server.start", async () => {
        console.log("Server is starting...");

        const { ExtensionsService } = services;

        try {
            const schema = await getSchema();
            const knex = database;

            const extensionsService = new ExtensionsService({
                knex,
                schema,
                accountability: null, // Adjust as needed for your use case
            });

            const extensions = await extensionsService.readAll();
            console.log("Loaded Extensions:", extensions);
        } catch (error) {
            console.error("Failed to fetch extensions:", error);
        }
    });

    action("server.stop", async () => {
        console.log("Server is stopping...");
        console.log(
            `SERVER_SHUTDOWN_TIMEOUT: ${env["SERVER_SHUTDOWN_TIMEOUT"]}`
        );

        const { ExtensionsService } = services;

        try {
            const schema = await getSchema();
            const knex = database;

            const extensionsService = new ExtensionsService({
                knex,
                schema,
                accountability: null, // Adjust as needed for your use case
            });

            const extensions = await extensionsService.readAll();
            console.log("Loaded Extensions:", extensions);
        } catch (error) {
            console.error("Failed to fetch extensions:", error);
        }

        // Delay process termination to ensure the action completes
        await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    // Handle SIGINT to ensure server.stop completes
    process.on("SIGINT", async () => {
        console.log("SIGINT received. Waiting for server.stop to complete...");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Ensure delay
        console.log("Exiting process...");
        process.exit(0);
    });
});
