import React, {useState, } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '../../components/Themed';
import Header from './../../components/shorts/Header';
import ShortsVideo from './../../components/shorts/ShortsVideo';
import { ShortsVideos } from './../../data/database';
import Search from './../../commons/Search';

export default function ShortsScreen() {
  const [ toggleSearch, setToggleSearch ] = useState(false);
  return (
    <View style={styles.container}>
      {
		toggleSearch?
			   <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
		:(
		<>		
	       <Header toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
	      <View>
	        <ShortsVideo video={ShortsVideos} />
	      </View>
	    </>
		)      	
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.0)'
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  
});
