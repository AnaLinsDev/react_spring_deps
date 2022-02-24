import axios from "axios";
import { currentUser } from "./AuthService";

var tokenExists = false

const apiURL = "https://back-eventos-deps.herokuapp.com/event/"

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


export const findAllEvents = async () => {
  if (tokenExists === false) setToken(currentUser.token);

  const url = "readall/";
  const response = await defaultAxios.get(url);
  return response.data;
};

export const createEvent = async (event) => {
  if (tokenExists === false) setToken(currentUser.token);
  delete event["id"]
  const url =  `create/${currentUser.user.id}/`;
  const response =  defaultAxios.post(url, event);
  return response;
};

export const updateEvent = async (id, newEvent) => {
  if (tokenExists === false) setToken(currentUser.token);

  const url = `update/${id}/`;
  await defaultAxios.put(url, newEvent);
};

export const deleteEvent = async (id) => {
  if (tokenExists === false) setToken(currentUser.token);

  const url = `delete/${id}/${currentUser.user.id}`;
  await defaultAxios.delete(url);
};
