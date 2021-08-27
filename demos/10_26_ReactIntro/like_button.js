//create the component to display in the site
"use strict";

const e = React.createElement;
//create the like button
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}

//grab the dom Container object in a variable
const domContainer = document.querySelector("#like_button");

//render the button there!
ReactDOM.render(e(LikeButton), domContainer);
