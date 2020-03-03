import React from "react";
import { Item } from "./PostsList.styles";

export default ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <Item key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Item>
        ))}
      </ul>
    </div>
  );
};
