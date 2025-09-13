export const loadTodos = () => {
  try {
    const data = localStorage.getItem("todos");
    if (!data) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error("Error loading todos from localStorage", err);
    return [];
  }
};

export const saveTodos = (todos) => {
  try {
    const str = JSON.stringify(todos);
    localStorage.setItem("todos", str);
  } catch (err) {
    console.error("Error saving todos to localStorage", err);
  }
};
