import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useImages = (currentPage, pageSize) => {
  const fetchImages = () =>
    axios
      .get("https://api.pexels.com/v1/curated", {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
        params: {
          page: (currentPage - 1) * pageSize,
          per_page: pageSize,
        },
      })
      .then(res => res.data);

  return useQuery({
    queryKey: ["images", currentPage, pageSize],
    queryFn: fetchImages,
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useImages;
