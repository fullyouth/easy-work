
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import { loadScript, loadReact } from '../utils';

export default function Home() {
  const ClientSideComponent = useMemo(() => {
    return dynamic(
      () => {
        // 返回一个 Promise，在客户端加载脚本并渲染组件
        return new Promise((resolve) => {
          const compName = 'Header';
          const jsUrl = window['EASY_COMPONENTS_CONF'][compName].js;
          // 动态加载 React 和组件脚本
          loadScript(jsUrl).then(async () => {
            await loadReact();
            resolve(window[`EASY_COMPONENTS_${compName}`]); // 组件加载完成后解析
          })
        });
      },
      { ssr: false } // 禁用服务端渲染
    );
  }, [])

  return (
    <div >
      <main >
        Home
        <ClientSideComponent />
      </main>
    </div>
  );
}
