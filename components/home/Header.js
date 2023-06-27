import React,{useState, useRef, } from 'react';
import { StyleSheet, Platform,Image, TouchableOpacity, useColorScheme, ScrollView, DrawerLayoutAndroid, SafeAreaView, Dimensions, } from 'react-native';
import { Ionicons, Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

import { Text, View } from '../../components/Themed';
import DrawerNav from './../../commons/DrawerNav';
import CastModal from './../../commons/CastModal';
import Categories from './../../components/home/Categories';

import { RecommendedContents } from './../../data/database';

const deviceWidth  = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function Header({toggleSearch, setToggleSearch, modalVisible, setModalVisible,}) {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [activeCategory, setActiveCategory] = useState('All');
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#282828' : '#fff';

  const [isCast, setIsCast] = useState(false);
  
  const navigation = useNavigation();
  
  const toggleModal = () => {
  	setModalVisible(!modalVisible);
  }
  return (
   <>
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
      	  style={{
      	     flexDirection: 'row',
      	     alignItems: 'center',
      }}>
		<Image
			source={
				colorScheme==="light"?
					require('./../../assets/logo/yt-w-logo.png')
				: 	require('./../../assets/logo/yt-b-logo.png')
			}
			style={{
				height: 58,
				width: 100,
			}} />
      </TouchableOpacity>
      <View style={{
      	flexDirection: 'row',
      	alignItems: 'center',
      	justifyContent: 'space-between'
      }}>
        <TouchableOpacity
        	onPress={()=> setIsCast(!isCast)}
        	style={styles.icons}>
           <Feather name="cast" size={24} color={color} />
        </TouchableOpacity>
        <TouchableOpacity
        	onPress={()=> navigation.push('Notifications')}
        	 style={styles.icons}>
           <Ionicons name="ios-notifications-outline" size={24} color={color} />		
           <Text style={styles.notifications}> 9+ </Text>
        </TouchableOpacity>
        <TouchableOpacity
        	onPress={()=> setToggleSearch(!toggleSearch)}
        	 style={styles.icons}>
            <Feather name="search" size={24} color={color} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
            {/*<FontAwesome name="user-circle" size={24} color={color} /> */}
            <Image
            	source={require('./../../assets/logo/lesp.png')}
            	style={{
            		width: 35,
            		height: 35,
            		borderRadius: 100,            		
            	}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
       <DrawerNav
       		modalVisible={modalVisible}
       		setModalVisible={setModalVisible}/>

       <CastModal
       		isCast={isCast}
       		setIsCast={setIsCast} />
   </>
  );
}


const styles = StyleSheet.create({
  container: {
  	paddingLeft:10,
  	marginBottom: -7,
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    padding: 10,
  },
  notifications: {
  	position: 'absolute',
  	backgroundColor: '#ff0000',
  	borderRadius: 100,
  	height: 17,
  	width: 19,
  	top: 10,
  	right: 2,
  	fontSize: 12,
  	color: '#fff',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  active: {
  	color: '#282828',
  },
 
});
