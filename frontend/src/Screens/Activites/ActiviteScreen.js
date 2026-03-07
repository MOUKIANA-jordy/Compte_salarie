import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../Components/Header";
import Button from "../Components/Button";

export default function ActiviteScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Header title="Activité" />

      <Button
        title="Planning"
        onPress={() => navigation.navigate("Planning")}
      />

      <Button
        title="Absences"
        onPress={() => navigation.navigate("Absence")}
      />

      <Button
        title="Pointage virtuel"
        onPress={() => navigation.navigate("Pointage")}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  }

});
