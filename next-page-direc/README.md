### pages 폴더에 파일을 만들면 Page Level에서 선언했다고 한다. [\_app.tsx](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)

- \_app.tsx -> 현재 route에 맞는 pages안의 파일로 진입.
- Component prop은 현재 활성화중인 페이지이다. jsx를 바벨에서 트랜스파일 한 그 형태로 찍힘.
- pageProps는 SSR, SSG를 통해서 preload 되는 프롭. default는 {}
  - 빌드타임에 api 미리 쏴서 prop에 담을 수 있으니 대박이긴 함..
  - 빌드타임 이후에 api resp 변하면?.. 안됩니다. SSR을 이용해서 서버사이드에서 요청해도 되긴 함. pre-render의 필요성에 대해 고민

### [\_document.tsx](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)

- 서버에서만 렌더됨. 이벤트 핸들러 같은것은 사용할 수 없다.
- route 변경시에 next 서버에서 페이지 내려주는데 이때 아래와 같은 형태로 준다는거임. (html이나 다른곳에 공통적으로 적용하고 싶으면 가능)
- 현재 getStaticProps, getServerSideProps에서 지원 안됨.

### [Client Rendering](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side)

- 클라 사이드 fetching, SEO 인덱싱같은거 안쓰면 괜찮.
- 컨텐츠가 자주 업뎃되거나, data의 pre-render가 필요 없으면 사용하면 됨. (대시보드 같은 페이지.)
- Page level에서 사용할 경우 런타임에 fetch 된다.
- Component 레벨에서 사용하면, 컴포넌트가 마운트 될때 data fetch된다.

### [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)

- 페이지에서 함수를 호출하면 Next는 `build` 타임에 이 페이지를 pre-render 한다. (getStaticProps가 반환하는 prop을 이용해서)
- Static Site Generation
- NOTE. 렌더링 타입에 관게없이 페이지 컴포넌트에 전해지는 prop은 초기 HTML 파일에서 다 보인다. 이건 page가 올바르게 hydrate 되는걸 허락해준다. 그니까 클라에 보이면 안되는 정보는 넣지 말란 뜻임.

* [hydrate](https://react.dev/reference/react-dom/hydrate) : server에 의해서 만들어진 HTML 컨텐츠의 browser dom node 안에 React component를 display 하게 해준다.

```tsx
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps: GetStaticProps<{
  repo: Repo;
  customValue: number;
}> = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo, customValue: 345 } };
  // 여기서 리턴하는 Object는 그대로 _app.tsx에서 pageProps로 넘어간다.
};

export default function Page({
  repo,
  customValue,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("hello World", customValue);
  return <div>{repo.stargazers_count}</div>;
}
```

- 그래서 언제 쓰는가?

  - 페이지 렌더에 필요한 데이터를 유저의 요청 전인 빌드타임에 사용 가능하다 \*\*
  - headless cms에서 데이터 오는경우 (api에 데이터들이 미리 다 담겨있는 케이스, head(모바일, 웹 등은 제약없이 바꿔낄 수 있음))
  - SEO를 위해 pre-render 되고 매우 빨라야 하는경우. (이 함수가 HTML, JSON 파일을 만들 수 잇고, 둘 다 CDN에 캐시될 수 있다.)

- 언제 실행되는지?

  - 항상 server에서 실행되고 절대 client에서 실행되지 않는다.
  - client-side bundle 파일에서 어떻게 바뀌는지 아래 링크에서 확인 가능.
  - [code eliminator](https://next-code-elimination.vercel.app/) 에서 테스트 가능.
  - next build 할동안 실행됨.
  - [ISR](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) 개념 나옴 : 점진적으로 정적 파일을 재생성 한다.
    - 전체 사이트를 다시 빌드하지 않고, 페이지 단위로 정적 생성 가능.
    - getStaticProps에서 리턴할때 revalidate 를 붙이면 됨. 몇초마다 재생성 이런거 가능.
    - stale page가 revalidate 될 동안 백그라운드에서 실행되고 새로운 페이지가 브라우저에게 serve 된다.

- 빌드타임에 HTML파일도 만드는데 getStaticProps의 실행 결과를 가지고 있는 JSON 파일도 만든다. 이건 Next 내부적으로 page navigate할때 이 파일을 이용한다(next/link, router). 빌드타임에 pre-computed 해놓기 때문. page component의 props로 이용.
- 즉 클라이언트 사이트 페이지 전환은 getStaticProps를 호출하지 않고, exported된 JSON 파일만 사용한다.

- SSR(ServerSideProps) vs SSG(getStaticProps)
  - 빌드타임에 데이터 fetch후에 변하지 않으면 SSG로 충분
  - 빌드타임 이후에 값이 변하니까 요청마다 Pre-render 하는것은? SSR (Cache-control로 캐시도 가능)
