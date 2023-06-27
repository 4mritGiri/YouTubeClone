import React,{useState, useRef, } from 'react';
import { StyleSheet, Platform,Image, TouchableOpacity, useColorScheme, ScrollView, DrawerLayoutAndroid, SafeAreaView, Dimensions, } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { StatusBar } from 'expo-status-bar';

// import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from './../components/Themed';

const deviceWidth  = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const DrawerNav = ({modalVisible,setModalVisible,}) => {
  const colorSchema= useColorScheme();
   const color = colorSchema === 'light'? '#282828' : '#fff';
	return(
	 <Modal
	 	animationIn="slideInLeft"
	 	animationOut="slideOutLeft"
	 	swipeDirection="right"
	 	scrollHorizontal={true}
	 	onBackdropPress={()=>setModalVisible(false)}
	 	backdropOpacity={0.4}
	 	isVisible={modalVisible}
	 	style={{
	 		margin: 0,
	 		zIndex: 999,
	 	}}
	 >
	 	<View style={{
	 		width: 280,
	 		height: '100%',
	 	}}>
	 	  <View>
	 	    <View style={{
	 	    	paddingTop: 10
	 	    }}>
	 	     <Image source={
	 	     		colorSchema==='light'?
	 	     			require(`./../assets/logo/yt-w-logo.png`)
	 	     		 :  require(`./../assets/logo/yt-b-logo.png`)
	 	     	 }
	 	     	style={{
	 	     	height: 60,
	 	     	width: 100,
	 	     	marginLeft: 15,
	 	     	// tintColor: color,
	 	     	}}
	 	     />
	 	    </View>
	 	    <Nav
	 	    	 Icons={[
	 	    	 	{
	 	    	 	  title: "Trending",
	 	    	 	  icon: "local-fire-department",
	 	    	 	  provider: MaterialIcons,
	 	    	 	},
					{
                      title: "Music",
                      icon: "musical-note-outline",
                      provider: Ionicons,
                    },
					{
                      title: "Live",
                      icon: "radio",
                      provider: Feather,
                    },
					{
                      title: "Gaming",
                      icon: "md-game-controller-outline",
                      provider: Ionicons,
                    },
					{
                      title: "News",
                      icon: "newspaper-outline",
                      provider: Ionicons,
                    },
					{
                      title: "Sports",
                      icon: "Trophy",
                      provider: AntDesign,
                    },
 					{
                       title: "Learning",
                       icon: "lightbulb-outline",
                       provider: MaterialIcons,
                     },
					 {
                      title: "Fashion & Beauty",
                      icon: "hanger",
                      provider: MaterialCommunityIcons,
                    },
	 	    	 ]} 
	 	       color={color}
	 	    />
	 	    
	 	  </View>
	 	</View>	 		
	 	<StatusBar style="auto" backgroundColor={colorSchema==='light'?'white':'black'} />
	 </Modal>
	);
}

const Nav = ({Icons, color}) =>{
  // const Icon = prop;
	return(
	<>
	{
	 Icons.map((item, index) => {
	 	const Provider = item.provider;
	  return(
	  <TouchableOpacity 
	  key={index}
	  style={{
	  	padding: 10,
	  	flexDirection: 'row',
	  	alignItems: 'center',
	  }}>
	     {Provider &&<Provider name={item.icon} size={24} color={color} />}
	 	  <Text style={{fontWeight:'600', fontSize: 15, paddingLeft: 10 }}> {item.title} </Text>
	   </TouchableOpacity>
	  )})  
	 }
	</>
	);
}

export default DrawerNav;
