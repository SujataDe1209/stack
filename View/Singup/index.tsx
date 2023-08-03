import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { BaseSyntheticEvent } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form';

const Singup = (props:any) => {

    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors},
      } = useForm();
      function onSubmit(
        data: FieldValues,
        event?: BaseSyntheticEvent<object, any, any> | undefined,
      ): unknown {
        throw new Error('Function not implemented.');
      }

  return (
    <View>

<View>
<Text  style={{color:'black',fontSize:40,fontWeight:'800',
    padding:100,marginLeft:25}}>
        Singup
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="First Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="firstname"
        />
        { <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="Last Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="lastname"
        />
        { <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="email"
        />
        { <Text>This is required.</Text>}

        <Controller

          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="Passwoed"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
        { <Text>This is required.</Text>}



        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            margin: 10,
            backgroundColor: '#02d914',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>

</View>











       <TouchableOpacity  onPress={()=>props.navigation.navigate("Home")}
      style={{ margin: 10,
        backgroundColor: '#02d914',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',}}>
      <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Singup