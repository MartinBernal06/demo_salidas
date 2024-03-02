import React from 'react'
import { NativeRouter } from 'react-router-native'
import MenuNavigate from './src/components/Menu'
import { View } from 'react-native-web'
import BottomNav from './src/components/Bottom-Nav'

export default function App() {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <MenuNavigate />
      </View>
    </NativeRouter>
  )
}