import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import EmployeesScreen from "../screens/Employees/EmployeesScreen";
import LeaveScreen from "../screens/Leaves/LeaveScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {

  return (

    <Tab.Navigator>

      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Salariés"
        component={EmployeesScreen}
      />

      <Tab.Screen
        name="Congés"
        component={LeaveScreen}
      />

      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
      />

    </Tab.Navigator>

  );
}
