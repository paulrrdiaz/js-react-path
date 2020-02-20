import React from "react";

const SocialItem = ({ image, title, url }) => {
  return (
    <li className="social__item">
      <a href={url} title={title}>
        {title}
        <img src={image} alt={title} />
        
      </a>
    </li>
  );
};

export default SocialItem;
