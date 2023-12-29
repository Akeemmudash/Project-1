import {
  NavLink,
  useLocation,
  matchPath,
  useParams,
  useNavigate,
} from "react-router-dom";
import PaginationLeftArrow from "../assets/pagin-arr-left.svg";
import PaginationRightArrow from "../assets/pagin-arr-right.svg";

export function Pagination({ pathroute }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(pathroute);
  const { blogId } = useParams();
  console.log(blogId);
  console.log(useParams());
  console.log(location.pathname.split("/").splice(1));
  const { pageno } = useParams();
  function prevNavigate() {
    let page = parseInt(pageno);
    if (page > 2) {
      page = page - 1;
      navigate(`${pathroute}${blogId ? `/${blogId}` : ""}/${page.toString()}`);
      console.log(
        `${pathroute}${blogId ? `/${blogId}` : ""}/${page.toString()}`
      );
      // navigate(`${pathroute}`);
    } else {
      navigate(`${pathroute}${blogId ? `/${blogId}` : ""}`);
    }
  }

  const pages = [1, 2, 3];
  return (
    <nav className="pagination flex gap-3 justify-center">
      <button
        onClick={() => {
          prevNavigate();
        }}
        className="shadow-md w-11 h-11 inline-flex justify-center items-center"
      >
        <img src={PaginationLeftArrow} alt="" />
      </button>

      {pages.map((page, index) => {
        const path = `${pathroute}${blogId ? `/${blogId}` : ""}${
          index === 0 ? "" : "/" + (index + 1)
        }`;
        const pathname = location.pathname;
        const pattern = {
          path: `${pathroute}${blogId ? `/${blogId}` : ""}`,
          caseSensitive: true,
          end: true,
        };
        console.log(matchPath(pattern, pathname));
        function pathIsActive(isActive) {
          if (index === 0) {
            return isActive && matchPath(pattern, pathname);
          } else {
            return isActive;
          }
        }
        return (
          <NavLink
            to={path}
            key={index}
            className={({ isActive }) =>
              `shadow-md w-11 h-11 inline-flex justify-center items-center ${
                pathIsActive(isActive)
                  ? "outline-amber-400 outline-1 outline"
                  : ""
              }`
            }
          >
            {index + 1}
          </NavLink>
        );
      })}
      <button className="shadow-md w-11 h-11 inline-flex justify-center items-center">
        <img src={PaginationRightArrow} alt="" />
      </button>
    </nav>
  );
}
