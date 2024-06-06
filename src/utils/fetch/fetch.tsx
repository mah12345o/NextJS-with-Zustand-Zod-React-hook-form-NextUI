interface FetchParameter {
  //   method: "GET";
  url: string;
}
interface OptionTypes {
  //   method: string;
  //   headers: Record<string, string>;
  //   body?: any;
}

export const fetchGenerator = async ({payload}: FetchParameter) => {
//   const { url } = parameters;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  //   const options: OptionTypes = {
  //     method,
  //     headers,
  //   };

  const res = await fetch(url);
  const data = res.json();
  return data;
};
