import { Box, Text, Button, HStack, Divider } from "native-base";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet, Linking, View, Alert } from "react-native";
// import MlkitOcr from "react-native-mlkit-ocr";
import React, { useState, useEffect } from "react";
// import TextRecognition from "react-native-text-recognition";
// import { launchImageLibrary } from "react-native-image-picker";
import { BarCodeScanner } from "expo-barcode-scanner";

const Scan = () => {
  // const [cameraPermission, setCameraPermission] = useState(null);
  // const [galleryPermission, setGalleryPermission] = useState(null);
  // const [imageUri, setImageUri] = useState(null);
  // const [camera, setCamera] = useState(null);

  // const [text, setText] = useState(null);
  // const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const isConfirmed = false;
    Alert.alert("Quét QR thành công", `Chuyển hướng tới: ${data}`, [
      {
        text: "Đồng ý",
        onPress: () => {
          Linking.openURL(data);
          setScanned(false);
        },
      },
      {
        text: "Huỷ",
        onPress: () => setScanned(false),
        style: "cancel",
      },
    ]);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  // const permissionFunction = async () => {
  //   // here is how you can get the camera permission
  //   const cameraPermission = await Camera.requestCameraPermissionsAsync();

  //   setCameraPermission(cameraPermission.status === "granted");

  //   const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
  //   console.log(imagePermission.status);

  //   setGalleryPermission(imagePermission.status === "granted");

  //   if (
  //     imagePermission.status !== "granted" &&
  //     cameraPermission.status !== "granted"
  //   ) {
  //     alert("Permission for media access needed.");
  //   }
  // };

  // const takePicture = async () => {
  //   if (camera) {
  //     const uri = await camera.takePictureAsync(null);

  //     setImageUri(uri.uri);
  //     console.log(imageUri);
  //   }
  // };

  // useEffect(() => {
  //   permissionFunction();
  // }, []);

  // useEffect(() => {
  //   launchImageLibrary({}, setImageUri);
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     if (imageUri !== null) {
  //       const resultFromUri = await TextRecognition.recognize(imageUri.assets[0].uri);
  //       setText(resultFromUri);
  //     }
  //   })();
  // }, [imageUri]);

  //   useEffect(() => {
  //     (async () => {
  //       if (imageUri !== null) {
  //         const visionResp = await TextRecognition.recognize(imageUri,);
  //         setText(visionResp);
  //       }
  //     })();
  //   }, [imageUri]);

  return (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={[StyleSheet.absoluteFill, styles.container]}
    >
      <View style={styles.layerTop} />
      <View style={styles.layerCenter}>
        <View style={styles.layerLeft} />
        <View style={styles.focused} />
        <View style={styles.layerRight} />
      </View>
      <View style={styles.layerBottom} />
    </BarCodeScanner>

    // <Box flex="1" bgColor="white" justifyContent="center">
    //   {/* <Camera
    //     style={{ flex: 3, margin: 5 }}
    //     type={type}
    //     ratio="4:3"
    //     ref={(ref) => setCamera(ref)}
    //   />
    //   <HStack justifyContent="center" p="5">
    //     <Button onPress={takePicture}>Scan</Button>
    //   </HStack> */}

    //   {/* <Box

    //     bgColor="white"
    //     justifyContent="center"
    //     m="5"
    //     mt="0"
    //     borderColor="gray.300"
    //     borderWidth="1"
    //   >
    //     <Text>
    //       {text} {imageUri}
    //     </Text>
    //   </Box> */}
    // </Box>
  );
};

export default Scan;

const opacity = "rgba(0, 0, 0, 0)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 2,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 2,
    backgroundColor: opacity,
  },
  focused: {
    flex: 7,
    borderWidth: 1,
    borderColor: "white",
  },
  layerRight: {
    flex: 2,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
  },
});
