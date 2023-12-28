import { useNavigation, Outlet } from "react-router-dom";
import blogImage1 from "../assets/blogImage1.png";
import BlogCard from "./routesComponents/Blog/BlogCard";
import { Pagination } from "../components/Pagination";
export default function Blog() {
  return (
    <section className="md:container mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-20">
        BYC AFRICA Blog News
      </h2>
      <div className="blog-news-body">
        <BlogBody/>
      </div>
      <div className="mt-20 pb-4">
        <Pagination />
      </div>
    </section>
  );
}
export function BlogBody() {
  return (
    <>
      <BlogCard imageUrl={blogImage1} type="1" />
      <BlogCard imageUrl={blogImage1} />
    </>
  );
}
