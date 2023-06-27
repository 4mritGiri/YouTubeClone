import React, {useState, } from 'react';
import { Octicons, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, useColorScheme, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

import Create from './Create';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
  	setModalVisible(!modalVisible);
  }

  
  return (
    <Tabs
      screenOptions={{
     // 	tabBarShowLabel: false,
      	headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) =>
          	focused?
         	    <MaterialIcons name="home-filled" size={25} color={colorScheme==="light"? 'black': 'white'} />
          	:   <Image
          	        style={{
          	           height: 25,
          	           width: 25,
          	           padding: 2,
          	           tintColor: colorScheme==="light"? '#444': 'white',
          	         }}
          	        source={require('./../../assets/icons/home-out.png')}/>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Shorts"
      	options={{
           title: 'Shorts',
           tabBarStyle: {
           	backgroundColor: '#000'
           },
           tabBarIcon: ({ color, focused, }) =>
           focused?
                <Image
                	style={{
                		height: 25,
                		width: 25,
                		padding: 2,
                		tintColor:  colorScheme==="light"? '#fff': 'white',
                	}}
                	source={require('./../../assets/icons/short.png')}/>
           : <Image
                style={{
                   height: 25,
                   width: 25,
                   padding: 2,
                   tintColor: colorScheme==="light"? 'black': 'white',
                }}
               source={require('./../../assets/icons/short-out.png')}/>,
        }} />
      <Tabs.Screen name="Create"
        options={{
           title: '',
           tabBarIcon: ({ color, focused, }) =>(
             <Pressable
                onPress={toggleModal }
             >
              <AntDesign
              	style={{
              		borderWidth: 0.5,
              		borderColor: color,
              		borderRadius: 100,
              		padding:2,
              		width: 35,
              		height: 35,
              		alignItems: 'center',
              		justifyContent: 'center'
              	}} name="plus" size={30} color={color} />
              	<Create modalVisible={modalVisible} toggleModal={toggleModal} setModalVisible={setModalVisible}  />
              </Pressable>
              )
        }} />
      <Tabs.Screen
         name="Subscriptions"
         options={{
            title: 'Subscriptions',
            tabBarIcon: ({ color, focused, }) =>
            focused?
              	<Image
              	   style={{
              	      height: 25,
              	      width: 25,
              	      padding: 2,
              	      tintColor: colorScheme==="light"? 'black': 'white',
              	   }}
              	   source={require('./../../assets/icons/sub.png')}/>
            :    <Image
                    style={{
                      height: 25,
                      width: 25,
                      padding: 2,
                      tintColor: colorScheme==="light"? '#444': 'white',
                   }}
                    source={require('./../../assets/icons/sub-out.png')}/>,
         }} />
      <Tabs.Screen
        name="Library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, focused, }) =>
          focused?
          	  <Image
          	       style={{
          	          height: 25,
          	          width: 25,
          	          padding: 2,
          	           tintColor: colorScheme==="light"? 'black': 'white',
          	        }}
          	        source={require('./../../assets/icons/library.png')}/>
         :    <Image
          	      style={{
          	         height: 25,
          	         width: 25,
          	         padding: 2,
          	         tintColor: colorScheme==="light"? '#444': 'white',
          	       }}
          	      source={require('./../../assets/icons/library-out.png')}/>,
        }}
      />
    </Tabs>
  );
}


