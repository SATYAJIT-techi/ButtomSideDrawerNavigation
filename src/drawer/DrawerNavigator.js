import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';
import Primary from '../drawerdetails/Primary';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: true}}
        // true for showing the default three line for the drawer nativagation
      />
      <Drawer.Screen
        name="Primary"
        component={Primary}
        options={{headerShown: true}}
      />

      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
