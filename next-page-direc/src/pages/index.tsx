import { useEffect } from "react";


export default function Index() {
  console.log("hello World");

  const onChange = (e:any) => {
    console.log(e.target.files[0]);
  }

  useEffect(() => {
    console.log("Mount 될 때 실행");
  },[])

  return <div>Click <input type='file' onChange={onChange}/> </div>;
}