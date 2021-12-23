import React, { Component } from "react";
import { View, Animated, Text, Image, PanResponder } from "react-native";
import { Card, Button } from "react-native-elements";

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log("hi");
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    });
    this.state = { PanResponder, position };
  }
  renderCard(item) {
    return (
      <Card>
        <Card.Image source={{ uri: item.uri }} />
        <Card.Title>{item.text}</Card.Title>

        <Text style={{ marginBottom: 10 }}>
          i can customize the card further
        </Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderCards() {
    return this.props.data.map((item) => {
      return this.renderCard(item);
    });
  }
  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.PanResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;
