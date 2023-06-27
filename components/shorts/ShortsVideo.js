import React, {useState} from 'react';
import { StyleSheet, Image, Pressable, Dimensions, } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Ionicons } from '@expo/vector-icons';

import { Text, View } from '../../components/Themed';
// import { ShortsVideo } from './../../data/database';

const { width, height } = Dimensions.get('window');

const ShortsVideo =({video})=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlay, setIsPlay ] = useState(true);

  const handleChangeIndexValue = ({ index }) => {
	   setCurrentIndex(index);
   };
 

  return (
   <View style={{height: '100%', top: -25}}>
    <SwiperFlatList
      autoplay={isPlay}
      autoplayDelay={5}
      showPagination={true}
      autoplayLoop
      data={video}
       vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({ item, index }) => {
      
        return(
        <>
         <SingleShort isPlay={isPlay} setIsPlay={setIsPlay} item={item} currentIndex={currentIndex} index={index}/>
        </>
         );
       }}
      keyExtractor={(item, index) => index.toString()} />
   </View>
  );
}

const SingleShort = ({item, currentIndex, index, isPlay, setIsPlay}) =>{
	
	return(
	  <View style={{
	  	position: 'relative',
	  	height: height + 1,
	  	width: width,
	  }}>
	    <Pressable 
	    	onPress={() => setIsPlay(!isPlay)}>
		  <Ionicons
		  	style={{
		  		position: 'absolute',
		  		alignSelf: 'center',
		  		bottom: '50%',
		  		zIndex: 999,
		  		padding: isPlay?0: 10,
		  		backgroundColor: 'rgba(0,0,0,0.6)',
		  		borderRadius: 100,
		  	}}
		  	 name={isPlay?null: 'play'} size={24} color="#999" />	      
	      <Image
	      	style={{
	      		height: height,
	      		width: width,
	      		resizeMode: 'cover',
	      	}}
	      	source={{
	      		uri: item.image,
	      	}}/>
	    </Pressable>
	  </View>
	);
}


export default ShortsVideo;
