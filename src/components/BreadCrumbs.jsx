import { Link, useLocation, useParams } from "react-router-dom";

export  default function BreadCrumbs() {
  const location = useLocation();
  const params = useParams();

  let crumbLink = "";

  const locations = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "" && !Object.values(params).includes(crumb));
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
