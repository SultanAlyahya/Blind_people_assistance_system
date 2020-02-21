import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button} from 'react-native';
import { Camera } from 'expo-camera';
import styles from './style'
import vision from '@react-native-firebase/ml-vision';
import { firebase } from '@react-native-firebase/ml-vision';






import vision, { firebase } from '@react-native-firebase/ml-vision';
 
async function processImage() {
  // Create a local file location in the documents directory of the device
  const localFile = `${firebase.utils.FilePath.DOCUMENT_DIRECTORY}/landmark.jpg`;
  
  // Save the remote image to the device
  await firebase.storage().ref('london-eye.jpg').writeToFile(localFile);
  
  // Using the local file, process the image on the cloud image processor
  const processed = await vision().cloudLandmarkRecognizerProcessImage(localFile);
  
  processed.forEach((response) => {
    console.log('Landmark: ', response.landmark);
    console.log('Confidence: ', response.confidence);
  });
}






// //the { navigation } attribute is because we are using function not class
// //and note that without it you can't access the navigation 
// //and because of it the navigation syntax become navigation.navigate('page')
// export default function voice({ navigation }) {
//   //this is how you can use state in functions [attribute, setAttribute=you use it to change the value of attribute ] = useSatet(initial value)
//   //and you can change the attribute value by writing setValue(newValue) and the attribute value will change
//   //and note that you can access the attribute just by writing attribute anywhere
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
  
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, [])

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }



//   const takePicture=async()=>{
//     try{
//     //this method is for taking pictures
//     const image= await this.camera.takePictureAsync()
//     //the return value is a uri and the image is saved in the mobile cash
//     //you can access it from the <Image> </Image> by providing the returned uri, width and height
    
//     }catch(error){
//       console.log(error.message)
//     }
//   }
  
//   return (
//     <View style={{flex:1}}>
//       <Camera style={styles.Camera} type={type}
//       //the ref method is used to make it able to use the camera methods from this.camera
//       ref={ ref => {
//         this.camera = ref;
//       }}>
//         <View style={styles.container}>
//           <TouchableOpacity style={styles.CameraButton} onPress={()=>  takePicture()}>
//           <Text style={styles.CameraText}>قم بالضغط على الشاشة لقراءة النص</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.flipButton}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={styles.flipText}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//       </View>
//   );
// }

