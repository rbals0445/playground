import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useEffect, useState } from "react";

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
};

export default function Gallery({
  repo,
  customValue,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [fileName, setFileName] = useState<string>("");
  console.log("hello World");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files;
    setFileName(fileName?.[0].name ?? "Default Name");
  };

  useEffect(() => {
    console.log("Mount 될 때 실행", customValue);
  }, []);

  return (
    <>
      <div>
        Click <input type="file" onChange={onChange} />{" "}
      </div>
      <div>File Name : {fileName}</div>
      <div>{repo.stargazers_count}</div>
    </>
  );
}
