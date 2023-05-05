import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={{ display: "flex", columnGap: "20px" }}>
      <Link to="/">Go to Root</Link>
      <Link to="/excel">Go to excel</Link>
    </div>
  );
}
export default Navigation;
