import useImages from "../hooks/useImages";

const Gallery = () => {
  const { isLoading, error, data: images } = useImages();

  console.log("check data here:", images);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section className="h-screen px-2 grid grid-cols-gallery gap-4">
      {images?.photos.map(photo => (
        <div className="h-64 bg-gray-200 rounded-xl " key={photo.id}></div>
      ))}
    </section>
  );
};

export default Gallery;
