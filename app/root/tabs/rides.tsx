import { useUser } from "@clerk/clerk-expo";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RideCard from "@/components/RideCard";
import images from "@/constants/images";
import { useFetch } from "@/lib/fetch";
import { Ride } from "@/types/type";

const Rides = () => {
  const { user } = useUser();

  const {
    data: recentRides,
    loading,
    error,
  } = useFetch<Ride[]>(`/api/ride/${user?.id}`);

  return (
    <SafeAreaView style={{
      flex: 1, 
      backgroundColor: 'white', 
    }}
    >
      <FlatList
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={{
          paddingHorizontal: 20, 
        }}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
          }}>
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  style={{
                    width: 160, 
                    height: 160,
                  }}
                  alt="Nenhum posto recente encontrado"
                  resizeMode="contain"
                />
                <Text style={{
                  fontSize: 14,
                }}>Nenhum posto recente encontrado</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <Text style={{
              fontSize: 24, 
              fontFamily: 'Jakarta-Bold', 
              marginVertical: 20, 
            }}>Todos os Postos</Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Rides;
