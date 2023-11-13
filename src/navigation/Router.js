import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Chat, OrderScreen, PromoScreen} from '../screens';
import {Home2, LocationDiscover, Receipt21, ProfileCircle, DiscountShape, DocumentText1, Message2} from 'iconsax-react-native'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: {color:"blue"},
        tabBarInactiveTintColor: {color:"green"},
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({focused}) => (
            <Home2
              color="green"
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PromoScreen"
        component={PromoScreen}
        options={{
          tabBarLabel: 'PromoScreen',
          tabBarIcon: ({focused}) => (
            <DiscountShape
              color="green"
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarLabel: 'OrderScreen',
          tabBarIcon: ({focused}) => (
            <DocumentText1
              color="green"
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused}) => (
            <Message2
              color="green"
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};
export default Router;