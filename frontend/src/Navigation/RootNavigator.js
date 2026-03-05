import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

export default function RootNavigator() {

  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {

    const checkToken = async () => {

      const token = await AsyncStorage.getItem("access_token");

      if (token) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }

    };

    checkToken();

  }, []);

  if (isLogged === null) return null;

  return (

    <NavigationContainer>

      {isLogged ? <AppNavigator /> : <AuthNavigator />}

    </NavigationContainer>

  );
}
