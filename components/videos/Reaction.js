import React,{useState, } from 'react';
import {TouchableOpacity, useColorScheme, ScrollView, } from 'react-native';
import { Feather, AntDesign, MaterialCommunityIcons, Ionicons, Octicons, FontAwesome, MaterialIcons, } from '@expo/vector-icons';

import {View, Text, } from '../../components/Themed';
import { formatViews } from '../../commons/numbers';

const Reaction =({likes, })=>{
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#282828': '#eee';
  // const [isLike, setIsLike]=useState(false);
  
	return(
	<View style={{
		alignItens: 'center',
	}}>
	 <ScrollView
	   horizontal
	 >
	 
	  <Icons params={[
	  	{
	  	 icon: 'md-chatbubbles-outline',
	  	 title: 'Live chat',
	  	 provider: Ionicons,
	  	},
	  	{
	  	 icon: 'share-outline',
	  	 title: 'Share',
	  	 provider: MaterialCommunityIcons,
	  	},
	  	{
	  	 icon: 'repeat',
	  	 title: 'Remix',
	  	 provider: Feather,
	  	},
	  	{
	  	 icon: 'download',
	  	 title: 'Download',
	  	 provider: Octicons,
	  	},
	  	{
	  	 icon: 'cut',
	  	 title: 'Clip',
	  	 provider: FontAwesome,
	  	},
	  	{
	  	 icon: 'my-library-add',
	  	 title: 'Save',
	  	 provider: MaterialIcons,
	  	},
	  ]}
	  color={color}
	  colorScheme={colorScheme}
	  likes={likes}
	  />
	 </ScrollView>
	</View>
	);
}

const Icons = ({params, color, colorScheme, likes,}) => {
  const [isLike, setIsLike]=useState(false);
  const [isDisLike, setIsDisLike]=useState(false);
  
	return(
	<View style={{
		flexDirection: 'row',
		alignItens: 'center',
		justifyContent: 'center',
	}}>
	<View style={{
		flexDirection: 'row',
		alignItens: 'center',
		justifyContent: 'center',
		backgroundColor: colorScheme==='light'?'rgba(222,222,222,0.7)' : 'rgba(55,55,55,0.6)',
		paddingHorizontal: 10,
		margin: 5,
		borderRadius: 100,
		padding: 5,
	}}>
	<TouchableOpacity 
		onPress={() =>{
			setIsLike(!isLike);
			setIsDisLike(false);
		}}
		style={{
			flexDirection: 'row',
			alignItens: 'center',
			justifyContent: 'center',
		}}>
        <AntDesign name={isLike?"like1": 'like2'} size={18} color={color}/>
        <Text style={{paddingHorizontal: 3}}> { formatViews(isLike? likes + 1 : likes)} </Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() =>{
          	  setIsDisLike(!isDisLike);
          	  setIsLike(false);
          }}
          style={{
            flexDirection: 'row',
            alignItens: 'center',
            justifyContent: 'center',
            paddingHorizontal: 5,
            borderLeftWidth: 0.4,
            borderColor: 'gray',
            marginLeft: 5,
      }}>
        <AntDesign name={isDisLike?"dislike1": "dislike2"} size={18} color={color} />
      </TouchableOpacity>
     </View>
	{
	 params.map((data, index) => {
	  const Provider = data.provider;
	  
	  const handleAction = ()=>{
	  	if(data.title === 'Live chat') {
	  		console.log('Live chat')
	  	}else if(data.title=== 'Share') {
	  		console.log('Share')
	  	}else if (data.title === 'Remix') {
	  		console.log('Remix')
	  	}else if (data.title === 'Download') {
	  		console.log('Download')
	  	}else if (data.title === 'Clip') {
	  		console.log('Clip')
	  	}else if (data.title === 'Save') {
	  		// 
	  	}
	  }
	  
	 	return(
	 	 <TouchableOpacity
	 	    key={index}
	 	    style={{
	 	    	flexDirection: 'row',
	 	    	justifyContent: 'center',
	 	    	paddingBottom: -20,
	 	    	alignItens: 'center',
	 	    	paddingHorizontal: 10,
	 	    	padding: 5,
	 	    	backgroundColor: colorScheme==='light'?'rgba(222,222,222,0.7)' : 'rgba(55,55,55,0.6)',
	 	    	margin: 5,
	 	    	borderRadius: 100,
	 	    }}
			onPress={handleAction}
	 	 >
	 		<Provider name={data.icon} size={18} color={color} />
	 		<Text> {data.title} </Text>
	 	 </TouchableOpacity>
	 	);
	 })
	}
	</View>
	);
}

export default Reaction;
