import "./App.css";
import { Home, About, Contacts,User } from "./pages";
import { Routes, Route, } from "react-router-dom";
import { Layout } from "./layout/layout";

function App() {
  return (
   
      
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path='user/:id' element={<User/>}/>
        </Route>
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>

      
  );
}

export default App;
