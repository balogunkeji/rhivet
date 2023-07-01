import 'antd/dist/reset.css';
import LayoutComponent from '@/component/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const authPathArray = ['/'];

  const NComponent = () => authPathArray.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
  return (
    <NComponent/>
  )
}
