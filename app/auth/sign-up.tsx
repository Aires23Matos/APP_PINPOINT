import {Alert, Image, ScrollView, Text, View } from "react-native";
import images from '../../constants/images'
import InputField from "../../components/InputField";
import icons from '../../constants/icons'
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from 'expo-router';
import OAuth from "@/components/OAuth";
import { useSignUp, useClerk  } from "@clerk/clerk-expo";
import ReactNativeModal from 'react-native-modal';
import { fetchAPI } from "@/lib/fetch";

const SignUp = () => {
    const { isLoaded, signUp, setActive } = useSignUp()
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const { signOut } = useClerk();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: "",
    });

    const onSignUpPress = async () => {
        if (!isLoaded) return
    
        try {
          await signUp.create({
            emailAddress: form.email,
            password: form.password,
          })
    
          await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
    
          setVerification({
            ...verification,
            state: "pending",
          })
        } catch (err:any) {
          Alert.alert("Error", err.errors[0].longMessage);
          
        }
      }
    
      
      const onVerifyPress = async () => {
        if (!isLoaded) return;
    
        try {
         
          const signUpAttempt = await signUp.attemptEmailAddressVerification({
            code: verification.code,
          })
    
          if (signUpAttempt.status === 'complete') {
           
            await fetchAPI('/api/user',{
              
              method: "POST",
              body: JSON.stringify({
                name: form.name,
                email: form.email,
                clerkId: signUpAttempt.createdUserId,
              })
            })            
            await setActive({ session: signUpAttempt.createdSessionId })
            setVerification({
                ...verification,
                state: "success"
            })
          } else {
            setVerification({
                ...verification,
                error: "Falha na verificação",
                state: "Falha",
            })
            console.error(JSON.stringify(signUpAttempt, null, 2))
          }
        } catch (err:any) {
          setVerification({
            ...verification,
            error: err.errors[0].longMessage,
            state: "Falha",
          })
          
        }
      }

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
                    >Crie a sua conta</Text>
                </View>

                <View style={{
                padding: 20, 
                }}>
                    <InputField
                        label={"Nome"}
                        placeholder = "Introduza o seu nome"
                        icon = {icons.person}
                        value={form.name}
                        onChangeText={(value) => setForm({...form, name:value})}
                     />
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

                     <CustomButton title="Registar-me" onPress={onSignUpPress} style={{
                        marginTop: 24, 
                    }}/>

                    <OAuth/>
                    
                    <Link href="/auth/sign-in"
                        style={{
                            fontSize: 18, // text-lg
                            textAlign: 'center', // text-center
                            color: '#080808', 
                            marginTop: 40, 
                          }}
                    >
                        <Text>Já tem uma conta?</Text>
                        <Text style={{
                        color: '#2F855A', 
                        }}>Iniciar Sessão</Text>
                    </Link>
                </View>
               <ReactNativeModal
                isVisible={verification.state === "pending"}
                onModalHide={() => { 
                  if(verification.state === "success") setShowSuccessModal(true)
                  }
                }
                /**setVerification({...verification, state: "success"}) */
               >
                <View style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 28, 
                  paddingVertical: 36, 
                  borderRadius: 16, 
                  minHeight: 300, 
                }}>
                  <Text style={{
                  fontSize: 24, 
                  fontFamily: 'Jakarta-ExtraBold', 
                  marginBottom: 8,
                }}>verificação</Text>

                <Text style={{
                  fontFamily: 'Jakrta', 
                  marginBottom: 20, 
                }}>
                Enviámos um código de verificação para {form.email}
                </Text>

                <InputField
                label="Code"
                icon={icons.lock}
                placeholder="12345"
                value={verification.code}
                keyboardType="numeric"
                onChangeText={(code) => setVerification({
                  ...verification,
                  code
                })}
                />
                {verification.error && (
                  <Text style={{
                    color: '#EF4444',
                    fontSize: 14, 
                    marginTop: 4, 
                  }}>
                    {verification.error}
                  </Text>
                )}
                <CustomButton
                title="verificar e-mail"
                onPress={onVerifyPress}
                style={{
                  marginTop: 20, 
                  backgroundColor: '#28a745', 
                }}
                />
                </View>
               </ReactNativeModal>
               <ReactNativeModal isVisible={showSuccessModal} /***verification.state === "success" */ >
                    <View style={{
                        backgroundColor: 'white', 
                        paddingHorizontal: 28, 
                        paddingVertical: 36,
                        borderRadius: 16, 
                        minHeight: 300, 
                        }}>
                        <Image source={images.check}
                        style={{
                            width: 100, 
                            height: 100, 
                            marginHorizontal: 'auto', 
                            marginVertical: 20, 
                        }}
                        />

                        <Text style={{
                        fontSize: 30, 
                        fontFamily: 'Jakarta-Bold', 
                        textAlign: 'center', 
                        }}>
                            Verificada
                        </Text>

                        <Text style={{
                        fontSize: 16, 
                        color: '#B0B0B0', 
                        fontFamily: 'Jakarta', 
                        textAlign: 'center', 
                        marginTop: 8,
                        }}>
                        </Text>

                        <CustomButton
                        title="Procurar Página Inicial"
                        
                        onPress={() => {
                          setShowSuccessModal(false);
                          router.push("/root/tabs/home");
                        }}
                        style={{
                          marginTop: 20,
                        }}
                        />

                    </View>
               </ReactNativeModal>
            </View> 
        </ScrollView>
    );
}

export default SignUp;