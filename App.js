import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView,RefreshControl,FlatList } from 'react-native';
import {styles} from "./myStyles/global";
import { Ionicons, Feather, MaterialIcons, AntDesign,EvilIcons ,Octicons} from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  // useState 2 eleman döner mevcut değer (şu an için false) , onu değiştirecek fonksiyon (örneğin : setrefreshing(true))
  const [refreshing,setrefreshing] = React.useState(false)
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {setrefreshing(false)},1500)}
    
  const posts = [{id:"1",username:"omrfrk" , profile:"https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", likes:"120" , comments:"12",post_desc:"Bugün de güzel bir an biriktirdik ✨",
    post_img:"https://images.unsplash.com/photo-1602018979916-2dc45cb2e10c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"2",username:"tolgagrgn" , profile:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", likes:"56" , comments:"9",post_desc:"Kafam dolu ama manzara iyi 😌",
    post_img:"https://plus.unsplash.com/premium_photo-1664115470179-df1af1652aed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"3" , username:"srpblt",profile:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", likes:"254" , comments:"43", post_desc:"Bir kahve, biraz huzur ☕",
    post_img:"https://images.unsplash.com/photo-1498598457418-36ef20772bb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"4",username:"guldenozdmr" , profile:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , likes:"41" , comments:"4",post_desc:"Güneş batarken ben 🌅",
    post_img:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"5",username:"mlkclb",profile:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",likes:"12",comments:"1",post_desc:"Yol uzun, müzik iyi 🎧",
    post_img:"https://plus.unsplash.com/premium_photo-1664362416405-325a413a5623?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"6",username:"mhmtblt",profile:"https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",likes:"32",comments:"7",post_desc:"Anı yaşa, gerisi boş 🫶",
    post_img:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"7",username:"brkcpn",profile:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",likes:"652",comments:"142",post_desc:"Sessiz ama mutluyum",
    post_img:"https://images.unsplash.com/photo-1464757494038-157e877f60d4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"8",username:"barisdemir",profile:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",likes:"53",comments:"14",post_desc:"Şehir başka, vibe başka 🏙️",
    post_img:"https://images.unsplash.com/photo-1496304841270-2cb66cf766b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
                {id:"9",username:"cetinkarahan",profile:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",likes:"65",comments:"10" , post_desc:"Bugünlük bu kadar ✌️",
    post_img:"https://images.unsplash.com/photo-1506112573664-1a1b66d93ff3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]
  
    const Story = ({index,story}) => (
    <View key={index} style={styles.story}>
      <Image source={{uri:story.profile}} style={styles.storyImage}/>
      <Text>{story.username}</Text>
    </View>)

    const Post = ({post}) => (
      <View style={styles.postArea} key={post.id}>
          <View style={styles.profileInfo}>
            <Image style={{width:30,height:30,borderRadius:15}} source={{uri : post.profile}}/>
            <Text style={{marginLeft:10}}>{post.username}</Text>
          </View>
          <Image style={{width:'100%',height:300}} source={{uri: post.post_img}}/>
          <View style={styles.post_details}>
            <Feather name="heart" size={20} color="black" />
            <Text style={{marginRight:5}}>{post.likes}</Text>
            <EvilIcons name="comment" size={24} color="black" />
            <Text style={{marginRight:5}}>{post.comments}</Text>
            <Feather name="send" size={20} color="black" />
            <Feather name="save" size={24} color="black" style={{marginLeft:'auto'}}/>
          </View>
          <Text>{post.username} • {post.post_desc}</Text>
      </View>
    )
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="add" size={30} color="black" />
            <Text style={{fontSize:20}}>Instagram</Text>
            <AntDesign name="heart" size={30} color="black" />
          </View>
          <View style={{height:60}}></View>
          <View style={styles.storySection}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
              {posts.map((post,i)=>(
                <Story index={i} story={post} key={i}></Story>
              ))}
            </ScrollView>
          </View>
          <FlatList data={posts} renderItem={({item}) => (
            <Post post={item}></Post>)} keyExtractor={(item)=> item.id}/> 
          <View style={styles.footer}>
            <TouchableOpacity><Feather name="home" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity><Octicons name="search" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity><MaterialIcons name="add-circle" size={24} color="black" /></TouchableOpacity>  
            <TouchableOpacity><Ionicons name="play" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity><MaterialIcons name="account-circle" size={24} color="black" /></TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
