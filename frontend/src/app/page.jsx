import { Hero, Astists, Artists } from "@/components/index";

export const metadata = {
  title: "Culture Kid Home",
  description: "Cultuere kid web store home page.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Artists />
    </main>
  );
}
