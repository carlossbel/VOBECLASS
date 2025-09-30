import React, { useState } from "react";

// 🌙 Navbar con modo oscuro
function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className={`p-4 flex justify-between ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
      <h1 className="font-bold">My React App</h1>
      <button 
        onClick={toggleTheme} 
        className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

// 🔢 Contador
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl mb-2">Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-green-500 text-white rounded m-1">+</button>
      <button onClick={() => setCount(count - 1)} className="px-3 py-1 bg-red-500 text-white rounded m-1">-</button>
      <button onClick={() => setCount(0)} className="px-3 py-1 bg-gray-500 text-white rounded m-1">Reset</button>
    </div>
  );
}

// ✅ To-Do List
function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">To-Do List</h2>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        className="border p-2 mr-2"
        placeholder="Write a task..."
      />
      <button onClick={addTask} className="px-3 py-1 bg-blue-500 text-white rounded">Add</button>
      <ul className="mt-3">
        {tasks.map((t, i) => (
          <li key={i} className="border-b py-1">{t}</li>
        ))}
      </ul>
    </div>
  );
}

// 🔎 Buscador en lista
function ProductSearch() {
  const products = ["Table", "Chair", "Lamp", "Sofa", "Bed"];
  const [query, setQuery] = useState("");

  const filtered = products.filter(p => p.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Search Products</h2>
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2"
        placeholder="Search..."
      />
      <ul className="mt-3">
        {filtered.map((p, i) => (
          <li key={i} className="border-b py-1">{p}</li>
        ))}
      </ul>
    </div>
  );
}

// 📩 Formulario con validación
function ContactForm() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || msg.trim() === "") {
      setError("All fields are required!");
      return;
    }
    alert(`Message sent!\nFrom: ${name}\nMessage: ${msg}`);
    setName("");
    setMsg("");
    setError("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Contact Form</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
          placeholder="Your name"
        />
        <textarea 
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="border p-2"
          placeholder="Your message"
        />
        <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">Send</button>
      </form>
    </div>
  );
}

// 🚀 App principal
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Counter />
        <TodoList />
        <ProductSearch />
        <ContactForm />
      </div>
    </div>
  );
}
