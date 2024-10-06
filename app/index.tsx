import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    return (
        <View className="flex flex-1 items-center justify-center">
            <Text className='font-bold text-2xl text-red-700'>TopLali</Text>
            <StatusBar />
            <Link href="/profile">Go to profile</Link>
        </View>
    );
}