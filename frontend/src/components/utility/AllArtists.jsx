import React from "react";

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

const AllArtists = async () => {
  const artists = await fetchArtists();

  return (
    <div className="px-3 sm:px-0 sm:max-w-2xl md:max-w-5xl xl:max-w-7xl m-auto">
      <h1 className="py-10 pb-20 text-xl tracking-widest">
        cultured kid. Artists
      </h1>
      <div className="  grid grid-cols-4 gap-5">
        {artists?.data?.map((artist) => {
          return <ArtistCard artist={artist} />;
        })}
      </div>
    </div>
  );
};

export default AllArtists;
