import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";
import RestaurntInfoCard from "../components/restaurant-info-card";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  // this fixes the height problem on IOS
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: #bbecf7;
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="search..." />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurntInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
