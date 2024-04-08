
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import { Navbar } from "./component/Navbar";
import { Profile } from "./pages/Profile";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Catfact } from "./pages/Catfact";
import { Provider } from "react-redux";
import { store } from "./component/store";
import { Login } from "./pages/Login";
import { CreatePost } from "./pages/post/create-post";
import { MsdLink } from "./pages/msdLink";

export const  AppContext =  createContext()

function App() {
  const [userName, setUserName] = useState("saipranay")
  const client = new QueryClient({defaultOptions: {
    // prevent the updation of data in frontend when the user switches the tab
    queries: {
      refetchOnWindowFocus :false,
    }
  }})
  return (
    <div className="App">
    <QueryClientProvider client={client}>
    <AppContext.Provider value={{userName,setUserName}}>
    <Provider store={store}>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/catfact" element={<Catfact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>
      <Route path="/msdlink" element={<MsdLink/>}/>
      <Route path="*" element={<h1 className="mt-4 font-bold text-3xl text-center p-4 text-deep-purple-600">Page is not found 404</h1>}/>
      
    </Routes>
    </Router>
    </Provider>
    </AppContext.Provider>
    </QueryClientProvider>
    </div>
  );
}

export default App;  
