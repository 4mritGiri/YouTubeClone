import React,{useState, useRef, } from 'react';
import { StyleSheet, Platform, Image, ImageBackground, TouchableOpacity, useColorScheme, ScrollView, DrawerLayoutAndroid, FlatList, Button, Dimensions} from 'react-native';
import { Ionicons, Octicons, FontAwesome,Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Modal from "react-native-modal";

import { useNavigation } from '@react-navigation/native';


import { formatViews } from './../../commons/numbers';
import { Text, View } from '../../components/Themed';
// import { ShortsVideo } from './../../data/database';

const deviceWidth  = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function Shorts({ShortsVideo}) {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#282828' : '#fff';
  const [activeCategory, setActiveCategory] = useState('All');
  const navigation = useNavigation();

  return (
  <View>
  <View style={styles.container}>
    <View style={{
    	flexDirection: 'row',
    	alignItems: 'center',
    }}>
       <Image 
       		style={{
       			// tintColor: '',
       			height: 37,
       			width: 37,
       		}}
       		source={require('./../../assets/icons/yt-shorts.png')}/>
       	<Text style={{
       		fontSize: 20,
       		fontWeight: '900',
       	}}> Shorts </Text>
    </View>
  </View>
        <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
           data={ShortsVideo}
           renderItem={(item) =><ShortCards item={item.item} color={color}/>}
           keyExtractor={item=>item.id}/>
   </View>
  );
}

const ShortCards = ({item, color}) =>{
  const [modalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();
   const transprant = 'rgba(0,0,0,0.0)';
   const bg = colorScheme==='light'? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.1)';

   const toggleModal = () =>{
   	 setModalVisible(!modalVisible)
   }
	return(
	<View>
	 <View style={{
	 	paddingHorizontal: 7,
	 	// position: 'absolute',
	 }}>
	   <ImageBackground
	   	  source={{uri: item.image}}
	   	  imageStyle={{
	   	  	borderRadius: 8,
	   	  	backgroundColor: bg,
	   	  }}
	   	  style={{
	   	  	width: deviceWidth/2.37,
	   	  	height: deviceHeight/2.9,
	   	  }} >
	   	 <View style={{
	   	 	flex:1,
	   	 	flexDirection: 'column',
	   	 	justifyContent: 'space-between',
	   	 	backgroundColor: transprant,}}>
	   	 <TouchableOpacity
	   	 	onPress={toggleModal}
	   	 	style={{
	   	 		flexDirection: 'row-reverse',
	   	 		padding: 5,
	   	 	}}>
	   	 <Ionicons
	   	 	name="ellipsis-vertical" size={18} color='#fff' />
	   	</TouchableOpacity>
	   <View style={{
	   	width: deviceWidth/2.37,
	   	backgroundColor: transprant,
	   	
	   }}>
	  <Text style={{
	    width: '100%',
	    color: '#fff',
	  }}> {item.title} </Text>
	   <Text style={{color: '#fff'}}> {formatViews(item.views)} Views</Text>	  
	  </View>
	  </View>
	  </ImageBackground>
	 </View>
	 
	 <Modal
	 	isVisible={modalVisible}
	 	backdropOpacity={0.4}
	 	style={{
	 		justifyContent: 'flex-end',
	 		marginHorizontal: 5,
	 		margin:4,
	 	}}
	 	onBackdropPress={()=>setModalVisible(false)}>
	         <Modals toggleModal={toggleModal} color={color}/>
	       </Modal>
	     <StatusBar style="auto" backgroundColor={colorScheme==='light'?'white':'black'}/>
	 </View>
	);
}

const Modals = ({toggleModal, color}) => {

	return(
	 <View lightColor="#eee" darkColor="#444" style={{
	 		justifyContent: 'flex-end',
			borderRadius:15,
	 		// paddingBottom: 5,
	 		}}>
	     <View lightColor="#eee" darkColor="#444" style={{borderRadius: 15}}>
	       <TouchableOpacity
	       		onPress={toggleModal}
	       		style={{alignItems: 'center',}}>
	     	<Text style={{
	     		backgroundColor: '#999',
	     		height: 5,
	     		width: 80,
	     		borderRadius: 50,
	     	}}> </Text>
	       </TouchableOpacity>
	      <View lightColor="#eee" darkColor="#444" style={{
	      		padding: 20,
	      		borderRadius: 15,
	      }}>
	       <TouchableOpacity style={{flexDirection: 'row',padding: 10}}>
	         <Ionicons name="flag-outline" size={24} color={color} />
	         <Text style={{
	             fontSize: 18,
	             fontWeight: '600',
	             paddingLeft: 20,
	        }}> Report</Text>
	       </TouchableOpacity>
	       <TouchableOpacity style={{flexDirection: 'row',padding: 10}}>
	         <Entypo name="block" size={24} color={color} />
	         <Text style={{
	              fontSize: 18,
	              fontWeight: '600',
	              paddingLeft: 20,
	          }}> Not intrested </Text>
	       </TouchableOpacity>
	       <TouchableOpacity style={{flexDirection: 'row',padding: 10}}>
	          <MaterialCommunityIcons name="message-alert-outline" size={24} color={color} />
	          <Text style={{
	          	fontSize: 18,
	          	fontWeight: '600',
	          	paddingLeft: 20,
	          }}> Send feedback </Text>
	       </TouchableOpacity>
	      </View>
	     </View>
	</View>
	)
}


     //  <EditScreenInfo path="app/(tabs)/index.tsx" />
const styles = StyleSheet.create({
  container: {
  	padding:0,
  	
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    padding: 10,
  },
  notifications: {
  	position: 'absolute',
  	backgroundColor: '#ff0000',
  	borderRadius: 100,
  	height: 18,
  	width: 20,
  	top: 9,
  	right: 3,
  	fontSize: 14,
  	alignItems: 'center',
  	justifyContent: 'center',
  	// padding: 2,
  },
  active: {
  	color: '#282828',
  },
  navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
});
