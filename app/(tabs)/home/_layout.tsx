import { Stack } from "expo-router";
import { ProductProvider } from '../../context/ProductContext'

export default function HomeLayout(){
    return (
             <Stack screenOptions={{
            headerShown: false
            }}>
            <Stack.Screen name="electronics" options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen name="jewellery" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="menscloth" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="womencloth" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="productpage" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="cart" options={{headerShown: false}}></Stack.Screen>
        </Stack>
    )
}