import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// App -> 현재 route에 맞는 pages안의 파일로 진입. 당연한거임, 어쨌든 진입점은 App
export default function App({ Component, pageProps }: AppProps) {
  // Component prop은 현재 활성화중인 페이지이다. jsx 형태 그대로 찍힘.
  // pageProps는 SSR, SSG를 통해서 preload 되는 프롭. default는 {}
  
  console.log("App",Component, pageProps)
  return <Component {...pageProps} />
}
