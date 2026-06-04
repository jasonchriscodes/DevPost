import Badge from "@/ui_components/Badge";
import BlogWriter from "@/ui_components/BlogWriter";
import banner from "../images/detailBanner.jpg";

const DetailPage = () => {
  return (
    <>
      <div className="padding-dx max-container py-9">
        <Badge />

        <div className="flex justify-between items-center gap-4">
          <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
            {blog.title}
          </h2>
        </div>

        <BlogWriter />

        <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
          <img className="w-full h-full object-cover rounded-sm" src={banner} />
        </div>
        <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          ipsam, facilis ea doloremque ad iusto aperiam neque laborum incidunt
          suscipit nostrum atque voluptates, dolorum quam at. Ratione cumque
          quos minima.
        </p>
      </div>
    </>
  );
};

export default DetailPage;
