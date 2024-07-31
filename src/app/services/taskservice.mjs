import { supabase } from "./supabaseclient";

// services/taskservice.mjs

export const addTask = async (task) => {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .insert([task])
      .single(); // Single to insert a single record

    if (error) {
      throw new Error(error.message);
    }
    return data; // Return the inserted task
  } catch (error) {
    console.error("Error adding task:", error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

export const fetchTasks = async () => {
  try {
    const { data, error } = await supabase.from("tasks").select("*");

    if (error) {
      throw new Error(error.message);
    }
    return data; // Return fetched tasks
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    throw error; // Rethrow to handle in the calling function
  }
};

export const updateTaskStatus = async (taskId, newStatus) => {
  const { data, error } = await supabase
    .from("tasks")
    .update({ status: newStatus })
    .match({ id: taskId });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
