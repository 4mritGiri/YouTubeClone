import React,{useState, useRef, } from 'react';
import { StyleSheet, Platform, Image, ImageBackground, TouchableOpacity, useColorScheme, ScrollView,FlatList, Dimensions, Pressable, SectionList} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";

import { useNavigation } from '@react-navigation/native';

import { Text, View } from '../../components/Themed';
import EditScreenInfo from '../../components/EditScreenInfo';

import BottomSheet from './../../commons/BottomSheet';
import { formatViews } from './../../commons/numbers';


const deviceWidth  = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function Videos({ Video }) {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#282828' : '#fff';
  const [activeCategory, setActiveCategory] = useState('All');

  const navigation = useNavigation();

  return (
	<View style={{marginVertical: 15}}>
	{
      Video.map((item,) => <VideoCard key={item.id} item={item} color={color} navigation={navigation}/>)
	}
	{/*
	  <FlatList
	  	data={Video}
	  	renderItem={({item}) => <VideoCard item={item} color={color} navigation={navigation}/>}
	  	keyExtractor={item => item.id}/>
	 */}
	</View>
  );
}


const VideoCard = ({ item, color, navigation }) =>{
  const [mute, setMute] = useState(false);
  const [caption, setCaption] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
  	  setModalVisible(!modalVisible);
  }

   const handlePress = () => {
       navigation.navigate('VideoScreen', {
 			 id: item.id,
             title: item.title,
             channelName: item.channelName,
             thumbnail: item.thumbnail,
             views: item.views,
             likes: item.likes,
             comments: item.comments,
             avatar: item.avatar,
             duration: item.duration,
             publishedDate: item.publishedDate,
       });
     };
	return(
	<>
	 <View  style={{
	 	marginVertical: 10,
	 }}>
	  <Pressable
	 	  onPress={handlePress}
	  >
	 	<ImageBackground
	 		source={{uri: item.thumbnail}}
	 		style={{
	 			height: deviceHeight/3.62,
	 			width: deviceWidth,
	 		}}>
	 	 <View
	 	  	style={{
	 	  		flexDirection: 'column',
	 	  		alignItems: 'flex-end',
	 	  		backgroundColor: 'rgba(0,0,0,0.0)',
	 	  		paddingRight: 5}}
	 	 >
	 	  <TouchableOpacity
	 	      onPress={()=> setMute(!mute)}
	 	  	  style={{
	 	  	  	padding: 8,
	 	  	  	backgroundColor:'rgba(0,0,0,0.2)',
	 	  	  	borderRadius: 100,}}
	 	  	>
	 	    <MaterialIcons name={mute?"volume-up":"volume-off"} size={24} color="#fff" />
	 	    </TouchableOpacity>
	 	    <TouchableOpacity
	 	    	onPress={() => setCaption(!caption)}
	 	    	style={{
	 	    		padding: 8,
	 	    		marginTop: 1,
	 	    		backgroundColor:'rgba(0,0,0,0.2)',
	 	    		borderRadius: 100, }}>
	 	    <MaterialIcons name={caption?"closed-caption" : "closed-caption-off"} size={24} color="#fff" />
	 	  </TouchableOpacity>
	 	 </View>
	 	</ImageBackground>
	 	</Pressable>
		<Text style={{
			alignSelf: 'flex-end',
			marginTop: -30,
			color: '#fff',
			backgroundColor: 'rgba(0,0,0,0.6)',
			marginRight: 5,
			borderRadius: 5,
		}}> {item.duration} </Text>
	    <View style={{
	    	// flex: 1,
	    	flexDirection: 'row',
	    	justifyContent: 'space-between',
	    	// alignItems: 'center',
	    	marginTop: 10,
	    	width: '98%',
	    }}>
	      <TouchableOpacity style={{
	      	height: 40,
	      	width: 40,
	      	padding: 5,
	      	
	      }}>
	        <Image
	        	source={{uri: item.avatar}}
	        	style={{
	        	  height: '100%',
	        	  width: '100%',
	        	  resizeMode: 'cover',
	        	  backgroundColor: '#525252',
	        	  borderRadius: 100,
	        	}} />
	      </TouchableOpacity>
	      <View style={{
	      	width: '85%'
	      }}>
	        <Text style={{fontSize: 14, fontWeight: '700'}}> {item.title} </Text>
	      
	        <Text style={{
	        	color: '#aaa'
	        }}> {item.channelName} • {formatViews(item.views)} Views • {item.publishedDate}</Text>
	      </View>
	      <TouchableOpacity
	        onPress={toggleModal}
	      	style={{
	      		// width: '3%',
	      		padding: 5,
	      	}}>
		    <Ionicons name="ellipsis-vertical" size={16} color={color} />
		  </TouchableOpacity>
	   </View>
	 </View>
	<BottomSheet
		Icons={[
			{
			  title: "Save to Watch later", 
			  icon:"access-time",
			},
			{
              title: "Save to playlist",
              icon: "playlist-add",
            },
 			{
               title: "Download video",
               icon: "file-download",
             },
			 {
              title: "Share",
              icon: "share",
            },
			{
              title: "Not interested",
              icon: "do-not-disturb",
            },
			{
			  title: "Don't recommend channel",
			  icon: "do-not-disturb",
			},
			{
			  title: "Report",
			  icon: "outlined-flag",
			}
		]}
		modalVisible={modalVisible}
		setModalVisible={setModalVisible}
		color={color}
	/>
	 </>
	);
}
