import React from "react";
import SocialItem from "./SocialItem";

const SOCIAL_ITEMS = [
  {
    title: "Facebook",
    url: "https://facebook.com",
    image: "https://placeimg.com/640/480/any",
  },
  {
    title: "twitter",
    url: "https://facebook.com",
    image: "https://placeimg.com/640/480/sepia",
  },
  {
    title: "Instagram",
    url: "https://facebook.com",
    image: "https://placeimg.com/640/480/tech",
  },
];

const Social = () => {
  return (
    <ul className="social__list">
      {SOCIAL_ITEMS.map(item => (
        <SocialItem {...item} />
      ))}
    </ul>
  );
};

export default Social;
