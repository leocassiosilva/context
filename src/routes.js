import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Pages/Home';
import { DadosProfissionais } from './Pages/DadosProfissionais';
import { Info } from './Pages/Info';



const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}  options={{ headerShown: false  }}  />
            <Stack.Screen name='DadosProfissionais' component={DadosProfissionais}  options={{ title: "Informações Profissionais", headerShown: true  }}  />
            <Stack.Screen name='Info' component={Info}  options={{ title: "Dados Usuario", headerShown: true  }}  />

        </Stack.Navigator>
    );
}