import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect , router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '@/context/GlobalProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Welcome() {
    const { isLoading, isLoggedIn } = useGlobalContext();

    if(!isLoading && isLoggedIn) {
        return <Redirect href='/home' />;
    }
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='w-full justify-center items-center min-h-[85vh] px-4'>
                    <Image 
                        source={images.logo}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />

                    <Image 
                        source={images.cards}
                        className='max-w-[380px] w-full h-[300px]'
                        resizeMode='contain'
                    />
                    <View className='relative mt-5'>
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Infinite{"\n"}
                            Possibilities with{" "}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                    </View>

                    <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where creativity meets innovation: emark on a journey with endless possibilities with Aora</Text>

                    <CustomButton 
                        title='Continue with Email'
                        handlePress={() => router.push('/sign-in')}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}