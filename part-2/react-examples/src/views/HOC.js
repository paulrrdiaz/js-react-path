import React from "react";
import Main from "layouts/Main";
import axios from "axios";
import isFunction from "lodash/isFunction";

const API_GISTS_URL = "https://api.github.com/users/octocat/gists";

const withData = WrappedComponent => url =>
  class extends React.Component {
    state = {
      data: [],
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
      console.log(this.props);

      try {
        const API = isFunction(url) ? url(this.props.username) : url;
        console.log(API);

        const { data } = await axios.get(API);

        this.setState({
          data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    render() {
      console.log(this.state, "HOC");
      return <WrappedComponent fromHOC={true} {...this.state} {...this.props} />;
    }
  };

const Gists = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.owner.login}</h3>
            <p>{Object.keys(item.files)[0]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Posts = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default () => {
  const withGists = withData(Gists);
  const ExactGistByUser = withGists("https://api.github.com/users/rhfksl/gists");
  const GistsByUsername = withGists(username => `https://api.github.com/users/${username}/gists`);

  const PostsWithData = withData(Posts)("https://jsonplaceholder.typicode.com/posts");
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
