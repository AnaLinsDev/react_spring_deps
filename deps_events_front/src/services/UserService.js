import axios from "axios";
import { currentUser } from "./AuthService";

var tokenExists = false

const apiURL = "https://back-eventos-deps.herokuapp.com/"

var defaultAxios = axios.create({
  baseURL: apiURL
});

export const setToken = (token) => {
  defaultAxios = axios.create({
    baseURL: apiURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  tokenExists = true
};

const midURL = "user/"

export const logIn = (user) => {
  const url = apiURL + "login";
  return axios.post(url, user);
};

export const findAllUsers = async () => {
  if (tokenExists === false) setToken(currentUser.token);
  const url = midURL + "readall/";
  const response = await defaultAxios.get(url);
  return response.data;
};

export const createUser = (user) => {
  const url = apiURL + "register";
  return axios.post(url, user);
};

export const updateUser = async (id, newUser) => {
  if (tokenExists === false) setToken(currentUser.token);
  const url = midURL + `update/${id}/`;
  await defaultAxios.put(url, newUser);
};

export const deleteUser = async (id) => {
  if (tokenExists === false) setToken(currentUser.token);
  const url = midURL + `delete/${id}`;
  await defaultAxios.delete(url);
};
