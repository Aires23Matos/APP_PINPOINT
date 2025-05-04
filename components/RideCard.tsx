import icons from "@/constants/icons";
import { Ride } from "@/types/type";
import { View, Text, Image } from "react-native";
import { formatDate, formatTime } from "@/lib/utils";

const RideCard = ({ride:{
    destination_longitude,
    destination_latitude,
    destination_address,
    origin_address,
    created_at,
    ride_time,
    driver,
    payment_status,
}}: {ride:Ride}) => (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8, 
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', 
        marginBottom: 12, 
      }}>
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12, 
            }}>
            <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            }}
            >
                <Image
                source={{
                    uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
                }}
                style={{
                    width: 80, 
                    height: 90, 
                    borderRadius: 8, 
                  }}
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginHorizontal: 20, 
                    gap: 20, 
                    flex: 1, 
                    }}>
                    <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 8, 
                    }}>
                        <Image source={icons.to} style={{
                        width: 20, 
                        height: 20, 
                        }} />
                        <Text style={{
                        fontSize: 16, 
                        fontFamily: 'JakartaMedium', 
                        }}
                        numberOfLines={1}
                        >{origin_address}</Text>
                    </View>

                    <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 8, 
                    }}>
                        <Image source={icons.point} style={{
                        width: 20, 
                        height: 20, 
                        }} />
                        <Text style={{
                        fontSize: 16, 
                        fontFamily: 'Jakarta-Medium', 
                        }}
                        numberOfLines={1}
                        >{destination_address}</Text>
                    </View>
                </View>
            </View>
            <View style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: 20, 
            backgroundColor: '#F6F8FA', 
            borderRadius: 8, 
            padding: 12, 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            }}>
                <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 20, 
                }}>
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'Jakarta-Medium', 
                        color: '#6B7280', 
                        }}>
                        Data e hora</Text>
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'Jakarta-Medium', 
                        color: '#6B7280', 
                        }}>
                       {formatDate(created_at)}, {formatTime(ride_time)}</Text>
                </View>

                <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 20, 
                }}>
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'JakartaMedium', 
                        color: '#6B7280', 
                        }}>
                        Conduzir</Text>
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'JakartaMedium', 
                        color: '#6B7280', 
                        }}>
                       {driver.first_name}, {driver.last_name}</Text>
                </View>
                <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 20, 
                }}>
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'JakartaMedium', 
                        color: '#6B7280', 
                        }}>
                        Carro</Text>
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'JakartaMedium', 
                        color: '#6B7280', 
                        }}>
                       {driver.car_seats}</Text>
                </View>
                <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 20, 
                }}
                >
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'Jakarta-Medium', 
                        color: '#6B7280', 
                        }}>
                        Estado do pagamento</Text>
                    <Text style={{
                        fontSize: 16, 
                        fontFamily: 'Jakarta-Medium', 
                        textTransform: 'capitalize', 
                        color: payment_status === "Pagas" ? '#10B981' : '#EF4444',
                        }}>
                       {payment_status}</Text>
                </View>
            </View>
        </View>
    </View>
)

export default RideCard;