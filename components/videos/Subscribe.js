import React,{useState, } from 'react';
import {TouchableOpacity, Image, useColorScheme, } from 'react-native';
import { Ionicons, EvilIcons, } from '@expo/vector-icons';

import { View, Text, } from '../../components/Themed';

import SubNoticModal from '../../commons/SubNoticModal';

const Subscribe = ({avatar, channelName,}) => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [subNotice, setSubNotice] = useState(false);
  const colorScheme = useColorScheme();
  const color= colorScheme==='light'? '#282828':'#eee';

   const handleSub = () => {
   isSubscribe?
   setSubNotice(!subNotice)
   :
   	setIsSubscribe(!isSubscribe);
   	
   }
	return(
	<>
	<View style={{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		
	}}>
	 <View style={{
	 	flexDirection: 'row',
	 	alignItems: 'center',
	 }}>
	  <Image
	   	style={{
	   		width: 40,
	   		height: 40,
	   		// resizeMode: 'cover',
	   		borderRadius: 100,
	   	}}
	  	source={{
	  	  uri: avatar
	  }}/>
	  <TouchableOpacity>
	  	<Text style={{ padding: 10, fontSize: 16}}>
	      { channelName }
	       <Text style={{color:'gray',}}>{' '} 12k</Text>
	     </Text>
	   </TouchableOpacity>
	  </View>
	   <TouchableOpacity
	     onPress={handleSub}
	     style={{
	   	  backgroundColor: isSubscribe?colorScheme==='light'? '#000':'rgba(55,55,55,0.9)': colorScheme==='light'? '#000': '#eee',
	   	  borderRadius: 100,
	   }}>
	      <Text style={{ 
	      		padding: 8,
	      		// fontSize: 18,
	      		color:colorScheme==='light'? '#fff': '#000' ,
	      		paddingHorizontal: 15,
	      }}>{
	      		isSubscribe?(
	      		<>
	      		 <Ionicons name={"notifications-outline"} size={24} color={isSubscribe?colorScheme==='light'?"#000": '#fff' : colorScheme==='light'? '#fff': '#000'} />
	      		 <EvilIcons name="chevron-down" size={26} color={isSubscribe?colorScheme==='light'?"#000": '#fff' :colorScheme==='light'? '#fff': '#000'} />
	      		</>
	      		)
	      		:'Subscribe'} </Text>
	   </TouchableOpacity>

	</View>
	   <SubNoticModal
	   	 subNotice={subNotice}
	   	 setSubNotice={setSubNotice}
	   	 isSubscribe={isSubscribe}
	   	 setIsSubscribe={setIsSubscribe}
	   />
	</>
	);
}


export default Subscribe;
