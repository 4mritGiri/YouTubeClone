import React,{useState, } from 'react';
import { StyleSheet, Platform } from 'react-native';

import Header from './../../components/home/Header';
import Search from	'./../../commons/Search';

import { Text, View } from '../../components/Themed';

export default function LibraryScreen() {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <View style={styles.container}>
     {
      toggleSearch?
	   	  <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      :(
      <>
        <Header toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      	<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </>
      )
     }	
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.os==='ios'? 0 : 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
