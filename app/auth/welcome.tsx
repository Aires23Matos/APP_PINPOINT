import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import {useRef, useState} from 'react';
import onboarding from '../../constants/index';
import CustomButton from '../../components/CustomButton';





const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const islastSlide = activeIndex === onboarding.length -1;
    return(
        <SafeAreaView style = {{flex: 1, height: '100%', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white'}}>
            <TouchableOpacity
            onPress={() => {
                router.replace("/auth/sign-up");
            }}
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                padding: 20,
              }}>
                <Text style={{
                color: 'black',
                fontSize: 16, // text-md em Tailwind equivale a 16px
                fontFamily: 'JakartaBold',
            }}>Pular</Text>
            </TouchableOpacity>
           
            <Swiper ref={swiperRef}
            loop = {false}
            dot={<View style={{
                width: 32,
                height: 4,
                marginHorizontal: 4, // mx-1 em Tailwind equivale a 4px de margem horizontal
                backgroundColor: '#E2E8F0',
              }}
            />}
            activeDot={<View style={{
                width: 32,
                height: 4,
                marginHorizontal: 4, // mx-1 em Tailwind equivale a 4px de margem horizontal
                backgroundColor: '#38A169',
                borderRadius: 9999,
              }}/>}
              onIndexChanged={(index) => setActiveIndex(index)}
              >
                {Array.isArray(onboarding) && onboarding.map((item) => (
                    <View key={item.id} style= {{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 20,
                    }}
                    >
                        <Image source={item.image} style={{
                        width: '100%',
                        height: 300,
                        }} resizeMode='contain'/>
                        <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        marginTop: 40, // mt-10 em Tailwind equivale a 40px
                        }}>
                             <Text style={{
                        color: 'black',
                        fontSize: 24, // text-3xl em Tailwind equivale a 24px
                        fontWeight: 'bold',
                        marginHorizontal: 40, // mx-10 equivale a 40px
                        textAlign: 'center',
                        }}>{item.title}</Text>
                        </View>
                       <Text style={{
                        fontSize: 18, // text-md em Tailwind equivale a 16px
                        fontFamily: 'Jakarta-DemiBold',
                        textAlign: 'center',
                        color: '#858585', 
                        marginHorizontal: 40, // mx-10 equivale a 40px
                        marginTop: 12, // mt-3 equivale a 12px
                        }} >{item.description}</Text>
                    </View>
                ))}
            </Swiper>

           <CustomButton title={islastSlide ? "Começar": "Próximo"} 
           onPress={() => islastSlide? router.replace("/auth/sign-up") : swiperRef.current?.scrollBy(1)}
           style={{ width: '91%', marginTop: 40 }}/>
        </SafeAreaView>
    );
}

export default Onboarding;