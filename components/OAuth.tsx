import { View, Text,Image } from "react-native";
import CustomButton1 from "./CustomButton1";
import icons from "@/constants/icons";

const OAuth = () => (
    <View>
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: 16, 
            gap: 12, 
            }}>
            <View style={{
            flex: 1, 
            height: 1, 
            backgroundColor: '#F3F4F6', 
            }}/>
            <Text style={{
            fontSize: 18, 
            }}>Or</Text>
            <View style={{
            flex: 1, 
            height: 1, 
            backgroundColor: '#F3F4F6', 
            }} />
        </View>

        <CustomButton1 
        title="Iniciar sessão com o Google"
        style={{
            marginTop: 20, 
            width: '100%', 
            shadowOpacity: 0, 
          }}
        IconLeft={() => (
            <Image 
            source={icons.google}
            resizeMode="contain"
            style={{
                width: 20, 
                height: 20,
                marginHorizontal: 8, 
              }}
            />
        )}
        bgVariant="outline"
        textVariant="primary"
        />
        
    </View>
);

export default OAuth;