import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function AbsenceScreen() {

  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [motif, setMotif] = useState("");

  const handleDemande = () => {
    console.log(dateDebut, dateFin, motif);
  };

  return (
    <View style={styles.container}>

      <Header title="Demande d'absence" />

      <Input
        placeholder="Date début"
        value={dateDebut}
        onChangeText={setDateDebut}
      />

      <Input
        placeholder="Date fin"
        value={dateFin}
        onChangeText={setDateFin}
      />

      <Input
        placeholder="Motif"
        value={motif}
        onChangeText={setMotif}
      />

      <Button
        title="Envoyer la demande"
        onPress={handleDemande}
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
