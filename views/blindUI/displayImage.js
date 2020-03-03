import React from 'react';
import { View, Text,TouchableOpacity, Image} from 'react-native';

export default class image extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            uri: this.props.navigation.state.params.imagePath || 'yes',
            fileName: 'hello.jpg',
            type: 'image/jpeg',
            photo:{uri:this.props.navigation.state.params.imagePath, fileName:'image.jpg', type: 'image/jpeg',},
            base64:this.props.navigation.state.params.base64,
            image:this.props.navigation.state.params.image
        };
      }

    render(){
       
        //this function is used to create a formData, from formData we can send a pic to the server 
        //the uri: is where the image saved in the cashe
        //the type is the file type the type of the file, take in your mind that our server will take any kind of files for now so for now it's opthional
        //the name is required for the server, i dont know if i need to write .jpg after the name but for now is ok with or without
        //the body value is string with 123, so for evry append elemnet will get a number as a key to make it unique
        const createFormData = (photo, body) => {
            const data = new FormData();
          console.log(1)
            data.append("photo", {
              name: photo.fileName,
              type: photo.type,
              uri:
                Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
            });
            console.log(2)
            Object.keys(body).forEach(key => {
              data.append(key, body[key]);
            });
            console.log(data)
            return data;
          };

          //this is a test function of how can we send in image to the server, and it's works well :)
        const a= async()=>{
            
            const data = await fetch("http://localhost:3000/User/image", {
                method: "POST",
                body: createFormData(this.state.photo, { userId: "123" })
              })
              const dataJ = await data.json()
              const Data = await dataJ
              console.log(Data)
        }
        const imageToText=async()=>{
          var formData = new FormData();
            //formData.append("base64Image", "data:image/png;base64,"+this.state.base64);
            formData.append("url", "https://upload.wikimedia.org/wikipedia/commons/a/a2/Hello_%28yellow%29.png");
            formData.append("language"   , "eng");
            formData.append("apikey"  , "522a8c696488957");
            formData.append("isOverlayRequired", "True");
            formData.append("filetype", "png")
            console.log('in')
  
          const res = await fetch('https://api.ocr.space/parse/image', {
              method: 'POST',
              headers: {
                "Accept": 'application/json',
                'Content-Type': 'image/png',
              },
                body: formData,
          })
          console.log('in2')
          const resJ = await res.json()
          console.log('in3')
          console.log(resJ.ParsedResults[0].ParsedText)
          //console.log(this.state.image)
          alert(resJ.ParsedResults[0].ParsedText)
      }
        return(
            <View>
         <Image 
         style={{width: '50%', height: '50%'}}
         source={{uri:(this.props.navigation.state.params.imagePath).replace("file://","")}} />
         <TouchableOpacity onPress={()=> imageToText()}>
         <Text>click</Text>
         </TouchableOpacity>
         </View>
        )
    }
}