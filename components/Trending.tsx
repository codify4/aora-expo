import { icons } from '@/constants';
import { useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Models } from 'react-native-appwrite';



const TrendingItem = ({ activeItem, item }: { activeItem: Models.Document, item: Models.Document }) => {
    const [play, setPlay] = useState(false);
    
    console.log(activeItem.$id, item.$id)
    return (
        <Animatable.View 
            className='mr-5'
            animation={activeItem.$id === item.$id ? 'zoomIn' : 'zoomOut'}
        >

            {play ? (
                <Text className='text-white'>Playing</Text>
            ) : (
                <TouchableOpacity 
                    className='relative justify-center items-center'
                    activeOpacity={0.7}
                    onPress={() => setPlay(true)}
                >
                    <ImageBackground
                        source={{ uri: item.thumbnail }}
                        className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
                        resizeMode='cover'
                    />

                    <Image 
                        source={icons.play}
                        className='w-12 h-12 absolute'
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}

        </Animatable.View>
    );
}

const Trending = ({ posts }: { posts: Models.Document[] }) => {
    const [activeItem, setActiveItem] = useState(posts[0]);
    
    const viewableItemsChanged = ({ viewableItems }: { viewableItems: any[] }) => {
        if(viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key);
        };
    }
    return (
        <FlatList 
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem
                    activeItem={activeItem}
                    item={item}
                />
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
            }}
            contentOffset={{ x: 170, y: 0 }}
            horizontal
        />
    )
}

export default Trending