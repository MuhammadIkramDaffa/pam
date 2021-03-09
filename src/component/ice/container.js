import React from 'react'
import { View, Text , Button, Image } from 'react-native'
import {useSelector , useDispatch } from 'react-redux'
import Action from '../../redux/ice/actionPKanan'
import Action2 from '../../redux/ice/actionPKiri'

const rotate = () => {
    const data = useSelector(state => state.stock )
    const dispatch = useDispatch() 
    
    return (
        <View style={{alignItems:"center"}}>
            
            <Button title="Putar ke kanan" color="blue" onPress={() => dispatch(Action())} />
            <Button title="Putar ke kiri" color="blue" onPress={() => dispatch(Action2())} />
            <Image
                source={{ uri: 'http://pngimg.com/uploads/football/football_PNG52775.png' }}
                style={{ transform:[{rotate:data+'deg'}], width: 100, height: 100 }}
            />
            <Text>Jika ke arah kiri maka sufut akan dikurang 10 derajat, Jika ke arah kanan sudut ditambah 10 derajat</Text>
            <Text>sudut yang telah di putar : {data}</Text>
            
            
        </View>
    )
}

export default rotate
