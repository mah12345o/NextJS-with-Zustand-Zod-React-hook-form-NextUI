import Navigation from "../component/Navigation/Navigation";
import Cart from "./Cart/page";
import Product from "./Products/page";
const NavLinks = ["/Ecommerce/Cart", "Ecommerce/Products"];
const page = () => {
  return (
    <div>
      <Navigation NavLinks={NavLinks}></Navigation>
    </div>
  );
};

export default page;
