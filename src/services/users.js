import api from "./api";

export const apiGetAllUsers = () => {
  return api.get('/users')
};

export const apiGetOneUser = (user_id) => {
  api.get(`/users/${user_id}`)
};

export const apiCreateUser = (params = {}) => {
  api.post('/users', { params })
};

export const apiUpdateUser = (user_id, user) => {
  api.put(`/users/${user_id}`, { user })
};

export const apiDeleteUser = (user_id) => {
  api.delete(`/users/${user_id}`)
};