import React,{useState, } from 'react';
import {TouchableOpacity, } from 'react-native';
import { Feather, MaterialIcons, Ionicons, } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import CastModal from './../../commons/CastModal';
import TopModal from './../../commons/TopModal';

import {View, Text, } from './../Themed';

const Header = ({toggleSearch, setToggleSearch, modalVisible, setModalVisible, }) => {
  const navigation = useNavigation();
  const [isCast, setIsCast] = useState(false);
  const [isTopModal, setIsTopModal] = useState(false);
  
	return(
	 <View style={{
	 	 flexDirection: 'row',
	 	 alignItems: 'center',
	 	 justifyContent: 'space-between',
	 	 padding: 15,
	 }}>
	   <View style={{
	   	flexDirection: 'row',
	   	alignItems: 'center',
	   }}>
	      <TouchableOpacity
	      		style={{padding: 10}}
	      		onPress={()=> navigation.goBack()}>
			 <MaterialIcons name="keyboard-backspace" size={24} color="#999" />
	      </TouchableOpacity>
	      <Text style={{
	      	fontSize: 20,
	      	fontWeight: '600',
	       }}>Notifications</Text>
	   </View>
	   <View style={{
	   	  flexDirection: 'row',
	   	  justifyContent: 'center',
	   	  alignItems: 'center',
	   }}>
		   <Icons
			  props={[
			  	{
			  	  name: 'Cast',
			  	  icon: "cast",
			  	  provider: Feather,
			  	},
			  	{
			  	  name: 'Search',
			  	  icon: "search",
			  	  provider: Feather,
			  	},
			  	{
			  	  name: "3Dot",
			  	  icon: "md-ellipsis-vertical-sharp",
			  	  provider: Ionicons,
			  	},
			  ]}
			  toggleSearch={toggleSearch} 
			  setToggleSearch={setToggleSearch} 
			  isCast={isCast}
			  setIsCast={setIsCast}
			  isTopModal={isTopModal}
			  setIsTopModal={setIsTopModal}
		   	/>
	   </View>
	   
		<CastModal
            isCast={isCast}
            setIsCast={setIsCast} 
         /> 
        <TopModal 
        	isTopModal={isTopModal} 
        	setIsTopModal={setIsTopModal}
        />
	 </View>
	);
}

const Icons = ({
		props, 
		toggleSearch, 
		setToggleSearch, 
		modalVisible, 
		setModalVisible, 
		isCast, 
		setIsCast,
		isTopModal,
		setIsTopModal,
	}) => {

	return(
	  <>
	  {
	    props.map((data, index) => {
		  const Provider = data.provider;

		   const handlePress = () =>{
			  if(data.name==="Cast"){
			  	setIsCast(!isCast);
			  }else if(data.name==="Search") {
			  	 setToggleSearch(true);
			  }else {
			  	setIsTopModal(!isTopModal)
			  }
		   }
	    	return(
	    	  <TouchableOpacity
	    	  		style={{
	    	  			padding: 10,
	    	  		}}
	    	  		key={index}
	    	  		onPress={handlePress}
	    	  >
	    	     <Provider name={data.icon} size={24} color="#999" />
	    	  </TouchableOpacity>
	    	);
	    })
	  }
	  </>
	)
}

export default Header;
