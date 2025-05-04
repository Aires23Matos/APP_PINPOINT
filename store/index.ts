import {create} from 'zustand';
import { DriverStore, LocationStore, MarkerData } from '@/types/type';
import 'react-native-get-random-values';

export const useLocationsStore = create<LocationStore>((set) => ({
    userAddress: null,
    userLongitude: null,
    userLatitude: null,
    destinationLongitude: null,
    destinationLatitude: null,
    destinationAddress: null,
    setUserLocation: ({latitude, longitude, address}: {latitude: number, longitude: number, address:string}) => { 
        set(() => ({
            userLatitude: latitude,
            userLongitude: longitude,
            userAddress: address,
        }));
    },
    setDestinationLocation: ({latitude, longitude, address}: {latitude: number, longitude: number, address:string}) => {
        set(() => ({
            destinationLatitude: latitude,
            destinationLongitude: longitude,
            destinationAddress: address,
        }));
    }
}));

export const useDriverStore = create<DriverStore>((set) => ({
    drivers: [] as MarkerData[],
    selectedDriver: null,
    setSelectedDriver: (driverId: number) => set(() => ({
        selectedDriver: driverId
    })),
    setDrivers: (drivers: MarkerData[]) => set(() => ({drivers: drivers})),
    clearSelectedDriver:() => set(() =>  ({selectedDriver: null}))

}));