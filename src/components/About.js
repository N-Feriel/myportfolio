import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageBg from "../pexels-bg.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  console.log(author);

  if (!author) return <div>Loading...</div>;
  return (
    <main className="relative">
      <img src={imageBg} alt="form pixels" className="absolute w-full" />
      <div className="p-10 lg:-t-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="prose lg:prose-xl text-white">
                {author.name}
              </span>
            </h1>
            <div>
              <BlockContent
                blocks={author.bio}
                projectId="h02t23p7"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
