import React, { useState, } from 'react';
import {TouchableOpacity, useColorScheme, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { View, Text } from '../../components/Themed';
import BottomSheet from './../../commons/BottomSheet';
import Search from './../../commons/Search';

const Header = ({toggleSearch, setToggleSearch}) =>{
  const [modalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#282828' : '#fff';

	return(
	<>
	 <View style={{
	 	top: 33,
	 	flexDirection: 'row',
	 	alignItems: 'center',
	 	justifyContent: 'space-between',
	 	zIndex: 999,
	 	backgroundColor: 'rgba(0,0,0,0.0)',
	 }}>
	   <Text style={{
	   	fontSize: 23,
	   	fontWeight: 'bold',
	   	padding: 10,
	   	color: '#fff',
	   }}> Shorts </Text>

	   <View style={{
	   	 flexDirection: 'row',
	   	 alignItems: 'center',
	   	 justifyContent: 'center',
	   	 backgroundColor: 'rgba(0,0,0,0.0)',
	   	 paddingRight: 5,
	   }}>
	   
	     <Icon 
	     	name={[
				{
				  icon: 'ios-search',
				  provider: Ionicons,
				},
				{
				  icon: 'camera-outline',
				  provider: Ionicons,
				},
				{
				  icon: 'ios-ellipsis-vertical-sharp',
				  provider: Ionicons,
				},
	     	]}
	     	size={26} 
	     	modalVisible={modalVisible} 
	     	setModalVisible={setModalVisible}
	     	toggleSearch={toggleSearch}
	     	setToggleSearch={setToggleSearch}/>
	   </View>
	 </View>
	 <BottomSheet
	 	Icons={[
	 	  {
	 	  	title: 'Description',
	 	  	icon: 'format-align-left',
	 	  },
	 	  {
	 	  	title: 'Caption ',
	 	  	icon: 'closed-caption-off',
	 	  },{
	 	  	title: "Don't recommend this channel ",
	 	  	icon: "do-not-disturb",
	 	  },{
	 	  	title: 'Report',
	 	  	icon: "outlined-flag",
	 	  },{
	 	  	title: 'Send feedback',
	 	  	icon: 'message',
	 	  }
	 	]}
	 	modalVisible={modalVisible}
	 	setModalVisible={setModalVisible}
	 	color={color}
	 />
	 </>
	);
}

const Icon = ({name, size, color, modalVisible,setModalVisible, toggleSearch, setToggleSearch}) => {
  // const [ toggleSearch, setToggleSearch] = useState(false);
   console.log(toggleSearch)
	return(
	<>
	{
	 name.map((nam, index)=>{
	   const handleModal = () =>{
	    
	   	if(nam.icon === 'ios-ellipsis-vertical-sharp'){
	   	   setModalVisible(!modalVisible)	
	   	}else if(nam.icon === 'ios-search'){
	   	    setToggleSearch(true);	
	   	}else{
	   	    console.log(nam.icon)	
	   	}
	   }
	 
   	   const Provider = nam.provider;
	 return(
	 <TouchableOpacity key={index}
	 	onPress={handleModal}
	 	style={{
	 	   paddingLeft: 25,
	 }}>
	   <Provider name={nam.icon} size={size} color='#fff' />
	 </TouchableOpacity>
	   )})
	 }
	 </>
	);
}

export default Header;
