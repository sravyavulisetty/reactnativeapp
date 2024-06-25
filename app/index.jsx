import { ScrollView, Text, View, Image, Button, Alert } from "react-native";
import { Link } from "expo-router";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

export default function Index() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  return (
    <SafeAreaView className="bg-[#e5b724]" style= {{fontFamily: 'Poppins_400Regular'}}>
      <ScrollView className="h-screen w-screen flex flex-col m-2">
        <View className="flex flex-row items-center justify-between px-3">
          <Image source={require('../assets/images/gift.png')} resizeMode="contain" className="h-8 w-8 m-2"></Image>
          <CustomButton title="Log In" textStyles="text-black"/>
        </View>
        <Text className="text-4xl font-bold mt-10 px-3" style= {{fontFamily: 'Poppins_400Regular'}} >SHOP AT YOUR COMFORT</Text>
        <View className="flex-1 items-center justify-center mt-10">
          <Image source={require('../assets/images/home.jpg')} resizeMode='contain' className="h-[400px] w-auto"></Image>
        </View>
        <CustomButton title="Get Started" containerStyles="bg-black w-52 p-2 mt-8 ml-20" textStyles="text-white"></CustomButton>
        {/* <View className="bg-black mt-6 p-0.5 w-72 ml-10 text-white"> */}
          {/* <Link href='/home' style={{color: 'black'}} className="p-1 text-center font-semibold text-lg mt-2">Get Started</Link> */}
          {/* <Button title="Get Started" color='white' onPress={()=> router.push("/home")}></Button> */}
        {/* </View> */}
      </ScrollView>
      <StatusBar backgroundColor="black" style="light" />  
    </SafeAreaView>
    
  );
}
