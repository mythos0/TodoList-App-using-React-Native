
import { View, Text } from "react-native";

export default function TaskStats({
  total,
  completed,
  remaining,
}) {
  return (
    <View className="flex-row gap-3 mb-6">

      {/* Total tasks card */}
      <View className="flex-1 bg-white p-3 rounded-2xl border border-slate-100">
        <Text className="text-slate-500 text-xs">
          Total
        </Text>

        <Text className="text-2xl font-bold text-slate-800 mt-1">
          {total}
        </Text>
      </View>

      {/* Completed tasks card */}
      <View className="flex-1 bg-white p-3 rounded-2xl border border-slate-100">
        <Text className="text-slate-500 text-xs">
          Completed
        </Text>

        <Text className="text-2xl font-bold text-green-600 mt-1">
          {completed}
        </Text>
      </View>

      {/* Remaining tasks card */}
      <View className="flex-1 bg-white p-3 rounded-2xl border border-slate-100">
        <Text className="text-slate-500 text-xs">
          Remaining
        </Text>

        <Text className="text-2xl font-bold text-indigo-600 mt-1">
          {remaining}
        </Text>
      </View>

    </View>
  );
}
