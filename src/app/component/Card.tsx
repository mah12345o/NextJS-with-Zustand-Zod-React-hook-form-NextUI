import { products } from "@/interface/page";
import CardContainer from "./CardContainer";
import CardContent from "./CardContent";

const Card = ({ data }: { data: products }) => {

  return (
    <CardContainer>
      <CardContent data={data} />
    </CardContainer>
  );
};

export default Card;
