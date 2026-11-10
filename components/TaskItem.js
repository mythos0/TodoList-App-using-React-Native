
import { View, Text, Pressable } from "react-native";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View className="flex-row items-center bg-white p-4 mb-3 rounded-2xl border border-slate-100">

      {/* Checkbox button */}
      <Pressable
        onPress={onToggle}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
        
        className={`w-7 h-7 rounded-full border-2 items-center justify-center mr-3 ${
          task.completed
            ? "bg-indigo-600 border-indigo-600"
            : "border-slate-300"
        }`}
      >
        {task.completed && (
          <Text className="text-white font-bold">✓</Text>
        )}
      </Pressable>

      {/* Task title */}
      <Text
        className={`flex-1 text-base ${
          task.completed
            ? "text-slate-400 line-through"
            : "text-slate-800"
        }`}
      >
        {task.title}
      </Text>

      {/* Delete button */}
      <Pressable
        onPress={onDelete}
        accessibilityRole="button"
        accessibilityLabel={`Delete ${task.title}`}
        className="bg-red-50 px-3 py-2 rounded-xl ml-3"
      >
        <Text className="text-red-500 font-semibold">
          Delete
        </Text>
      </Pressable>

    </View>
  );
}
