import Link from "next/link";
interface NavigationProps {
  NavLinks: string[];
}

const Navigation: React.FC<NavigationProps> = ({ NavLinks }) => {
  return (
    <div className="p-3 bg-orange-300 flex justify-end">
      {NavLinks.map((el: string) => (
        <Link key={el} className="mx-2" href={el}>
          {el === "/Ecommerce/Cart" ? "Cart" : "Products"}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
