import React,{useState, } from 'react';
import Modal from 'react-native-modal';
import { TouchableOpacity, } from 'react-native';
import {View, Text} from '../components/Themed';

const TopModal = ({isTopModal, setIsTopModal, }) => {

	return(
	  <Modal
	  	isVisible={isTopModal}
	  	onBackdropPress={()=>setIsTopModal(false)}
	  	animationIn="slideInDown"
	  	animationOut="slideOutRight"
	  	backdropOpacity={0.3}
	  	style={{
	  		// flexDirection: 'row-reverse'
	  		position: 'absolute',
	  		top: -25,
	  		right: -20,
	  		// justifyContent: ''
	  	}}
	  >
		<View darkColor="#333" style={{
			width: 200,
			padding: 10,
		}}>
		  <TouchableOpacity 
		  	style={{padding: 10,}}>
		    <Text > Settings </Text>
		  </TouchableOpacity>
		  <TouchableOpacity 
		  	style={{padding: 10,}}>
		    <Text > Watch on TV </Text>
		  </TouchableOpacity>
		  <TouchableOpacity 
		  	style={{padding: 10,}}>
		    <Text > Terms & privacy policy </Text>
		  </TouchableOpacity>
		  <TouchableOpacity 
		  	style={{padding: 10,}}>
		    <Text> Help & feedback </Text>
		  </TouchableOpacity>
		</View>
	  </Modal>
	);
}

export default TopModal;
