import { BASE_URL } from "@/api";
import { FormatDate } from "@/services/formatDate";
import defaultAvatar from "@/images/pic.jpg";

const CardFooter = ({ blog }) => {
  const author = blog?.author;

  const profileImage = author?.profile_picture
    ? `${BASE_URL}${author.profile_picture}`
    : defaultAvatar;

  const authorName =
    author?.first_name || author?.last_name
      ? `${author?.first_name || ""} ${author?.last_name || ""}`.trim()
      : author?.username || "Unknown Author";

  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={profileImage}
            alt={authorName}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#97989F] text-[12px] font-semibold">
          {authorName}
        </small>
      </span>

      <small className="text-[#97989F] text-[12px] font-semibold ml-3">
        {blog?.published_date ? FormatDate(blog.published_date) : "No date"}
      </small>
    </div>
  );
};

export default CardFooter;
