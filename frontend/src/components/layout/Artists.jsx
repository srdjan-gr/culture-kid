import { ArtistCard } from "@/components";

const fetchArtists = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/artists/?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const Artists = async () => {
  const artists = await fetchArtists();

  return (
    <section className="w-full p-12 bg-kid_light_gray flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="uppercase text-xs tracking-widest text-start w-full ">
          Featured artists
        </h3>

        <div className="flex gap-5">
          {artists?.data?.map((artist) => {
            return <ArtistCard artist={artist} key={artist.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Artists;
