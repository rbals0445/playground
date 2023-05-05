import axios from "axios";
import { useEffect, useState } from "react";

const photoUrl = "https://jsonplaceholder.typicode.com/photos";

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function Gallery() {
  const [photoInfo, setPhotoInfo] = useState<IPhoto[] | undefined>();

  const fetchPhotoInfo = async () => {
    try {
      const res = await axios.get<IPhoto[]>(photoUrl);
      setPhotoInfo(res.data.slice(0, 50));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPhotoInfo();
  }, []);

  return (
    <>
      {photoInfo?.map((elem, index) => (
        <div
          key={index}
          style={{
            border: "1px solid blue",
            margin: "20px",
            padding: "10px",
          }}
        >
          <img
            loading="lazy"
            width="150px"
            height="150px"
            src={elem.thumbnailUrl}
            alt=""
          />
          <div>{elem.title}</div>
        </div>
      ))}
    </>
  );
}

export default Gallery;
