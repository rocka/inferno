"use strict";

export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  render() {}

  forceUpdate() {}

  setState(newStateItems) {
    for(let stateItem in newStateItems) {
      this.state[stateItem] = newStateItems[stateItem];
    }
    this.forceUpdate();
  }

  replaceState(newState) {
    this.state = newSate;
    this.forceUpdate();
  }

  componentDidMount() {}

  componentWillMount() {}

  componentWillUnmount() {}
}
