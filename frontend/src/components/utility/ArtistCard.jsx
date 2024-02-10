import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArtistCard = ({ artist }) => {
  const imageUrl = `http://127.0.0.1:1337${artist.attributes.image.data.attributes.url}`;

  return (
    <Link
      href={`/single-artist/${artist.id}`}
      className="flex border-[1px] border-kid_gray cursor-pointer"
    >
      <Image
        src={imageUrl}
        width={100}
        height={100}
        className="w-20"
        alt={artist.attributes.name}
      />
      <div className="flex flex-col justify-center ps-8 text-sm">
        <p className="font-karla_font capitalize">{artist.attributes.name}</p>
        <p className="italic text-gray-400 font-karla_font capitalize">
          {artist.attributes.art}, {artist.attributes.location}
        </p>
      </div>
    </Link>
  );
};

export default ArtistCard;
