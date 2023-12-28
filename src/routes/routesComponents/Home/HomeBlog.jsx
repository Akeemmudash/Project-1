import blogImage1 from "../../../assets/blogImage1.png";
import blogImage2 from "../../../assets/blogImage2.png";
import blogImage3 from "../../../assets/blogImage3.png";
import blogAuthor from "../../../assets/blogAuthor.png";
import eyeIcon from "../../../assets/eyeIcon.svg";
import Like from "../../../assets/like.svg";
import Arrow from "../../../assets/Arrow.svg";
import Button from "../../../components/Button";
import { SmallBlogCard } from "../Blog/BlogCard";

export default function Blog() {
  return (
    <section className="md:container max-w-4xl mx-auto">
      <h2 className=" text-2xl md:text-3xl text-center mb-14 font-bold">
        BYC AFRICA Blog News
      </h2>
      <div className="flex gap-5 justify-center flex-wrap">
        <SmallBlogCard imgUrl={blogImage1} className="inline-block " />
        <SmallBlogCard imgUrl={blogImage2} className="inline-block" />
      </div>
      <div className=" mt-14 mx-auto text-center">
        <Button to="blog/read" className="font-bold w-40 md:w-56">
          View all
        </Button>
      </div>
    </section>
  );
}
export function BlogAuthor({ className }) {
  const classes = className || "";
  return (
    <div className={`author ${classes}`}>
      <div className="flex items-center bg-slate-100 pe-5 mb-2">
        <span className="author-img ">
          <img src={blogAuthor} alt="blog Author" />
        </span>
        <div className="inline-flex  flex-1 justify-center gap-5">
          <span className="eye-icon">
            <img src={eyeIcon} className="eye-icon inline-block" alt="" />{" "}
            <span className="view-no align-middle">24</span>
          </span>
          <span className="blog-likes">
            <img src={Like} alt="Likes" className="inline-block" />{" "}
            <span className="likes-no align-middle">12</span>
          </span>
        </div>
      </div>
      <div className="author-details flex items-end">
        <span className="author-name inline-block align-text-bottom  text-sm font-semibold me-4">
          Wade Warren
        </span>
        <span className="author-profession align-text-bottom capitalize font-light text-gray-500">
          Fashion Designer
        </span>
      </div>
    </div>
  );
}

export function BlogButton() {
  return (
    <Button className="px-4 text-sm font-semibold group" to="/blog/read">
      <span>Read More</span> &nbsp;
      <img
        src={Arrow}
        alt=""
        className=" w-4 sm:w-5 inline-block group-hover:translate-x-1 transition-transform "
      />
    </Button>
  );
}
