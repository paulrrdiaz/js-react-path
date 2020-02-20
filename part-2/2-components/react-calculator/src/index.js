import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import * as serviceWorker from './serviceWorker';

// Presentational || Stateless component || Functional component
// const Dumb = ({ image, name, resume, address }) => {
//   return (
//     <div>
//       <picture>
//         <img src={image} alt="" />
//       </picture>
//       <div>
//         <h2>{name}</h2>
//         <p>{resume}</p>
//         <address>{address}</address>
//       </div>
//     </div>
//   );
// };

// class components
// class Smart extends Component {
//   render() {
//     const image = "";
//     return (
//       <div className="smart">
//         <Dumb image={image} name="" resume="" address="" />
//       </div>
//     );
//   }
// }

// <Smart />;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
