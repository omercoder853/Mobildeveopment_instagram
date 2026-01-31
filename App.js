import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import {styles} from "./myStyles/global";
import { Ionicons, Feather, MaterialIcons, AntDesign,EvilIcons ,Octicons} from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
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
            <View style={styles.story}>
              <Image source={require('./images/images.png')} style={styles.storyImage}/>
              <Text>username</Text>
            </View>
            <View style={styles.story}>
              <Image source={require('./images/images.png')} style={styles.storyImage}/>
              <Text>username</Text>
            </View>
            <View style={styles.story}>
              <Image source={require('./images/images.png')} style={styles.storyImage}/>
              <Text>username</Text>
            </View>
            <View style={styles.story}>
              <Image source={require('./images/images.png')} style={styles.storyImage}/>
              <Text>username</Text>
            </View>
          </View>
          <View style={styles.postArea}>
            <View style={styles.profileInfo}>
              <Image style={{width:30,height:30,borderRadius:15}} source={{uri : 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'}}/>
              <Text style={{marginLeft:10}}>username</Text>
            </View>
            <Image style={{width:'100%',height:300}} source={{uri: 'https://images.unsplash.com/photo-1602018979916-2dc45cb2e10c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
            <View style={styles.post_details}>
              <Feather name="heart" size={20} color="black" />
              <Text style={{marginRight:5}}>289</Text>
              <EvilIcons name="comment" size={24} color="black" />
              <Text style={{marginRight:5}}>50</Text>
              <Feather name="send" size={20} color="black" />
              <Feather name="save" size={24} color="black" style={{marginLeft:'auto'}}/>
            </View>
            <Text>username  • What a beautiful view! ✨ There’s something truly magical about watching the sunset over the Galata Tower. It’s not just a monument; it’s the heartbeat of Istanbul, standing tall and proud through the ages. Feeling so lucky to witness this timeless beauty tonight. ❤️🏙️</Text>
          </View>
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
