import { client } from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { groq } from "next-sanity";
import React from "react";

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

console.log("====================================");
console.log("ggyjuyjjty", client);
console.log("====================================");

const Post = ({ post }: any) => {
  const { title: title, name: namee, categories, authorImage } = post;

  return (
    <div>
      <h1>{title}</h1>
      <span>By {namee}</span>
      {categories && (
        <ul>
          Post in
          {categories.map((cat: any) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      )}
      {/* {authorImage && (
        <div>
          <img src={urlFor(authorImage).width(50).url()} alt="ffdd" />
        </div>
      )} */}
    </div>
  );
};

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title
  "authorImage": author->image
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
}

export default Post;
