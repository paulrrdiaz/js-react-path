import React from "react";
import Main from "layouts/Main";

import GistsList from "components/GistsList";
import PostsList from "components/PostsList";
import withData from "HOCs/withData";

export default () => {
  const withGists = withData(GistsList);
  const ExactGistByUser = withGists("https://api.github.com/users/rhfksl/gists");
  const GistsByUsername = withGists(username => `https://api.github.com/users/${username}/gists`);

  const PostsWithData = withData(PostsList)("https://jsonplaceholder.typicode.com/posts");
  return (
    <Main>
      <div>Hello HOCs</div>
      {/* <Gists /> */}
      <GistsByUsername username="octocat" />
      <GistsByUsername username="paulrrdiaz" />
      <ExactGistByUser />
      <PostsWithData />
    </Main>
  );
};
