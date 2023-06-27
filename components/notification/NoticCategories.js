import React,{useState, } from 'react';
import {TouchableOpacity, } from 'react-native';

import {View, Text} from '../../components/Themed';
import { noticCategories } from '../../data/database';

const NoticCategories = () => {

	return(
	 <>
	  <View style={{
	  	padding: 10,
	  }}>
	   <Text> Category </Text>
	  </View>
	 </>
	);
}

export default NoticCategories;
