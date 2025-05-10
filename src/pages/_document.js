import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        {/* 全局元标签、字体、样式等 */}
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // 这里需要拉去接口获取
              window.EASY_COMPONENTS_CONF = {
                Header: {
                    js: 'components/Header.f6f816.js',
                    css: 'components/Header.f6f816.css',
                }
              };
              window['EASY_GLOBAL'] = {}
            `,
          }}
        />
        <script src="components/Header.f6f816.js" />
      </Head>
      <body>
        <Main />       {/* 这是 Next.js 页面内容 */}
        <NextScript /> {/* 这是 Next.js 自动注入的脚本 */}
      </body>
    </Html>
  );
}