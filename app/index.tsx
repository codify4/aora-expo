import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    return (
        <View style={styles.container}>
            <Text>TopLali</Text>
            <StatusBar />
            <Link href="/profile">Go to profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })