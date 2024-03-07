import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => navigate("/")}>ログイン</button>
    </div>
  );
};

export default Login;
