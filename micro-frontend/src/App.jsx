/**
 * File Name: App.jsx
 * Author: Alexandre Kévin DE FREITAS MARTINS
 * Creation Date: 8/9/2025
 * Description: This is the App.jsx
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

import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div
            style={{
                padding: "24px",
                border: "2px solid #10b981",
                borderRadius: "12px",
                backgroundColor: "#f0fdf4",
                color: "#065f46",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <h2 style={{ margin: "0 0 16px 0", color: "#047857" }}>
                🎉 Remote Vite Component Successfully Loaded! Vite App djeosifjseoirgisr
            </h2>
            <p style={{ margin: "0 0 16px 0", lineHeight: "1.5" }}>
                This component is loaded via Module Federation from a separate
                Vite application running on port 4173.
            </p>
            <button
                onClick={() => setCounter(counter + 1)}
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#10b981",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Clicked {counter} times
            </button>
            <div
                style={{
                    marginTop: "16px",
                    padding: "16px",
                    backgroundColor: "#ecfdf5",
                    borderRadius: "8px",
                    border: "1px solid #a7f3d0",
                }}
            >
                <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>
                    Features:
                </p>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                    <li>Hot reloading support ✅ ahahahah</li>
                    <li>Shared React dependencies ✅</li>
                    <li>Module Federation integration ✅</li>
                    <li>Error boundary protection ✅</li>
                </ul>
            </div>
            <div
                style={{
                    marginTop: "16px",
                    fontSize: "14px",
                    color: "#059669",
                    fontStyle: "italic",
                }}
            >
                Loaded at: {new Date().toLocaleTimeString()}
            </div>
        </div>
    );
}

export default App;
