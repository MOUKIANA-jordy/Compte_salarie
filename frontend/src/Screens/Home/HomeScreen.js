import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../Components/Header";
import Button from "../Components/Button";

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Header title="Accueil StaffHub" />

      <Button
        title="Mon dossier"
        onPress={() => navigation.navigate("Dossier")}
      />

      <Button
        title="Activité"
        onPress={() => navigation.navigate("Activite")}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  }

});
