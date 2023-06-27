import React,{useState, } from 'react';
import { ActivityIndicator, TouchableOpacity, useColorScheme, Dimensions} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from './../components/Themed';


const deviceWidth  = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const CastModal = ({isCast, setIsCast}) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? "#333" : '#eee'

  
	return(
	 <Modal
	 	isVisible={isCast}
	 	// animationIn="fedeIn"
	 	onBackdropPress={()=> setIsCast(false)}
	 	backdropOpacity={0.4}
	 	style={{
	 		justifyContent: 'center',
	 		margin: 20,
	 	}}
	 >
	   <View darkColor="#222" 
	   	style={{
	   		justifyContent: 'center',
	 		width: deviceHeight*0.42,
	   		borderRadius: 3,
	   		padding: 20,
	   }}>
	    
	       <Text lightColor="#111" darkColor="#ccc" style={{
	       		fontSize: 20,
	       		fontWeight: '500',
	       }}> Connect to device </Text>

	     <View darkColor="#222" 
	     	style={{
	     		padding: 5,
	     	}}>
	      	<TouchableOpacity style={{
	      		flexDirection: 'row',
	      		alignItems: 'center',
	      		padding: 10,
	      	}}>
	      		<ActivityIndicator animating={true} color="#07a" hidesWhenStopped={true} />
	      		<Text darkColor="#ccc" 
	      		style={{
	      			// fontSize: ,
	      			paddingLeft: 6,
	      		}}> Searching for devices </Text>
	      	</TouchableOpacity>
	      	<Icons services={[
	      		{
	      		  icon: 'monitor-cellphone',
	      		  title: "Link with TV code",
	      		  provider: MaterialCommunityIcons,
	      		},
				{
	      		  icon: 'alert-circle',
	      		  title: "Learn more",
	      		  provider: Feather,
	      		},
	      	]} color={color}/>
	      </View>
	   </View>
	 </Modal>
	);
}

const Icons = ({services, color})=>{

	return(
	<>
	  {
	  	services.map((data, index) =>{
		  const Provider = data.provider;
	  		return(	  			
		   	<TouchableOpacity key={index} style={{
		   		flexDirection: 'row',
		   		alignItems: 'center',
		   		padding: 10,
		   	}}>
		   		<Provider style={{paddingRight: data.icon? 0 : 20}} name={data.icon} size={18} color={color} />
		   		<Text darkColor="#ccc" 
		   		style={{
		   			paddingLeft: 10,
		   		}}>{data.title} </Text>
		   	</TouchableOpacity>
	  		)
	  	})
	  }
	  </>
	);
}
export default CastModal;
