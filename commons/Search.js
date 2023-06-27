import React,{useState,} from 'react';
import { Text, View } from './../components/Themed';
import { StyleSheet,TouchableOpacity, TextInput, useColorScheme, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import {Ionicons, Feather, EvilIcons, } from '@expo/vector-icons';

import { SearchSuggestion } from './../data/database';

const Search = ({toggleSearch, setToggleSearch }) => {
  const [text, setText] = useState('');
  const [isMute, setIsMute] = useState(false);
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#555' : '#fff';

	return(
	 <>
	  <Modal
	  	isVisible={toggleSearch}
	  	style={{
	  		margin: 0,
	  	}}
	  >
	   <View style={{
	   	height: '100%',
	   	paddingRight: 10,
	   }}>
	   <View style={{
	   		flexDirection: 'row',
	   		justifyContent: 'space-between',
	   		alignItems: 'center',
	   		paddingHorizontal: 5,
	   		width: '100%'
	   }}>
	     <TouchableOpacity
	     	style={[styles.icon, {width: '10%'}]}
	     	onPress={()=>setToggleSearch(false)}>
	        <Ionicons name="ios-arrow-back" size={24} color={color} />
	     </TouchableOpacity>
	     <TouchableOpacity 
	     	style={[styles.input,{backgroundColor: colorScheme==='light'? '#eee' : 'rgba(55,55,55,0.6)'}]}>
	        <TextInput
	        	autoFocus
	        	placeholder="Search YouTube"
	        	placeholderTextColor={colorScheme==='light'? 'gray' : 'rgba(255,255,255,0.6)'}
	        	onChangeText={setText}
	        	value={text}
	        	style={{
	        		fontSize: 16,
	        		fontWeight: '500',
	        		padding: 4,
	        		paddingHorizontal: 10,
	        	}}
	        />
	     </TouchableOpacity>
	     <TouchableOpacity
	     	onPress={()=>setIsMute(!isMute)}
	     	style={[styles.icon,
	     		{backgroundColor: colorScheme==='light'? '#eee' : 'rgba(55,55,55,0.6)'}]}>
	       <Ionicons name={isMute?"ios-mic":"ios-mic-off"} size={24} color={color} />
	     </TouchableOpacity>
	   </View>
	  <ScrollView showsVerticalScrollIndicator={false}>
	   <View style={{
	   		// marginLeft: 49,
	   }}>
	   {
	   	text&&(
	    <TouchableOpacity style={{
	     		padding: 5,
	     		flexDirection: 'row',
	     		justifyContent: 'space-between',
   		     	alignItems: 'center'
	     }}>
   		        <EvilIcons style={{paddingRight:22,paddingLeft: 5}} name="search" size={24} color={color} />
	     	<Text style={{width: '78%', fontWeight: '600'}}>{text} </Text>
	     	<Feather name="arrow-up-left" size={24} color={color} />
	     </TouchableOpacity>
	   	)
	   }
	   {
	   	SearchSuggestion?
	   	(
	   	 SearchSuggestion.map((data, index) =>{
	   	 const Provider = data.provider;
		   return(
	   	   <TouchableOpacity key={index}
	   	   		style={{
   		     		padding: 5,
   		     		flexDirection: 'row',
   		     		justifyContent: 'space-between',
   		     		alignItems: 'center'
   		     }}>
   		        <Provider style={{paddingRight: data.icon? 22 : 45,paddingLeft: 5}} name={data.icon} size={24} color={color} />
   		     	<Text style={{width: '78%', fontWeight: '600', marginVertical: 5, fontSize: 16,}}>{data.search} </Text>
   		     	<Feather name="arrow-up-left" size={24} color={color} />
   		     </TouchableOpacity>
	   	 )})	
	   	):null
	   }
	   </View>
	   </ScrollView>
	   </View>
	  </Modal>
	 </>
	);
}

const styles=StyleSheet.create({
	icon: {
		padding: 5,
		borderRadius: 100,
	},
	input: {
		width: '76%',
		borderRadius: 100,
	}
})

export default Search;
