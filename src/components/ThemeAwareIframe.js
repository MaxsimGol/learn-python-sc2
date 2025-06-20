// The final, correct component: src/components/ThemeAwareIframe.js

import React, { useState, useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ThemeAwareIframe({ src, style, ...rest }) {
    const iframeRef = useRef(null);
    const { colorMode } = useColorMode();

    // Start with the initial height passed in from the .mdx file
    const [iframeHeight, setIframeHeight] = useState(style.height || '500px');

    // --- HOOK 1: Handles messages received FROM the iframe ---
    // This effect runs only once when the component mounts.
    useEffect(() => {
        const handleMessage = (event) => {
            const iframe = iframeRef.current;
            if (!iframe) return;

            // Handle height messages
            if (event.data && typeof event.data.height === 'number') {
                setIframeHeight(`${event.data.height}px`);
            }

            // Handle theme requests from the child
            // This is for when the iframe loads and asks "what's the theme?"
            if (event.data && event.data.getDocusaurusTheme) {
                iframe.contentWindow.postMessage({ theme: colorMode }, '*');
            }
        };

        window.addEventListener('message', handleMessage);

        // Cleanup function
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [colorMode]); // We include colorMode here so the correct theme is sent on request.


    // --- HOOK 2: Proactively sends theme changes TO the iframe ---
    // This effect runs whenever the Docusaurus theme (colorMode) changes.
    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            // Send the new theme to the iframe
            iframe.contentWindow.postMessage({ theme: colorMode }, '*');
        }
    }, [colorMode]);


    return (
        <iframe
            ref={iframeRef}
            src={src}
            style={{
                display: 'block',
                width: '100%',
                border: 'none',
                ...style, // Use the passed-in style object
                height: iframeHeight, // Override its height with our state
            }}
            scrolling="no" // A final safeguard against scrollbars
            {...rest}
        />
    );
}