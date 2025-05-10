
import Layout from '../Layouts/prd';
import dynamic from 'next/dynamic';

const ClientSideComponent = dynamic(
  () => {
    // 返回一个 Promise，在客户端加载脚本并渲染组件
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'components/Header.1571d0.js'; // 替换为实际的组件路径
      script.onload = () => {
        resolve(window['EASY_COMPONENTS.Header']); // 组件加载完成后解析
      };
      document.head.appendChild(script);
    });
  },
  { ssr: false } // 禁用服务端渲染
);

export default function Home() {
  return (
    <div >
      <main >
        Home
        {/* <ClientSideComponent /> */}
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
