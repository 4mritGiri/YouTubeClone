import { TouchableOpacity, useColorScheme, Image, } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons, Feather, } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';

export default function CreateScreen({modalVisible, setModalVisible, toggleModal}) {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light'? '#282828' : '#fff'; 

  return (
    <View>
     <Modal
		onBackdropPress={()=>setModalVisible(false)}
     	isVisible={modalVisible}
     	backdropOpacity={0.3}
     	style={{
     		justifyContent: 'flex-end',
     		margin: 0,
     	}}
     >
        <View style={{
        	justifyContent: 'flex-end',
        	 borderRadius: 30,
        }}>
        <View lightColor="#eee" darkColor="#222" style={{
        	flexDirection: 'row',
        	justifyContent: 'space-between',
        	alignItems: 'center',
        	borderTopLeftRadius: 30,
        	borderTopRightRadius: 30,
        }}>
           <Text style={{
           	   fontSize: 22,
           	   fontWeight: 'bold',
           	   padding: 10,
           }}> Create </Text>
           <TouchableOpacity
           		onPress={toggleModal}
           		style={{
           			padding: 10,
           			paddingRight: 20,
           		}}>
			  <Ionicons name="close" size={32} color={color} />             
           </TouchableOpacity>
        </View>
        <View lightColor="#eee" darkColor="#222" style={{
        	padding: 12,
        }}>
          
         <CreateComponent Icons={[
         	{
         	  title: "Upload a video ",
         	  icon: "upload"
         	},
			{
         	  title: "Go live",
         	  icon: "radio"
         	},
         	{
         	  title: "Create a post ",
         	  icon: "edit"
         	},
         ]}  color={color}/>
        </View>
        </View>
     </Modal>  
    </View>
  );
}

const CreateComponent = ({Icons, color}) => {
 const colorScheme = useColorScheme();
	return(
	 <View darkColor="#222" lightColor="#eee" >
	    <TouchableOpacity style={{
	    	 flexDirection: 'row',
	    	 alignItems: 'center',
	    	 marginVertical: 10,
	    }}>
	     <View style={{
	     	height: 45,
	     	width: 45,
	     	padding: 8,
	        backgroundColor:colorScheme==='light'?
	            'rgba(55,55,55,0.1)' :'rgba(55,55,55,0.9)',
	       	borderRadius: 100,
	     }}>
	       <Image
	       		style={{
	       			height: '100%',
	       			width: '100%',
					tintColor: color,	       			
	       		}}
	       		source={require('./../../assets/icons/short-out.png')}/>
	      </View>
	      <Text style={{
	      	 fontSize: 18,
	      	 paddingLeft: 20,
	      }}> Create shorts </Text>
	    </TouchableOpacity>
	    {
	      Icons?.map((item, index) => {

	      	return(  		
			    <TouchableOpacity 
			    	key={index}
			    	style={{
			    	    	 flexDirection: 'row',
			    	    	 alignItems: 'center',
			    	    	 marginVertical: 10,
			      }}>
			      <View style={{
			      	backgroundColor:colorScheme==='light'?'rgba(55,55,55,0.1)' :'rgba(52,52,52,0.9)',
			      	padding: 10,
			      	borderRadius: 100,
			      }}>
			         <Feather name={item.icon} size={24} color={color} />
			      </View>
			      <Text style={{
			      	 fontSize: 18,
			      	 paddingLeft: 20,
			      }}> {item.title} </Text>
			    </TouchableOpacity>
	      	)
	      })
	    }
	 </View>
	);
}

