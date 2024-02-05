import { SingleArtDescription, SingleArtImage } from "@/components";

const page = ({ params }) => {
  console.log(params);
  return (
    <main className="flex justify-center">
      <SingleArtImage />
      <SingleArtDescription />
    </main>
  );
};

export default page;
