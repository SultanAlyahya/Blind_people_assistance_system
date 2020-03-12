import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button} from 'react-native';
import { Camera } from 'expo-camera';
import styles from './style'



//the { navigation } attribute is because we are using function not class
//and note that without it you can't access the navigation 
//and because of it the navigation syntax become navigation.navigate('page')
export default function voice({ navigation }) {
  //this is how you can use state in functions [attribute, setAttribute=you use it to change the value of attribute ] = useSatet(initial value)
  //and you can change the attribute value by writing setValue(newValue) and the attribute value will change
  //and note that you can access the attribute just by writing attribute anywhere
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uri, setUri] = useState("")
  var camera=null
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [])

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const a=()=>{
    
  }

  const takePicture=async()=>{
    try{
    //this method is for taking pictures
    const image= await this.camera.takePictureAsync({quality:0.5})
    //the return value is a uri and the image is saved in the mobile cash
    //you can access it from the <Image> </Image> by providing the returned uri, width and height
    //console.log(image.base64)
    OCR(image)
    }catch(error){
      console.log(error.message)
    }
  }

  const OCR=async(image)=>{
    const data = new FormData();
          console.log('in')
            data.append("form", {
              name: "image.jpeg",
              type: "image/jpeg",
              uri:
                Platform.OS === "android" ? image.uri : image.uri.replace("file://", "")
            });
            try{
            const res = await fetch("https://assistance-system-back-end.herokuapp.com/User/image", {
              method: 'POST',
              headers: {
                "Accept": 'application/json',
                'Content-Type': 'image/jpeg',
              },
                body: data,
          })
          const resJ = await res.text()
          alert(resJ)
          console.log(resJ)
        }catch(error){
          console.log(error)
        }

  }
  // const OCR=async(image)=>{
  //   console.log('in')
  //   const data = new FormData();
          
  //           data.append("form", {
  //             name: "image.jpeg",
  //             type: "image/jpeg",
  //             uri:
  //               Platform.OS === "android" ? image.uri : image.uri.replace("file://", "")
  //           });
  //           try{
  //           const res = await fetch("https://microsoft-azure-microsoft-computer-vision-v1.p.rapidapi.com/ocr", {
  //             method: 'POST',
  //             headers: {
  //               'x-rapidapi-host': 'microsoft-azure-microsoft-computer-vision-v1.p.rapidapi.com',
  //               'x-rapidapi-key': 'cd030e1ea2msh070cf39ee790c48p13b720jsnf874d7a09567',
  //               'Content-Type': 'application/x-www-form-urlencoded'
  //             },
  //               body: data,
  //         })
  //         const resJ = await res.json()
  //         alert(resJ.regions[0].lines[0].words[0].text)
  //         console.log(resJ.regions[0].lines[0].words[0].text)
  //       }catch(error){
  //         console.log(error)
  //       }

  // }
  
  return (
    <View style={{flex:1}}>
      <Camera style={styles.Camera} type={type}
      //the ref method is used to make it able to use the camera methods from this.camera
      ref={ ref => {
        this.camera = ref;
      }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.CameraButton} onPress={()=>  takePicture()}>
          <Text style={styles.CameraText}>قم بالضغط على الشاشة لقراءة النص</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.flipText}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      </View>
  );
}

