import { SingleArtist, SingleArtistWork } from "@/components";

export const metadata = {
  title: "Culture Kid Artist",
  description: "Cultuere kid artist portfolio.",
};

const fetchArtist = async (id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/artists/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const artist = await fetchArtist(params.id);

  return (
    <main className="flex justify-center">
      <SingleArtist artist={artist} />
      <SingleArtistWork artist={artist} />
    </main>
  );
};

export default page;
