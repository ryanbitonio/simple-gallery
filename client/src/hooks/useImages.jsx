import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useImages = () => {
  const fetchImages = () =>
    axios
      .get("https://api.pexels.com/v1/curated", {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
      })
      .then(res => res.data);

  return useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });
};

export default useImages;
