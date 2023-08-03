import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { BaseSyntheticEvent } from 'react'
import { useForm, Controller, FieldValues } from "react-hook-form";
import LinearGradient from 'react-native-linear-gradient';

const Login = (props:any) => {
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
        Login
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="User Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}


        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            margin: 10,
            backgroundColor: '#02d914',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Login</Text>
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

export default Login