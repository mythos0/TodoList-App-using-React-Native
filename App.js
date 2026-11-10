
// Load Uniwind's CSS file
import "./global.css";

// Import useState from React
import { useState } from "react";

// Import components from React Native
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StatusBar,
} from "react-native";

// Import our custom components
import TaskItem from "./components/TaskItem";
import TaskStats from "./components/TaskStats";

export default function App() {

  // Store the list of tasks
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Learn React Native",
      completed: false,
    },
    {
      id: "2",
      title: "Practice JavaScript",
      completed: true,
    },
    {
      id: "3",
      title: "Complete Lab Assignment",
      completed: false,
    },
  ]);

  // Store the text entered by the user
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {

    // Remove unnecessary spaces
    const taskTitle = newTask.trim();

    // Do not add an empty task
    if (taskTitle.length === 0) {
      return;
    }

    // Create a new task object
    const newTaskObject = {
      id: Date.now().toString(),
      title: taskTitle,
      completed: false,
    };

    // Add the new task to the existing list
    setTasks((currentTasks) => [
      ...currentTasks,
      newTaskObject,
    ]);

    // Clear the input field
    setNewTask("");
  };

  // Function to complete or uncomplete a task
  const toggleTask = (id) => {

    setTasks((currentTasks) =>
      currentTasks.map((task) => {

        // Find the task that was clicked
        if (task.id === id) {

          // Return a copy with the opposite completion status
          return {
            ...task,
            completed: !task.completed,
          };
        }

        // Keep other tasks unchanged
        return task;
      })
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {

    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  // Calculate the total number of tasks
  const totalTasks = tasks.length;

  // Calculate the number of completed tasks
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  // Calculate the number of remaining tasks
  const remainingTasks = totalTasks - completedTasks;


  // Display the application interface
  return (
    <View className="flex-1 bg-slate-50 px-5 pt-12">

      {/* Android/iOS status bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFC"
      />

      {/* Application header */}
      <View className="mb-7">
        <Text className="text-indigo-600 text-sm font-bold mb-2">
          MY PRODUCTIVITY
        </Text>

        <Text className="text-3xl font-bold text-slate-900">
          My Todo List
        </Text>

        <Text className="text-slate-500 mt-2">
          Organize your day, one task at a time.
        </Text>
      </View>


      {/* Task statistics */}
      <TaskStats
        total={totalTasks}
        completed={completedTasks}
        remaining={remainingTasks}
      />


      {/* Add new task section */}
      <View className="mb-6">

        <Text className="text-lg font-bold text-slate-800 mb-3">
          Add a new task
        </Text>

        <View className="flex-row gap-2">

          {/* Task input field */}
          <TextInput
            value={newTask}
            onChangeText={setNewTask}
            placeholder="What do you need to do?"
            placeholderTextColor="#94A3B8"
            className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800"
            onSubmitEditing={addTask}
            returnKeyType="done"
            autoCapitalize="sentences"
          />

          {/* Add button */}
          <Pressable
            onPress={addTask}
            accessibilityRole="button"
            className="bg-indigo-600 rounded-xl px-5 items-center justify-center active:bg-indigo-700"
          >
            <Text className="text-white font-bold text-base">
              Add
            </Text>
          </Pressable>

        </View>
      </View>


      {/* Task list heading */}
      <View className="flex-row justify-between items-center mb-3">

        <Text className="text-lg font-bold text-slate-800">
          Your Tasks
        </Text>

        <Text className="text-slate-500 text-sm">
          {remainingTasks} remaining
        </Text>

      </View>


      {/* Display all tasks */}
      <FlatList
        className="flex-1"
        data={tasks}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}

        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 24 }}

        // Display this when there are no tasks
        ListEmptyComponent={
          <View className="items-center justify-center py-12">

            <Text className="text-4xl mb-3">
              🎉
            </Text>

            <Text className="text-lg font-bold text-slate-700">
              No tasks yet!
            </Text>

            <Text className="text-slate-400 mt-2">
              Add a task to get started.
            </Text>

          </View>
        }
      />

    </View>
  );
}
