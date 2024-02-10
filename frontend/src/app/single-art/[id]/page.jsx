import { SingleArtDescription, SingleArtImage } from "@/components";

export const metadata = {
  title: "Culture Kid Art",
  description: "Cultuere kid web store single art page.",
};

const fetchItem = async (id) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/products/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const item = await fetchItem(params.id);

  return (
    <main className="flex justify-center">
      <SingleArtImage item={item} />
      <SingleArtDescription item={item} />
    </main>
  );
};

export default page;
