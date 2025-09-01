import Cart from "@/app/(tabs)/cart";
import React from "react";
import { images, offers } from '@/constants';
import { View, Text, Image, Pressable, StyleSheet,Dimensions } from 'react-native';

interface MenuCardProps{
    item:MenuItem,
}

const { width } = Dimensions.get('window');

const CARD_MARGIN = 10;
const CARD_WIDTH = (width / 2) ;
const CARD_HEIGHT = 200;

export default function MenuCard({item}: MenuCardProps){

    
        <Pressable style={styles.cart}  >
            <View>
                <Image source={item.icon} />
            </View>
            <Text>{item.title}</Text>
         <Text className="text-center text-gray-500 mt-1">${item.price.toFixed(2)}</Text>
        </Pressable>
   

}

const styles = StyleSheet.create({
    cart:{
     width: CARD_WIDTH,
     height: CARD_HEIGHT,
     borderRadius:10,
     backgroundColor: 'black',
     shadowColor:'white',
     shadowOffset: { width: 0, height:4},
     shadowOpacity:0.2,
     shadowRadius:6,
     elevation:5,
     marginBottom:CARD_MARGIN,
     overflow:'hidden',
     padding:0

    }
})