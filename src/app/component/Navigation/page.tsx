import Link from "next/link";

const Navigation = ({ NavLinks}) => {
  return (
    <div className="p-3 bg-orange-300 flex justify-end">
      {NavLinks.map((el) => (
        <Link key={el} className="mx-2" href={el}>
          {el==="/Ecommerce/Cart"?"Cart":"/Ecommerce/Products"}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
