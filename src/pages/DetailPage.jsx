import Badge from "@/ui_components/Badge";
import BlogWriter from "@/ui_components/BlogWriter";
import banner from "../images/detailBanner.jpg";

const blog = {
  title: "Build an Ecommerce Web App with Django and React",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam, facilis ea doloremque ad iusto aperiam neque laborum incidunt suscipit nostrum atque voluptates, dolorum quam at. Ratione cumque quos minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi, natus ut odio dolorum minus soluta, sint, delectus omnis eaque sit tempora pariatur incidunt nesciunt. Veritatis est obcaecati accusantium reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed. Ut tempore consequuntur ipsum? Aliquam sit odio dolorum quisquam, corporis eaque, delectus ab molestias laboriosam rerum recusandae totam deserunt similique!",
  featured_image: banner,
  author: {
    username: "John Doe",
  },
  created_at: "04 Jun 2026",
};

const DetailPage = () => {
  return (
    <>
      <div className="padding-x max-container py-9">
        <Badge blog={blog} />

        <div className="flex justify-between items-center gap-4">
          <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
            {blog.title}
          </h2>
        </div>

        <BlogWriter blog={blog} />

        <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
          <img
            className="w-full h-full object-cover rounded-sm"
            src={blog.featured_image}
            alt={blog.title}
          />
        </div>

        <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
          {blog.content}
        </p>
      </div>
    </>
  );
};

export default DetailPage;
