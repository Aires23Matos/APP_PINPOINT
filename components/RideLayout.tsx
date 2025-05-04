import icons from "@/constants/icons";
import { Image, Text, TouchableOpacity, View,Dimensions  } from "react-native"
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { router } from "expo-router";
import Map from "./Map";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useRef } from "react";

const { height } = Dimensions.get('window');

const RideLayout = ({
    title,
    children,
    snapPoints,
} : {
    title: string;
    children: React.ReactNode;
    snapPoints: string[];
}) => {

    const bottomSheetRef = useRef<BottomSheet>(null)
    return(
        <GestureHandlerRootView>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                }}>
                <View style={{display: 'flex',flexDirection: 'column', height: height, backgroundColor: '#38A169',}} >
                   <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'absolute',
                        zIndex: 10,
                        top: 16,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingLeft: 20, 
                        paddingRight: 20,
                        }}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <View style={{
                                width: 40, 
                                height: 40, 
                                backgroundColor: 'white',
                                borderRadius: '50%', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                }}>
                                <Image
                                    source={icons.backArrow}
                                    resizeMode="contain"
                                    style={{
                                        width: 24, 
                                        height: 24, 
                                      }}
                                />
                                
                            </View>
                            
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20, 
                            fontFamily: 'Jakarta-SemiBold', 
                            marginLeft: 20, 
                            }}>
                                {title || "Volta"}
                        </Text>
                    </View>
                    <Map/> 
                </View>
                <BottomSheet
               
                ref= {bottomSheetRef}
                snapPoints={snapPoints || ['40%', '85%']}
                index={0}
                >
                <BottomSheetView style={{flex: 1, padding:20}}>
                    {children}
                </BottomSheetView>

                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}

export default RideLayout;