import { useAuth } from "@/src/store/auth.store";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/auth/login");
  };

  return (
    <View>
      <Text>Este es el Home</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-600 m-3 py-3 px-2 rounded-md"
      >
        <Text className="text-white text-center text-base font-medium">
          Cerrar Sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}
