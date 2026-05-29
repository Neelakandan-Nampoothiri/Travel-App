import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Feather } from "@expo/vector-icons";
import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? "light"].tint;
  const tabBarActiveTintColor = tintColor;
  const tabBarInactiveTintColor = Colors[colorScheme ?? "light"].tabIconDefault;
  const tabBarBackgroundColor = Colors[colorScheme ?? "light"].background;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor,
        tabBarInactiveTintColor,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor,
          borderTopColor: Colors[colorScheme ?? "light"].border,
        },
        headerShown: false,
        tabBarIcon: ({ color, focused }) => {
          let iconName: keyof typeof Feather.glyphMap;

          if (route.name === "index") {
            iconName = focused ? "map-pin" : "map-pin";
          } else if (route.name === "home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "explore") {
            iconName = focused ? "compass" : "compass";
          } else {
            iconName = "circle";
          }

          return <Feather name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name="index"
        options={{
          title: "Trip Details",
        }}
      />
      <Tab.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tab.Navigator>
  );
}
