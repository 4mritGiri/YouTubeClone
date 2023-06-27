import React, {useState, } from 'react';
import {TouchableOpacity, useColorScheme, Image, TextInput, } from 'react-native';
import {View, Text } from '../Themed';


const Comments =({comments})=> {
  console.log(comments[0].comment);

  const colorScheme = useColorScheme();
  const color = colorScheme==='light'? '#282828' : '#eee';
  
	return(
	<>
	 {
	  comments.length >0 ?(
	   <View style={{
        backgroundColor: colorScheme==='light'? 'rgba(222,222,222,0.6)': 'rgba(55,55,55,0.6)',
        margin: 10,
        borderRadius: 10,
		// height: 80,
		padding: 10,
     }}>
       <Text style={{
           paddingBottom: 10,
       }}> Comments
            <Text style={{
                color: 'gray',
            }}>{" "} { comments.length}</Text>
       </Text>
       <View style={{
       		backgroundColor: colorScheme==='light'? 'rgba(222,222,222,0.6)': 'rgba(55,55,55,0.0)',
       		flexDirection: 'row',
       		alignItems: 'center',
       }}>
         <Image
           source={{uri: comments[0].profileImg}}
           style={{
         	width: 35,
         	height: 35,
         	borderRadius: 100,
         	
           }}/>
           <Text style={{
           		paddingLeft: 5,
           }}> { comments[0].comment}</Text>
       </View>
     </View>	
	  ):(
	 <View style={{
	 	backgroundColor: colorScheme==='light'? 'rgba(222,222,222,0.6)': 'rgba(55,55,55,0.7)',
	 	margin: 10,
	 	borderRadius: 10,
	 	// height: 80,
	 	padding: 10,
	 }}>
	   <Text> Comments 
	   		<Text style={{
	   			color: 'gray',
	   		}}> {' '} { comments.length}</Text>
	   </Text>
	   <View style={{
	   	  backgroundColor: colorScheme==='light'? 'rgba(222,222,222,0.6)': 'rgba(55,55,55,0.7)',
	   	  flexDirection: 'row',
	   	  alignItems: 'center',
	   	  borderRadius: 100,
	   }}>
	   <Image 
	   		source={require('../../assets/logo/lesp.png')}
	   		style={{
	   			height: 35,
	   			width: 35,
	   			padding: 5,
	   		}}
	   />
	   <TextInput 
	   		placeholder="Comments here..."
	   		placeholderTextColor="gray"
	   		style={{
	   			padding: 10,
	   			borderRadius: 100,
	   			height: 40,
	   			width: '93%',
	   			fontSize: 16,
	   			fontWeight: '600',
	   			color: '#ddd',
	   			backgroundColor: colorScheme==='light'? 'rgba(222,222,222,0.6)': 'rgba(55,55,55,0.9)',
	   		}}
	   />
	   </View>
	 </View>
	 )}
	</>
	);
}


export default Comments;
