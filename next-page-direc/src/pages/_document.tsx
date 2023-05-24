import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // 서버에서만 렌더됨. 이벤트 핸들러 같은것은 사용할 수 없다.
  // route 변경시에 next 서버에서 페이지 내려주는데 이때 아래와 같은 형태로 준다는거임.
  // 현재 getStaticProps, getServerSideProps에서 지원 안됨.
  console.log("Document")
  return (
    <Html lang="en" className='DocumentRJ'>
      <Head /> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/*

클라 사이드 fetching, SEO 인덱싱같은거 안쓰면 괜찮. 
컨텐츠가 자주 업뎃되거나, data의 pre-render가 필요 없으면  필요 없음.

Page level에서 사용할 경우 런타임에 fetch 된다.
Component 레벨에서 사용하면, 컴포넌트가 마운트 될때 data fetch된다.




*/