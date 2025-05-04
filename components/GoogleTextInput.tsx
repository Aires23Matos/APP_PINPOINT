import { GoogleInputProps } from "@/types/type";
import { View, StyleSheet,Image } from "react-native";
import React from "react";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import icons from "@/constants/icons";
import 'react-native-get-random-values'; 


const googlePlacesApikey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const GoogleTextInput: React.FC<GoogleInputProps> =({
    icon,
    initialLocation,
    containerStyle,
    textInputBackgroundColor,
    handlePress,

}: GoogleInputProps) => {
   return(
    <View style={styles.google}>
    <GooglePlacesAutocomplete
        fetchDetails = {true}
        placeholder="Posto de combustivel você quer ir?"
        debounce={200}
        styles={{
            textInputContainer: {
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginHorizontal: 20,
                position: 'relative',
                shadowColor: "#d4d4d4"
            },
            textInput: {
                backgroundColor: textInputBackgroundColor || 'white',
                fontSize: 16,
                fontWeight: "600",
                marginTop: 5,
                width: '100%',
                borderRadius: 200
            },
            listView: {
                backgroundColor: textInputBackgroundColor || 'white',
                position: 'relative',
                top: 0,
                width: '100%',
                borderRadius: 10,
                shadowColor: "#d4d4d4",
                zIndex: 99 
            }
        }}
        onPress={(data, details = null) => {
            handlePress({
                latitude: details?.geometry.location.lat!,
                longitude: details?.geometry.location.lng!,
                address: data.description,
            });
        }}
        query={{
            key: googlePlacesApikey,
            language: 'pt-PT'
        }}
        renderLeftButton={() => (
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 24,
                height: 24, 
              }}>
                <Image
                    source= {icon ? icon: icons.search}
                    style={{
                        width: 24, 
                        height: 24, 
                      }}
                    resizeMode= "contain"
                />
            </View>
        )}
        textInputProps={{
            placeholderTextColor: 'gray',
            placeholder: initialLocation ?? "Posto de combustivel você quer ir?"
        }}
    />
    </View>
   );
}

export default GoogleTextInput;

const styles = StyleSheet.create({
    google: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', 
        zIndex: 50, 
        borderRadius: 12, 
        marginBottom: 20, 
        backgroundColor: '#fff', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        paddingLeft: 5
    },
    move: {
        marginBottom: 20,
    }
})