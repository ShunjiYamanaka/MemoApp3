import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string, bool, shape } from "prop-types";

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? "!" : ""}`}
      </Text>
    </View>
  );
}

// Helloのpropsの中身を定義
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: "#FFF",
    backgroundColor: "#000",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
