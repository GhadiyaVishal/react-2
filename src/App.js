import React, { useState, useEffect } from "react";
import "./App.css";
import Users from "./component/Users";
import { fetchData } from "./api";

const App = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setDetail(res.data);
      // console.log(res.data);
    };
    getData();
  }, []);

  const handleDelete = id => {
    const newUserList = detail.filter(item => item.id !== id);
    setDetail(newUserList);
  };

  const editUser = ({ user, index, callback }) => {
    const newUserList = detail;
    newUserList[index] = user;
    setDetail({ detail: newUserList }, () => callback && callback());
  };

  return (
    <>
      <Users users={detail} handleDelete={handleDelete} editUser={editUser} />
    </>
  );
};

export default App;
