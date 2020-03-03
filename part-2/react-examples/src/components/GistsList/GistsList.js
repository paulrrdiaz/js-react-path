import React from "react";
import { Item } from "./GistsList.styles";

export default ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <Item key={item.id}>
            <h3>{item.owner.login}</h3>
            <p>{Object.keys(item.files)[0]}</p>
          </Item>
        ))}
      </ul>
    </div>
  );
};
