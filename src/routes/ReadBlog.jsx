import { Link, useLocation } from "react-router-dom";
import blogImage from "../assets/blogImage1.png";
import { SmallBlogCard } from "./routesComponents/Blog/BlogCard";
export default function ReadBlog() {
  return (
    <section className=" mx-auto md:container">
      <BreadCrumbs />
      <article className="read-blog-body">
        <h2 className="text-3xl lg:text-5xl mb-3 text-center font-semibold my-10">
          How important are shoes in your style?
        </h2>
        <p className="my-10 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          vero neque magni laboriosam. Laudantium, nisi iusto temporibus
          doloremque suscipit voluptatum natus sequi obcaecati, illum totam nam
          fugit unde adipisci!
        </p>
        <div className="my-14">
          <img src={blogImage} alt="blog Image" className="mx-auto w-full" />
        </div>
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut
          porro illo, suscipit inventore itaque provident ea magnam ad
          dignissimos corrupti vitae delectus odit veniam sunt, necessitatibus,
          velit cumque. Praesentium? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repudiandae, odit inventore exercitationem cumque
          accusantium veniam facilis in quam nostrum aliquid tempore! Cupiditate
          aut obcaecati rem laborum laudantium iure corrupti non! Nam, ea qui
          explicabo consequatur quam officiis ullam eius perferendis iste itaque
          quos neque impedit architecto, natus veritatis voluptatum nihil
          excepturi blanditiis voluptatibus dolor at animi. Maiores, culpa
          doloribus. Iste. Est quisquam incidunt sit similique aliquid fugiat
          debitis sapiente omnis magnam! Harum, quas assumenda aspernatur,
          perferendis doloribus nisi exercitationem, accusamus amet maiores
          earum quae aperiam quod fuga eos natus esse! Deleniti accusamus amet
          veritatis vel modi minus similique expedita maiores asperiores officia
          recusandae quam nostrum doloremque reprehenderit pariatur rem
          assumenda unde quis, culpa tenetur alias praesentium? Laboriosam ex
          dolores alias! In quod animi facilis doloribus ea obcaecati expedita
          temporibus, id deleniti facere explicabo autem exercitationem
          distinctio reprehenderit fuga dolorum. Laborum, ipsam? Cumque
          quisquam, fugiat quos totam nulla recusandae enim quam. Nostrum,
          voluptas consequuntur in est modi temporibus ratione minima fuga aut
          aliquid optio qui assumenda architecto incidunt nobis vero! Cumque
          maiores doloremque eligendi asperiores! Fugit, alias quibusdam!
          Repellendus odio incidunt placeat eaque soluta ipsum hic suscipit
          necessitatibus animi? Ipsam nihil blanditiis voluptatum dolorum
        </p>
      </article>
      <div className="more-blog-news mt-24 ">
        <h3 className="text-2xl text-center font-bold lg:text-4xl mb-10">
          More Blog News
        </h3>
        <div className="flex  justify-center md:justify-between gap-10 flex-wrap   lg:flex-nowrap">
          <SmallBlogCard imgUrl={blogImage} className={""} />
          <SmallBlogCard imgUrl={blogImage} className={""} />
          <SmallBlogCard imgUrl={blogImage} className={"mx-auto last:mx-0"} />
        </div>
      </div>
    </section>
  );
}
function BreadCrumbs() {
  const location = useLocation();
  let crumbLink = "";
  const locations = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");
  const crumbs = locations.map((crumb) => {
    crumbLink += `/${crumb}`;
    return (
      <Link
        to={crumbLink}
        key={crumb}
        className="capitalize crumb text-sm after:content-['>'] inline-block last:after:content-none after:pointer-events-none after:mx-1 "
      >
        <span className="hover:underline text-center"> {crumb}</span>
      </Link>
    );
  });
  const absoluteCrumbs = [
    <Link
      to="/"
      key={"home"}
      className="crumb text-sm after:content-['>'] after:mx-1"
    >
      <span className="hover:underline">Home</span>
    </Link>,
  ].concat(crumbs);

  return <nav className="text-gray-600">{absoluteCrumbs}</nav>;
}
