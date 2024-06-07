interface FetchParameter {
  //   method: "GET";
  url: string;
}
interface OptionTypes {
  //   method: string;
  //   headers: Record<string, string>;
  //   body?: any;
}

export const fetchGenerator = async (payload: FetchParameter) => {
  const { url } = payload;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const res = await fetch(url);
  const data = await res.json();
  console.log("fetch:", data);
  return {data};
};
