import React,{useEffect, useState, } from 'react';
import { StyleSheet, Platform, ScrollView, BackHandler, Alert, useColorScheme,} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text, View } from '../../components/Themed';

import Header from './../../components/home/Header';
import Search from	'./../../commons/Search';
import Shorts from './../../components/home/Shorts';
import Videos from './../../components/home/Videos';

import Categories from './../../components/home/Categories';
import { ShortsVideos, VIDEOS } from './../../data/database';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
/*
  useEffect(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);
  
*/
  const [toggleSearch, setToggleSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  return (
  
    <View style={styles.container}>
	{
	 toggleSearch?
	 (
	 <>
	   <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
	 </>	
	 ):
	 (
	 <>	 	
        <Header toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
	    <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
	<ScrollView>
        <Videos Video={VIDEOS.slice(0,1)} />
        <Shorts ShortsVideo={ShortsVideos.slice(0,9)} />
        <Videos Video={VIDEOS} />
	</ScrollView>
	</>
	 )
	}
	<StatusBar style="auto" backgroundColor={colorScheme==='light'?'white':'black'} />
    </View>
  );
}

     //  <EditScreenInfo path="app/(tabs)/index.tsx" />
const styles = StyleSheet.create({
  container: {
    flex: 1,
     paddingTop: Platform.os==='ios'?0:29,
  },
});
