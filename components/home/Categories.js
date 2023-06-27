import React,{useState, } from 'react';
import { StyleSheet, Platform,Image, TouchableOpacity, useColorScheme, ScrollView, DrawerLayoutAndroid, SafeAreaView, Dimensions, } from 'react-native';
import { Ionicons, Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

import { Text, View } from '../../components/Themed';
import DrawerNav from './../../commons/DrawerNav';
import CastModal from './../../commons/CastModal';

import { RecommendedContents } from './../../data/database';

const Categories =({activeCategory, setActiveCategory, modalVisible, setModalVisible,})=>{
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#282828' : '#fff';

	return(
	    <ScrollView
       contentContainerStyle={{
       		height: 45,
       }}
         horizontal
         showsHorizontalScrollIndicator={false}>
         <View style={{
             flexDirection: 'row',
          }}>
           <View >
             <TouchableOpacity
	             onPress={()=> setModalVisible(!modalVisible)}
	             style={{
	                backgroundColor: colorScheme==='light'? 'rgba(233,233,233,0.9)' : '#282828',
	                justifyContent: 'center',
	                alignItems: 'center',
	                paddingHorizontal: 10,
	                marginHorizontal: 10,
	                borderRadius: 7,
	                padding: 5,
	                marginLeft: 15
	              }}>
                <AntDesign name="find" size={24} color={color} />
            </TouchableOpacity>
         </View>
          <CategorieMap 
          		RecommendedContents={RecommendedContents} 
          		activeCategory={activeCategory}
          		setActiveCategory={setActiveCategory}
          />
          <View>
            <TouchableOpacity style={{
               padding: 6,
            }}>
              <Text style={{color: '#2200ff',}}> Send feedback  </Text>
          </TouchableOpacity>
         </View>
         </View>
       </ScrollView> 
	);
}

export default Categories;



export const CategorieMap = ({RecommendedContents, activeCategory, setActiveCategory}) => {
    const colorScheme = useColorScheme();
    const color = colorScheme === 'light'? '#282828' : '#fff';
	return(
	 <>
	 {
	  RecommendedContents.map((data, index) => {
	 	 let isActive = data == activeCategory;
	 	 let textClass = colorScheme === 'light'? '#282828' : 'white' ;
	 	  let isActiveNew = data== 'New to you';
	 	  let colorBg = colorScheme==='light'? 'rgba(233,233,233,0.9)' : '#282828';
	 	
	     return(
	 	   <View key={index}>
	 	     <TouchableOpacity
	 	        onPress={() => setActiveCategory(data)}
	 	        style={{
	 	           paddingHorizontal: 7,
	 	           padding: 5,
	 	           marginHorizontal: 4,
	 	           borderRadius: 7,
	 	           backgroundColor: isActiveNew? isActive? colorScheme==='light'?'': '' : colorBg : isActive? colorScheme==='light'?'#444': 'white' : colorBg ,
	 	           borderLeftColor: isActiveNew? 'green': null,
	 	           borderRightColor: isActiveNew? 'red': null,
	 	           borderWidth: isActiveNew? 0.8: 0,
	 	      }}>
	 	      <Text style={{
	 	         fontSize: 16,
	 	         color: isActiveNew?  isActive? colorScheme==='light'?'#a20': '#a20' : textClass : isActive? colorScheme==='light'?'white': '#282828' : textClass }}>
	 	         {data} </Text>
	 	     </TouchableOpacity>
	 	  </View>
	 	  );
	 	 })
	   }	
	 </>	
	);
}
