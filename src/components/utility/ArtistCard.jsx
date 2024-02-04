import Image from "next/image";
import React from "react";

const ArtistCard = ({ artist }) => {
  return (
    <div className="flex border-[1px] border-kid_gray">
      <Image src={artist.src} />
      <div className="flex flex-col justify-center ps-8 pe-28 text-sm">
        <p className="font-karla_font">{artist.name}</p>
        <p className="italic text-gray-400 font-karla_font">
          {artist.art}, {artist.location}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
