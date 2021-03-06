import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
          laboriosam. Ipsa veniam fugit libero hic, quaerat, ab, officia
          nesciunt temporibus quis suscipit consequuntur ullam nihil totam
          blanditiis iste accusantium repellat?
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: "auto" }}>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memoHeader: {
    backgroundColor: "#467fd3",
    height: 96,
    justifyContent: "center",
    paddingHorizontal: 19,
    paddingVertical: 24,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
});
