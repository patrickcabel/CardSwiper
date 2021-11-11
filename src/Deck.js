import React, { Component } from "react";
import { View, Animated, Text } from "react-native";

class Deck extends Component {
  renderCard(item) {
    return <Text>{`${item.text} Water`}</Text>;
  }

  renderCards() {
    return this.props.data.map((item) => {
      return this.renderCard(item);
    });
  }
  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
