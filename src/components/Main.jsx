import React from 'react'
import Salidas from './Salidas.jsx'
import Index from './Index.jsx'
import { Redirect, Route, Switch } from 'react-router-native'
import { View, Text } from 'react-native' 

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <Salidas />
            {/* <Switch>
                <Route path='/' exact>
                    <Index />
                </Route>
                <Route path='/Salidas' exact>
                    <Salidas />
                </Route>
                <Route path='/signin' exact>
                    <Text>Working on it</Text>
                </Route>
                <Redirect to='/' />
            </Switch> */}
        </View>
    )
}

export default Main