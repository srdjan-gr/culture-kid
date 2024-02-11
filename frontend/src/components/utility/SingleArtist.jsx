import Image from "next/image";
import React from "react";

const SingleArtist = ({ artist }) => {
  const imageUrl =
    process.env.STRAPI_URL + artist.data.attributes.image.data.attributes.url;

  return (
    <div className="bg-kid_light_gray w-1/2 h-screen flex flex-col items-start justify-start">
      <h1 className="ps-28 pt-10 text-xl tracking-widest">
        cultured kid. Artist portfolio
      </h1>
      <div className=" ps-28 pt-20 flex gap-4 p-6">
        <div className="w-1/3">
          <Image
            src={imageUrl}
            width={100}
            height={100}
            className="w-[180px]"
            alt={artist.data.attributes.name}
          />
        </div>
        <div className="flex flex-col font-karla_font w-2/3">
          <h2 className=" text-2xl mb-2">{artist.data.attributes.name}</h2>

          <p className="text-gray-400 capitalize italic">
            {artist.data.attributes.location}
          </p>
          <p className="text-gray-400 capitalize italic mb-4">
            {artist.data.attributes.art}
          </p>
          <p className="text-gray-400 italic w-full">
            {artist.data.attributes.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleArtist;
