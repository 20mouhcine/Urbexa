import { Link } from "expo-router";
import { Dimensions, Image, Text, View } from "react-native";

const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 2.5;

export default function Welcome() {
  return (
    <View className="flex-1 bg-blue-950">
      {/* White circle section */}
      <View
        style={{
          height: CIRCLE_SIZE * 0.45, // visible height of circle section
          width: "100%",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            borderRadius: CIRCLE_SIZE / 2,
            backgroundColor: "white",
            position: "absolute",
            top: -CIRCLE_SIZE * 0.55,
            left: (width - CIRCLE_SIZE) / 2,
          }}
        />
        <Image
          source={require("../../assets/images/image.png")}
          resizeMode="contain"
          className="mt-24 flex-1"
        />
      </View>

      {/* Content automatically flows under the white circle */}
      <View className="flex-1 justify-center items-center gap-5">
        <Text className="text-4xl font-bold text-white text-center mb-10">
          Trouvez un professionnel en quelques minutes!
        </Text>

        <Text className="text-white text-center text-xl">
          Réparations, installations et services à domicile — simples, rapides
          et fiables.
        </Text>

        <Link
          href="/register"
          className="bg-blue-600 px-10 py-6 rounded-full mt-5 hover:scale-50 text-white text-xl font-semibold"
        
        >
          Commencer
        </Link>
      </View>
    </View>
  );
}
