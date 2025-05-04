import {Image, ScrollView, Text, View } from "react-native";
import images from '../../constants/images'
import InputField from "../../components/InputField";
import icons from '../../constants/icons'
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from 'expo-router';
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";
import { useCallback } from "react";

const SignIn = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();  

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    
  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

   
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })

     
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password]);

    return(
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
           <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{
                    width: '100%',
                    height: 250
                    }}>
                    <Image source={images.signUpCar} style={{
                    zIndex: 0,
                    width: '100%',
                    height: 250
                    }}/>
                    <Text style={{
                    fontSize: 24,
                    color: 'black', 
                    fontFamily: 'Jakarta-SemiBold', 
                    position: 'absolute', 
                    bottom: 5,
                    left: 20 
                    }}
                    >Bem-vindo👋🏼</Text>
                </View>

                <View style={{
                padding: 20, 
                }}>
                      <InputField
                        label={"Email"}
                        placeholder = "Introduza o seu email"
                        icon = {icons.email}
                        value={form.email}
                        onChangeText={(value) => setForm({...form, email:value})}
                     />
                      <InputField
                        label={"Palavra-passe"}
                        placeholder = "Introduza o seu Palavra passe"
                        icon = {icons.lock}
                        secureTextEntry= {true}
                        value={form.password}
                        onChangeText={(value) => setForm({...form, password:value})}
                     />

                     <CustomButton title="Iniciar sessão" onPress={onSignInPress} style={{
                        marginTop: 24, 
                    }}/>

                    <OAuth/>
                    
                    <Link href="/auth/sign-up"
                        style={{
                            fontSize: 18, // text-lg
                            textAlign: 'center', // text-center
                            color: '#080808', 
                            marginTop: 40, 
                          }}
                    >
                        <Text>Não tem uma conta?</Text>
                        <Text style={{
                        color: '#2F855A', 
                        }}>Registar-me</Text>
                    </Link>
                </View>
                {/** Verificação Modal */}
            </View> 
        </ScrollView>
    );
}

export default SignIn;