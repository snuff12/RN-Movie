import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import styled from "styled-components";
import { makeImgPath } from "../utils";
import Poster from "./Poster";

const View = styled.View`
  flex: 1;
`;
const BgImg = styled.Image``;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? "white" : "black")};
`;
const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Column = styled.View`
  width: 40%;
  margin-left: 15px;
`;
const Overview = styled.Text`
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0,0,0,0.6)"};
  margin-top: 10px;
`;
const Votes = styled(Overview)`
  font-size: 12px;
`;

const Slide = ({
  backdrop_path,
  poster_path,
  original_title,
  vote_average,
  overview,
}) => {
  const isDark = useColorScheme() === "dark";

  return (
    <View>
      <BgImg
        source={{ url: makeImgPath(backdrop_path) }}
        style={StyleSheet.absoluteFill}
      ></BgImg>
      <BlurView
        tint={isDark ? "dark" : "light"}
        intensity={80}
        style={StyleSheet.absoluteFill}
      >
        <Wrapper>
          <Poster path={poster_path} />
          <Column>
            <Title isDark={isDark}>{original_title}</Title>
            <Votes isDark={isDark}>⭐️{vote_average}/10</Votes>
            <Overview isDark={isDark}>{overview.slice(0, 100)}...</Overview>
          </Column>
        </Wrapper>
      </BlurView>
    </View>
  );
};
export default Slide;
