import React from 'react';
import ChatScreen from "../screens/ChatScreen";
import CameraScreen from "../screens/CameraScreen";
import CallsScreen from '../screens/CallsScreen';
import StatusScreen from '../screens/StatusScreen';
import Colors from '../constants/Colors';
import { Fontisto } from '@expo/vector-icons';
import {TabView, SceneMap, TabBar, TabBarItem, TabBarIndicator  } from "react-native-tab-view";
import { Text } from "react-native";


import { View, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar'

const initialLayout = { width: Dimensions.get('window').width };
const widthLabelCamera = initialLayout.width * 0.13;
const widhtLabels = initialLayout.width * 0.29;


export default props  =>  {

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'camera', title: 'Camera'},
    { key: 'chats', title: 'Chats'},
    { key: 'status', title: 'Status'},
    { key: 'calls', title: 'Calls' },
  ]);

  const renderTabBar = props => (
    <TabBar 
        {...props} 

        style={{
             backgroundColor: Colors.light.tint,
             margin: 0,
             padding: 0,
        }}

        tabStyle={{
            width: 'auto',
        }}

        indicatorStyle={{
            backgroundColor: Colors.light.background,
            height: 3,
        }}

        renderLabel={({ route, focused, color }) => (
            route.title !=  'Camera' ?
            <Text style={{ color, marginHorizontal: 4, fontSize: 14, fontWeight: 'bold'}}>
              {route.title.toUpperCase()}
            </Text>: null
        )}

        renderIcon={({ route, focused, color }) => (
            route.title === 'Camera' ?
            <Fontisto name="camera" size={17} color={color} />
            : null
        )}

        renderTabBarItem={props => 
            <TabBarItem 
                {...props}  
                style={{
                    width: props['route']['title'] === 'Camera' ? widthLabelCamera : widhtLabels,
                    padding: 2,
                    margin: 0,
                }}
            />                
        }  


    
    />)

  const renderScene = SceneMap({
    camera: CameraScreen,
    chats: ChatScreen,
    status: StatusScreen,
    calls: CallsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout.width}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

