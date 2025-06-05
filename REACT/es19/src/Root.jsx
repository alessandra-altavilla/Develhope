import { Routes, Route } from "react-router-dom";
import GithubUsers from "./GithubUsers";

const Root = () => {
  return (
    <Routes>
      <Route path="user" element={<GithubUsers />} /> 
    </Routes>
  );
};

export default Root;
