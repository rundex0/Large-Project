import React, { useEffect, useState } from "react";
import axios from 'axios';
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GroupChat from "./pages/GroupChat";

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api');
      setApiData(response.data);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  const addData = async (newUser) => {
    try {
      const response = await axios.post('http://localhost:3001/api', newUser);
      setApiData([...apiData, response.data]); // Add the new user to the local state
    } catch (error) {
      console.error('Failed to post data', error);
    }
  };

  const updateData = async (id) => {
    try {
      const updatedUser = {
        // Fill in the updated user data here
      };
      await axios.put(`http://localhost:3001/api/${id}`, updatedUser);
      // Update the local state here if necessary
    } catch (error) {
      console.error('Failed to update data', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/${id}`);
      // Update the local state here if necessary
    } catch (error) {
      console.error('Failed to delete data', error);
    }
  };

  useEffect(() => {
    fetchData();
    const newUserExample = {
      "name": "Stephen Martin",
      "username": "IPlayFootball",
      "email": "football@ucf.edu",
      "password": "GoKnightsIPlayFootball42",
      "profilePicture": "https://example.com/profile.jpg",
      "friendList": [
        456,
        789,
        1234
      ]      
    };
    addData(newUserExample); // example of adding a newUser
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div>
      {/* Example render of api data */}
      {/* <div>
        {data.map((item) => (
          <div key={item._id}>{item.name}</div>
        ))}
      </div> */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<GroupChat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;