import { useUser } from "@clerk/clerk-expo";
import { Image, ScrollView, Text, View , StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "@/components/InputField";

const Profile = () => {
  const { user } = useUser();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
       style={{
        paddingLeft: 20, 
        paddingRight: 20,
        }}
        contentContainerStyle={{ paddingBottom: 120 }}>
        <Text style={{
        fontSize: 20, 
        fontFamily: 'Jakarta-Bold', 
        marginTop: 20, 
        marginBottom: 20, 
        }}>Meu Perfil</Text>

        <View style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20, 
        marginBottom: 20, 
        }}>

          <Image
            source={{
              uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,
            }}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
          className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
          />
        </View>

          <View style={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            backgroundColor: 'white', 
            borderRadius: 8, 
            boxShadow: '0 1px 2px rgba(209, 213, 219, 1)', 
            paddingHorizontal: 20, 
            paddingVertical: 12, 
          }}>

          <View style={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'flex-start', 
            width: '100%', 
            }}>

            <InputField
              label="Nome próprio"
              placeholder={user?.firstName || "Não encontrado"}
              style={{width: '100%'}}
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Apelido"
              placeholder={user?.lastName || "Não encontrado"}
              style={{width: '100%'}}
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Email"
              placeholder={
                user?.primaryEmailAddress?.emailAddress || "Não encontrado"
              }
              style={{width: '100%'}}
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Phone"
              placeholder={user?.primaryPhoneNumber?.phoneNumber || "Não encontrado"}
              style={{width: '100%'}}
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
    textando: { 
        borderRadius: '50%', 
        height: 110, 
        width: 110, 
        borderWidth: 3, 
        borderColor: 'white', 
        boxShadow: '0 1px 2px rgba(209, 213, 219, 1)', 
}
})