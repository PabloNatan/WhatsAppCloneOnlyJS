import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';   
import TopTabNavigator from "./TopTabNavigator";
import Colors from '../constants/Colors';
import { View } from 'react-native';
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

export default function Navigation() {

    const MainTab = createStackNavigator();

    return (
        <NavigationContainer>
            <MainTab.Navigator 
                screenOptions={{
                    headerStyle: { 
                        backgroundColor: Colors.light.tint,
                        shadowOffset: 0,
                        elevation: 0,
                    },
                    headerTintColor: Colors.light.background,
                    headerTitleAlign: 'left',
                    headerTitleStyle: {
                        fontWeight: '800'
                    }
                }}
            >
                <MainTab.Screen 
                    name="Root"
                    title="WhatsApp" 
                    component={TopTabNavigator}
                    options={{
                        title: "WhatsApp",
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between', marginRight: 10}}>
                                <Octicons name="search" size={22} color={'white'}/>
                                <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'}/>
                            </View>

                        )
                    }}
                  
                />
            </MainTab.Navigator>
        </NavigationContainer>
    )
}