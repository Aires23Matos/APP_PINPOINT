import {KeyboardAvoidingView, Text, Keyboard, Image,View, TextInput, Platform, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { InputFieldProps } from '@/types/type';


const InputField: React.FC<InputFieldProps> = ({
    label,
    labelStyle,
    icon,
    secureTextEntry = false,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) => {
   return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{
        width: '95%',
        marginVertical: 8, 
        marginLeft: 10
        }}>
            <Text style={{
                fontSize: 18, 
                fontFamily: 'Jakarta-SemiBold', 
                marginBottom: 12, 
                }}className={`${labelStyle}`}>{label}</Text>
            <View className={`${containerStyle}`} focusable={true} style={{
                flexDirection: 'row', 
                justifyContent: 'flex-start',
                alignItems: 'center',
                position: 'relative',
                backgroundColor: '#F5F5F5', 
                borderRadius: 9999, 
                borderWidth: 1, 
                borderColor: '#F5F5F5', 
                }}>
                {icon && <Image source={icon} className={`${iconStyle}`} style={{
                width: 24, 
                height: 24, 
                marginLeft: 16, 
                }}/>}
                <TextInput className={`${inputStyle}`}
                style={{
                    borderRadius: 9999, 
                    padding: 16, 
                    fontFamily: 'Jakarta-SemiBold',
                    fontSize: 15, 
                    flex: 1, 
                    textAlign: 'left', 
                }}
                secureTextEntry={secureTextEntry}
                {...props}/>
            </View>
        </View>
    </TouchableWithoutFeedback>
</KeyboardAvoidingView>
   )
}

export default InputField;