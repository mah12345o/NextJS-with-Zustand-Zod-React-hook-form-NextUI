import { fetchGenerator } from "@/utils/fetch/fetch";
import { All_enums } from "@/enums";
const Zustand_state_library = async () => {
  const { data } = await fetchGenerator(All_enums.API_URL as string);
  return <div className="pt-16">Zustand_state_library</div>;
};

export default Zustand_state_library;
