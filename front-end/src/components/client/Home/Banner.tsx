import { Carousel } from "antd";

const Banner = () => {
  return (
    <>
      <div className="bg-white rounded-xl my-10">
        <div className="flex flex-row justify-between items-center">
          <div className="w-full md:w-3/4 md:pl-5 p-5">
            <Carousel autoplay draggable>
              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2020/Banner-chinh-920x420.jpg" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-6-2020/baosalemuaha_mainbanner_920x420.jpg" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-6-2019/MainBanner_915x423.png" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-8-2019/quang-van-banner-2.jpg" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-8-2020/Tram44_banner1_920x420.jpg" className="rounded-xl" />
            </Carousel>
          </div>

          <div className="w-full bg-blue-300 rounded-xl flex flex-col gap-3 px-4 py-10">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-02-2021/TrangVPPT2_HopBut_Final-920x420.png"
              className="rounded-xl hidden md:block hover:scale-105"
            />
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-02-2021/TrangVPPT2_HopBut_Final-600x300.png"
              className="rounded-xl hidden md:block hover:scale-105 h-[150px]"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
