import React,{useState, } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, ScrollView, Pressable, TouchableOpacity, useColorScheme, } from 'react-native';
import { Entypo, Feather, MaterialIcons, Ionicons, } from '@expo/vector-icons'; 

import {formatViews} from '../commons/numbers';
import { Text, View } from './../components/Themed';

import Subscribe from '../components/videos/Subscribe';
import Reaction from '../components/videos/Reaction';
import Comments from '../components/videos/Comments';
import { CategorieMap } from '../components/home/Categories';
import Videos from '../components/home/Videos';
import { RecommendedContents, VIDEOS, } from '../data/database';

import { useRoute, useNavigation, } from '@react-navigation/native';

const transprant="rgba(0,0,0,0.0)";

const  VideoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  
  const { id, channelName, title, thumbnail, views, likes, comments, avatar, duration, publishedDate} = route.params;
  const colorScheme = useColorScheme();
  const color = colorScheme==='light'? '#282828' : '#eee';
  

  const [activeCategory, setActiveCategory] = useState('All');
  const [functon, setFuncton] = useState(false);

 const handleFunctions = () =>{
 	setFuncton(!functon)
 }
  
  return (
    <View style={styles.container}>
     <Pressable
       onPress={handleFunctions}
     >
      <Image 
      	style={{
      		width: '100%',
      		height: 289,
      	}}
      	source={{
      	  uri: thumbnail,
      }}/>
	 </Pressable>
	 {functon&&(
	 <View style={{
	 	position: 'absolute',
	 	// position: 'relative',
	 	backgroundColor: transprant,
	 	zIndex: 999,
	 	top: 40,
	 	// bottom: 100,
	 }}>
	  <View style={{
	  	flexDirection: 'row',
	  	justifyContent: 'space-between',
	  	alignItems: 'center',
	  	position: 'relative',
	  	paddingHorizontal: 10,
	  	backgroundColor: transprant,
	  	
	  }}>
	  <TouchableOpacity style={{
	  	backgroundColor: transprant,
	  	padding:10,
	  }}
	  onPress={()=> navigation.goBack()}>
	   <Entypo name="chevron-down" size={24} color={color} />
	   </TouchableOpacity>
	   <Icons props={[
	   	{
	   	 icon: 'cast',
	   	 name: 'cast',
	   	 provider: Feather,
	   	},
		{
         icon: 'closed-caption-off',
         active: 'color-caption',
         name: 'caption',
         provider: MaterialIcons,
        },
        {
         icon: 'ios-settings-outline',
         name: 'settings',
         provider: Ionicons,
        },
	   ]} color={color}/>
	  </View>
	 </View>
	 )}
      <View style={{
      	position: 'relative',
      	bottom: 1,
      	zIndex: 999,
      	backgroundColor: 'gray',
      	height: 2,
      }}>
       <Text style={{
       	backgroundColor:functon?'red': '#fff',
       	width: '25%',
       }}></Text>
      </View>
      <ScrollView>
      <Text style={styles.title}>{title}</Text>		
      <Text style={{
      	  color: 'gray',
      	  paddingTop: -5,
      	  paddingHorizontal: 10,
      }}>{formatViews(views)} views {publishedDate} <Text>...more</Text> </Text>
      <Subscribe channelName={channelName} avatar={avatar} />
      <Reaction
		likes={likes}
      />
      <Comments comments={comments} />
	  <ScrollView horizontal>
      <CategorieMap
         RecommendedContents={RecommendedContents}
         activeCategory={activeCategory}
         setActiveCategory={setActiveCategory}
      />
      </ScrollView>
      <Videos Video={VIDEOS} />
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
    </View>
  );
}

const Icons = ({color, props, }) => {

	return(
	 <>
	  <View style={{
         flexDirection: 'row',
         alignItems: 'center',
         backgroundColor: transprant,
       }}>
       {
       	props.map((data, index)=>{
       	 const Provider = data.provider;
		 const [caption, setCaption] = useState(false);

       	 const handleAction =()=>{
       	 	if(data.name === 'cast'){
       	 	  // 
       	 	}else if(data.name === 'caption'){
       	 		setCaption(!caption)
       	 		
       	 	}else if(data.name === 'settings'){
       	 		
       	 	}
       	 }
       	 const isActive = caption? data.active: data.icon;
       	  return(  	
         <TouchableOpacity
         	key={index}
         	onPress={handleAction}
         	style={{
         		padding: 5
         	}}
         >
           <Provider name={isActive} size={24} color={color}/>
         </TouchableOpacity>
       	  )
       	})
       }
       </View>	
	 </>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
  	fontSize: 19,
  	fontWeight: 'bold',
  	padding: 10,
  }
});


export default VideoScreen;
