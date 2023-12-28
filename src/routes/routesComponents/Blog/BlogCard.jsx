import { BlogAuthor, BlogButton } from "../Home/HomeBlog";

export default function BlogCard({ imageUrl, type }) {
  return (
    <div
      className={
        "blog-card  xs:w-4/5 h-[850px] sm:w-auto  flex flex-col sm:gap-7 md:gap-10 sm:h-[350px] md:h-[400px] mb-20 last:mb-0 max-w-5xl mx-auto" +
        (type === "1" ? " sm:flex-row" : " sm:flex-row-reverse")
      }
    >
      <div className="blog-image flex-1  h-2/3 sm:h-full ">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full  object-cover object-top"
        />
      </div>
      <div className="flex-1 blog-body mt-4 sm:mt-0 flex flex-col justify-between">
        <h3 className="text-xl sm:text-3xl font-semibold">
          Fashion trend forecast for Summer 2021
        </h3>
        <div className="">
          <p className="max-h-20 py-1  md:max-h-30 overflow-clip sm:h-full ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            illo impedit tempora id nulla culpa animi voluptatem! Ab eum,
            perspiciatis dicta aliquid numquam molestias blanditiis sunt sit
            asperiores iste repudiandae.
          </p>
          <div className="my-5">
            <BlogButton />
          </div>
          <div className="">
            <BlogAuthor className="w-full sm:w-1/2 sm:min-w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
export function SmallBlogCard({ imgUrl, className }) {
  return (
    <div className={`small-blog-card lg:max-w-sm max-w-xs shadow-md ${className}`}>
      <div className="blog-img w-full">
        <img
          src={imgUrl}
          alt="Blog Image"
          className="max-h-96 w-full object-cover"
        />
      </div>
      <div className="lg:px-10 px-8 pb-16">
        <div className="my-8">
          <BlogAuthor />
        </div>
        <div className="card-body">
          <h3 className=" text-xl lg:text-2xl font-bold mb-6">
            How important are clothes in your style?
          </h3>
          <p className=" text-gray-900">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="mt-4">
            <BlogButton />
          </div>
        </div>
      </div>
    </div>
  );
}
