import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AlbumInfoTable from "./AlbumInfoTable";
import { IPhoto } from "../types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const photoUrl = "https://jsonplaceholder.typicode.com/photos";

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
      <div>Count: {photoInfo?.length}</div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
          type: "fraction",
        }}
        autoplay={{ delay: 2000 }}
        navigation
        spaceBetween={50}
        slidesPerView={2}
        grabCursor
      >
        {photoInfo?.map((elem, index) => (
          <SwiperSlide key={index}>
            <div style={{ padding: "30px", border: "1px solid blue" }}>
              <img
                loading="lazy"
                width="150px"
                height="150px"
                src={elem.thumbnailUrl}
                alt=""
              />
              <div>{elem.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {!!photoInfo?.length && <AlbumInfoTable photoInfo={photoInfo} />}
    </>
  );
}

export default Gallery;
