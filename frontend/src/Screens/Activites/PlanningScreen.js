import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../Components/Header";

export default function PlanningScreen() {

  return (
    <View style={styles.container}>

      <Header title="Planning" />

      <Text style={styles.text}>Lundi : 09h00 - 17h00</Text>
      <Text style={styles.text}>Mardi : 09h00 - 17h00</Text>
      <Text style={styles.text}>Mercredi : 09h00 - 17h00</Text>
      <Text style={styles.text}>Jeudi : 09h00 - 17h00</Text>
      <Text style={styles.text}>Vendredi : 09h00 - 17h00</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  text: {
    fontSize: 16,
    marginBottom: 10
  }

});
