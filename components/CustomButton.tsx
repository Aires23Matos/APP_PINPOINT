import React from "react";
import {Text, TouchableOpacity, StyleSheet } from "react-native";
import {ButtonProps} from "@/types/type"

const getBgVariantStyle = (variant:ButtonProps["bgVariant"]) => {
    switch(variant) {
        case "secondary":
            return { backgroundColor: '#6B7280' };
        case "danger":
            return { backgroundColor: '#EF4444' };
        case "success":
            return { backgroundColor: '#10B981' };
        case "outline":
            return { backgroundColor: 'transparent', borderColor:   '#D1D5DB', borderWidth: 0.5 }; 
        default:
            return { backgroundColor: '#38A169' };
    }
}

const getTextVariantStyle = (variant:ButtonProps["textVariant"]) => {
    switch(variant) {
        case "primary":
            return { color: 'black' };;
        case "secondary":
            return { color: '#F7FAFC' };;
        case "danger":
            return { color: '#F87171' };
        case "success":
            return { color: '#6EE7B7' };
        default:
            return { color: 'white' };
    }
}

const CustomButton: React.FC<ButtonProps> = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    className,
    ...props
}:ButtonProps) => {
   return(
    <TouchableOpacity onPress={onPress} className={`${getBgVariantStyle(bgVariant)} ${className} `} {...props} style = {styles.button}>
    {IconLeft && <IconLeft/>}
    <Text style={[styles.text, getTextVariantStyle(textVariant)]}>{title}</Text>
    {IconLeft && <IconLeft/>}
    </TouchableOpacity>
   )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
      width: '95%',
      padding: 12,
      backgroundColor: '#68D391',
      borderRadius: 9999, // rounded-full
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.7,
      shadowRadius: 4,
      elevation: 5, 
      marginBottom: 10
    },
    text: {
      fontSize: 18, 
      fontWeight: 'bold', 
    },
  });