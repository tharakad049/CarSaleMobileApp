import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button(bgColor, btnLabel, textColor) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: bgColor,
                borderR: 100,
                alignItems: 'center',
                width: 350,
            }}>
            <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    )
}