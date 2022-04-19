import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://45.90.35.82:3333";

export default function Activate() {
  const navigate = useNavigate();
  const params = useParams();

  axios
    .post(`${baseUrl}/api/auth/refresh`)
    .then((response) => response.data)
    .then((data) => console.log(data));

  try {
    const activate = async (id) => {
      const response = await axios.post(`${baseUrl}/api/auth/activate`, {
        user: id,
      });
      console.log(response.data);
    };
    activate(params.id);
  } catch (error) {
    console.log(error.message);
  }

  useNavigate("/entrance");
  return <div></div>;
}
