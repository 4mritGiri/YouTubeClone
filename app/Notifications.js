import React,{useState, } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';

import { Text, View } from './../components/Themed';
import Header from './../components/notification/Header';
import NoticCategories from './../components/notification/NoticCategories';
import Search from './../commons/Search';
import { CategorieMap } from '../components/home/Categories';
import { noticCategories, } from '../data/database';

const  Notifications = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
 
  return (
    <SafeAreaView style={styles.container}>
    {
     toggleSearch?
     (
     <>
       <Search 
       	toggleSearch={toggleSearch} 
       	setToggleSearch={setToggleSearch} />
     </>
     ):(
      <>
      <Header 
      	toggleSearch={toggleSearch} 
      	setToggleSearch={setToggleSearch} 
      	modalVisible={modalVisible} 
      	setModalVisible={setModalVisible} 
      />
      <ScrollView horizontal >
      <CategorieMap 
      	  RecommendedContents={noticCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
      />
      </ScrollView>
      </>
     )
    }
	  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.os ==="ios"?0 : 25,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


export default Notifications;
