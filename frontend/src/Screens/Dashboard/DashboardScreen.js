import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DashboardScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Dashboard RH</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Employees")}
      >
        <Text style={styles.cardText}>👥 Salariés</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("LeaveRequest")}
      >
        <Text style={styles.cardText}>📅 Demande de congés</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.cardText}>👤 Profil</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center"
  },

  card: {
    backgroundColor: "#2563eb",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  cardText: {
    color: "white",
    fontSize: 18,
    textAlign: "center"
  }

});
