import * as React from "react";

import { MicrosoftLoginButtonProps } from "../index";

export default class MicrosoftLoginButton extends React.Component<
  MicrosoftLoginButtonProps,
  any
> {
  render() {
    const { buttonTheme, buttonClassName, onClick } = this.props,
      [bg, short] = buttonTheme.split("_"),
      isDark = bg === "dark",
      styleObj = {
        cursor: "pointer"
      };

    return(
    <img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/32px-Microsoft_logo.svg.png"
				style={styleObj}
				className={buttonClassName}
				onClick={onClick}
			/>)
  }
}
