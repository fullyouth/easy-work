export function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => {
            resolve();
        };
        script.onerror = () => {
            reject(new Error(`Failed to load script: ${url}`));
        };
        document.body.appendChild(script);
    });
}

// 动态加载 React
export const loadReact = async () => {
    const React = await import('react');
    const ReactDOM = await import('react-dom');
    window.React = React;
    window.ReactDOM = ReactDOM;
};