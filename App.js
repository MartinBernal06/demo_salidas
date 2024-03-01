import React from 'react'
import { NativeRouter } from 'react-router-native'
import BottomTabs from './src/components/Bottom-Tabs'
import Header from './src/components/Header-App'
import { View } from 'react-native-web'

export default function App() {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <Header />
        <BottomTabs />
      </View>
    </NativeRouter>
  )
}