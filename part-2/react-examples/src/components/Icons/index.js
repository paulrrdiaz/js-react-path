import React from "react";

import LogoSVG from "assets/icons/logo.svg";
import TerminalSVG from "assets/icons/terminal.svg";

import getStyledSVG from "components/Icons/getStyledSVG";

export const Logo = props => getStyledSVG(props, LogoSVG);
export const Terminal = props => getStyledSVG(props, TerminalSVG);
