import { AllArtists } from "@/components";

export const metadata = {
  title: "Culture Kid Artists",
  description: "Cultuere kid web store home page.",
};

const page = () => {
  return (
    <main className="w-full">
      <AllArtists />
    </main>
  );
};

export default page;
