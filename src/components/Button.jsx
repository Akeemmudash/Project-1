import { Link } from "react-router-dom";

export default  function Button({ children, color, className, to }) {
  const classes =
    `${className || ""} bg-${color} ` +
    (color === "black" ? "text-white" : "text-black");

  return (
    <Link
      to={to}
      className={`text-center inline-block py-2 xs:py-2.5  md:py-3 border border-black ${classes}`}
    >
      {children}
    </Link>
  );
}
Button.defaultProps = {
  color: "white",
};
