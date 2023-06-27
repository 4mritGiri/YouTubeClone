import React, {useState, } from 'react';
import {TouchableOpacity, useColorScheme,  } from 'react-native';
import {View, Text} from '../components/Themed';
import { MaterialIcons, Ionicons, Feather,} from '@expo/vector-icons';

import Modal from 'react-native-modal';

const SubNoticModal = ({subNotice, setSubNotice, isSubscribe, setIsSubscribe, }) =>{
  const colorScheme = useColorScheme();
  const color = colorScheme==='light'?'#282828' : '#eee'

  console.log(isSubscribe)
	return(
	<Modal
		isVisible={subNotice}
		onBackdropPress={()=>setSubNotice(false)}
		backdropOpacity={0.4}
		style={{
		  justifyContent: 'flex-end',
		}}
	>
	 <View darkColor="#282828" style={{
	 	// height: 50,
	 	borderRadius: 15,
	 	padding: 15,
	 }}>
	   <Text style={{
	   	  fontSize: 18,
	   	  fontWeight: 'bold',
	   }}>Notifications </Text>
	   <Icons 
	   		props={[
	   			{
	   			  icon: 'notifications-on',
	   			  title: "All",
	   			  active: false,
	   			  provider: MaterialIcons,
	   			},
	   			{
	   			  icon: 'notifications-outline',
	   			  title: "Personal",
	   			  active: false,
	   			  provider: Ionicons,
	   			},
	   			{
	   			  icon: 'notifications-off-outline',
	   			  title: "None",
	   			  active: false,
	   			  provider: Ionicons,
	   			},
	   		
	   		]}
	   		color={color}
	   		subNotice={subNotice}
	   		setSubNotice={setSubNotice}
			isSubscribe={isSubscribe}
			setIsSubscribe={setIsSubscribe}
	   		/>
	 </View>
	</Modal>
   );
}


const Icons = ({props, color, isSubscribe, setIsSubscribe, subNotice, setSubNotice, }) => {

	return(
	<>
	{
	 props.map((data, index) => {
	  const [isActive, setIsActive ] = useState(data.active);
	  
	  const Provider = data.provider;

	  const handleActive =()=>{
	  if(data.title==='All'){
	  	setIsActive(!isActive);
	  	// 
	  }else if(data.title==='Personal'){
	  	setIsActive(!isActive);
	  	// 
	  }else {
	  	setIsActive(!isActive);
	  	// 
	  }
	  }

	 	return(
	 	
	 	<TouchableOpacity
	 		key={index}
	 		onPress={handleActive}
	 		darkColor="#282828" 
	 		style={{
	 		  flexDirection: 'row',
	 		  justifyContent: 'space-between',
	 	}}>
	 	<TouchableOpacity
	 		onPress={handleActive}
	 		style={{
	 			flexDirection: 'row',
	 			paddingVertical: 10,
	 		}}>
	    	<Provider name={data.icon} size={24} color={color} />
	    <Text style={{paddingLeft: 20}}>{data.title} </Text>
	 	</TouchableOpacity>
	   {
	    isActive?
	 	<TouchableOpacity>
	 	  <Ionicons name="checkmark" size={24} color={color} />
	 	</TouchableOpacity>
	   :(
	   	null
	   )
	   }
	   </TouchableOpacity>
	 	
	 	);
	 })
	}
	<TouchableOpacity
	      onPress={()=>{
	      setIsSubscribe(!isSubscribe)
	      setSubNotice(false)
	      }
	      }
	      style={{
	          flexDirection: 'row',
	          paddingVertical: 10,
	          borderTopWidth: 0.5,
	          borderColor: 'gray',
	       }}>
	          <Feather name="user-minus" size={24} color={color} />
	          <Text style={{paddingLeft: 20}}>UnSubscribe </Text>
	      </TouchableOpacity>
	</>
	);
}

export default SubNoticModal;
