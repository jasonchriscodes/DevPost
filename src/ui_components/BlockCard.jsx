import Badge from "./Badge";
import CardFooter from "./CardFooter";
import thumbnail from "../images/design_vii.jpg";
import { Link } from "react-router-dom";
import { BASE_URL } from "@/api";

const BlogCard = ({ blog }) => {
  return (
    <div className="px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg">
      <Link to={`/blogs/${blog.slug}`}>
        <div className="w-full h-[200px] border rounded-md overflow-hidden">
          <img
            src={thumbnail}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Link>

      <Badge />

      <Link to={`/blogs/${blog.slug}`}>
        <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
          Build and Ecommerce Web App with Django and React
        </h3>
      </Link>

      <CardFooter />
    </div>
  );
};

export default BlogCard;
