import { ArtistCard } from "@/components";
import { artists } from "@/app/internalData";

const Artists = () => {
  return (
    <section className="w-full p-12 bg-kid_light_gray flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="uppercase text-xs tracking-widest text-start w-full ">
          Featured artists
        </h3>

        <div className="flex gap-5">
          {artists.map((artist) => {
            return <ArtistCard artist={artist} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Artists;
