import React,{useState, useRef, } from 'react';
import { StyleSheet, Platform, TouchableOpacity, useColorScheme, Dimensions} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


// import EditScreenInfo from './../components/EditScreenInfo';
import { Text, View } from './../components/Themed';


const deviceWidth  = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const BottomSheet = ({Icons, modalVisible, setModalVisible, color}) =>{
 const colorSchema=useColorScheme();
 
	return(
	 <>
	 <Modal
 		onBackdropPress={()=>setModalVisible(false)}
 		backdropOpacity={0.4}
	 	isVisible={modalVisible}
	 	
	 	style={{
	 	  justifyContent: 'flex-end',
	 	  margin:3,
	 	  marginHorizontal: 6,
	 	}}>
	    <View lightColor="#eee" darkColor="#444" style={{
	    	justifyContent: 'flex-end',
	    	borderRadius: 15,
	    	padding: 10,
	    }}>
	      <View style={{
	      	borderRadius: 20,
	      }}>
	       <Text 
	         onPress={()=> setModalVisible(!modalVisible)}
	       	 style={{
	       	   height: 4,
	       	   width: 60,
	       	   borderRadius: 100,
	       	   marginTop: -7,
	       	    backgroundColor: '#999',
	       	   alignSelf: 'center',
	       }}> </Text>
	       <View lightColor="#eee" darkColor="#444">
	       {
	       	Icons?.map((item, index) =>(
	        <Info key={index}
	        	title={item.title} icon={item.icon} color={color}/>
	       	))
	       }
	       </View>
	      </View>
	    </View>
	    <StatusBar style="auto" backgroundColor={colorSchema==='light'? 'black' : ''} />
	 </Modal>
	 </>
	);
}

const Info = ({title, icon, color}) =>{

	return(
	 <TouchableOpacity 
	 	style={{
	 		flexDirection: 'row',
	 		padding: 10,
	 	}}>
	 	 <MaterialIcons name={icon} size={24} color={color} />
	 	 <Text style={{
	 	 	paddingLeft: 25,
	 	 }}> {title} </Text>
	 </TouchableOpacity>
	);
}


export default BottomSheet;
