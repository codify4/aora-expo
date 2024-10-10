import EmptyState from '@/components/EmptyState'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import images from '@/constants/images'
import { getAllPosts } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import { Models } from 'react-native-appwrite'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch()
    setRefreshing(false);
  }
  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList 
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  Top Lali
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image 
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState 
            title='No videos found'
            subtitle='Be the first to upload a video'
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}
export default Home