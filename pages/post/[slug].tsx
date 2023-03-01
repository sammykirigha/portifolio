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

const Post = () => {
  return (
    <div>
      <h1>Connecting to sanity</h1>
    </div>
  );
};

export default Post;
