import CustomButton from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";
import icons from "@/constants/icons";
import { useLocationsStore } from "@/store"
import { Text, View } from "react-native"
import { router } from "expo-router";
import { title } from 'process';


const FindRide = () => {
    const {
        userAddress,
        destinationAddress,
        setDestinationLocation,
        setUserLocation,

    } = useLocationsStore();

    return (
       <RideLayout title="Ride" snapPoints={['85%']}>
        <View className="my-3">
            <Text className="text-lg fontJakartaSemiBold mb-3">De</Text>
            <GoogleTextInput
                icon={icons.target}
                initialLocation={userAddress!}
                containerStyle="bg-neutral-100"
                textInputBackgroundColor="#f5f5f5"
                handlePress={(location) => setUserLocation(location)}
            />
        </View>

        <View className="my-3">
            <Text className="text-lg fontJakartaSemiBold mb-3">Para</Text>
            <GoogleTextInput
                icon={icons.map}
                initialLocation={destinationAddress!}
                containerStyle="bg-neutral-100"
                textInputBackgroundColor="transparent"
                handlePress={(location) => setDestinationLocation(location)}
            />
        </View>

        <CustomButton title="Encontre agora" onPress={() => router.push('./root/confirm-ride')}
            className="mt-5"/>
       </RideLayout>
    )
}

export default FindRide;