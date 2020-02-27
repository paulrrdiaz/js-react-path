import React, { createRef } from "react";
import TypeIt from "typeit";
import Main from "layouts/Main";
import Calculator from "components/Calculator";
import Particles from "react-particles-js";
import particlesJSON from "assets/anything/particles2.json";

export default class extends React.Component {
  typeRef = createRef();

  componentDidMount() {
    const step1 = new TypeIt(this.typeRef.current)
      .pause(4000)
      .type("Hi!")
      .break()
      .type("Next chapter: CSS in JS");

    step1.go();
  }

  render() {
    return (
      <Main className="page page--blue">
        <Particles style={{ position: "absolute", zIndex: 0 }} params={particlesJSON} />
        <h1>Calculator</h1>
        <p ref={this.typeRef}></p>
        <Calculator />
      </Main>
    );
  }
}
