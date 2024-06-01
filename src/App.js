import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import TableBook from "./pages/TableBook";

const App = () => {
  const queryClient = new QueryClient();
  return (
        <QueryClientProvider client={queryClient}>
          <div>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/table" element={<TableBook />} />
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </QueryClientProvider>
  );
};

export default App;
