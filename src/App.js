import React from 'react';
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";
import ThemeContextProvider from "./Contexts/ThemeContext";
import AuthContextProvider from "./Contexts/AuthContext";
import TodoListContextProvider from "./Contexts/TodoListContext";

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
          <AuthContextProvider>
              <TodoListContextProvider>
                  <ThemeContextProvider>
                      <Navbar/>
                      <TodoList/>
                  </ThemeContextProvider>
              </TodoListContextProvider>
          </AuthContextProvider>


      </div>
    </div>
  );
}

export default App;
