import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
`;

const RestaurntInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Baratiea",
    icon,
    photos = ["https://images6.alphacoders.com/618/618290.png"],
    address = "100 random  street",
    isOpenNow,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;

  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          style={styles.cover}
          key={name}
          source={{ uri: photos[0] }}
        />
        <Title>{name}</Title>
      </Card>
    </View>
  );
};

export default RestaurntInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
