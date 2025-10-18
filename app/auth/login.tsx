import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: FormData) => alert(JSON.stringify(data));

  return (
    <View className="flex-1 justify-center items-center">
      <View className="justify-center items-center w-full m-3 p-3">
        <Text className="text-2xl mb-3">Login</Text>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "El formato del email no es válido",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="p-2 border rounded-md my-3 w-full"
              placeholder="example@example.com"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text className="text-red-500">{errors.email.message}</Text>
        )}

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="p-2 border rounded-md my-3 w-full"
              placeholder="•••••••••"
              keyboardType="default"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text className="text-red-500">{errors.password.message}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-blue-600 m-3 py-3 px-2 rounded-md"
        >
          <Text className="text-white text-center text-base font-medium">
            Iniciar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
