import React from "react";
import { Slider } from "@/components";

const fetchItems = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/products?populate=*",
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const Hero = async () => {
  const items = await fetchItems();

  console.log(items.data);

  return (
    <section className="w-full my-12">
      <div className="max-w-full px-3 sm:px-0 sm:max-w-xl md:max-w-4xl xl:max-w-6xl m-auto mb-8">
        <h1 className="text-5xl font-karla_font">Featured Paintings</h1>
      </div>

      <Slider items={items} />
    </section>
  );
};

export default Hero;
