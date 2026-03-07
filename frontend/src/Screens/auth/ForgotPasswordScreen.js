import React, { useState } from "react";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function ForgotPasswordScreen() {

  const [email, setEmail] = useState("");

  const handleSend = () => {
    console.log("Email envoyé à :", email);
  };

  return (
    <View style={styles.container}>

      <Header title="Mot de passe oublié" />

      <Text style={styles.text}>
        Entrez votre email professionnel
      </Text>

      <Input
        placeholder="email@staffhub.com"
        value={email}
        onChangeText={setEmail}
      />

      <Button
        title="Envoyer le lien"
        onPress={handleSend}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff"
  },

  text: {
    textAlign: "center",
    marginBottom: 20
  }

});
