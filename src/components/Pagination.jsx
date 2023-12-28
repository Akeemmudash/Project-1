import {
  NavLink,
  useLocation,
  matchPath,
  useParams,
  useNavigate,
} from "react-router-dom";
import PaginationLeftArrow from "../assets/pagin-arr-left.svg";
import PaginationRightArrow from "../assets/pagin-arr-right.svg";

export function Pagination() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(useParams());
  const { pageno } = useParams();
  function prevNavigate() {
    let page = parseInt(pageno);
    if (page > 2) {
      page = page - 1;
      navigate(`/blog/${page.toString()}`);
    } else {
      navigate(`/blog`);
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
        const path = `/blog${index === 0 ? "" : "/" + (index + 1)}`;
        const pattern = {
          path: "/blog/",
          caseSensitive: false,
          end: true,
        };

        const pathname = location.pathname;
        const match = matchPath(pattern, pathname);
        function condition(isActive) {
          if (index === 0) {
            return isActive && match;
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
                condition(isActive) ? "outline-amber-400 outline-1 outline" : ""
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
