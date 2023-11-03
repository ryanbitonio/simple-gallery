import useImages from "../hooks/useImages";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const { isLoading, error, data: images } = useImages(currentPage, pageSize);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="h-screen px-4 py-4">
      <section className="grid grid-cols-gallery gap-3">
        {images?.photos.map(photo => (
          <div className="rounded-xl" key={photo.id}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{photo.photographer}</CardTitle>
                <CardDescription>{`Photo by ${photo.photographer} on Pexels`}</CardDescription>
              </CardHeader>
              <CardContent>
                <img className="rounded-lg" src={photo.src.portrait} />
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
      <div className="flex justify-end gap-2 py-4">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
