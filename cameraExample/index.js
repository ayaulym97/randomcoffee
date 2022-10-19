/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   Image,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
 
 const CameraExample = () => {
   const [photo, setPhoto] = useState([]);
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   let options = {
     title: 'Select Image',
     customButtons: [
       {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
     ],
     storageOptions: {
       skipBackup: true,
       path: 'images',
     },
   };
   const handleAction = async type => {
     if (type === 'camera') {
        let options = {
         storageOptions: {
           skipBackup: true,
           path: 'images',
         },
       };
       await launchCamera(options, (response) => {
         console.log('Response = ', response);
   
         if (response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.errorCode == 'camera_unavailable') {
           alert('Camera not available on device');
           return;
       } else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
           alert(response.customButton);
         } else {
           const source = { uri: response.uri };
           console.log('response', JSON.stringify(response));
        
         }
       });
     } else {
       const result = await launchImageLibrary(options);
       setPhoto(result.assets);
       console.log('IMAGEPICKER', result.assets);
     }
   };
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <TouchableOpacity
         onPress={() => handleAction('camera')}
         style={{marginTop: 200}}>
         <Text>Open Camera</Text>
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => handleAction('photo')}
         style={{marginTop: 200}}>
         <Text>Open Photo Library</Text>
       </TouchableOpacity>
       {photo.length > 0 && (
         <Image
           source={{
             uri: photo[0].uri,
           }}
           style={{width: 200, aspectRatio: 1}}
         />
       )}
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default CameraExample;
 