import Axios from 'axios';

const baseUrl = 'https://api-test-euax.herokuapp.com';

export const newProject = async (name, startDate, endDate) => {
  const files = { name, startDate, endDate };
  return Axios.post(`${baseUrl}/store`, files).then((resp) => resp.data);
};

export const newActivity = async (name, idProject, startDate, endDate) => {
  const files = { name, idProject, startDate, endDate };
  return Axios.post(`${baseUrl}/activies/store`, files).then(
    (resp) => resp.data
  );
};

export const getProjects = async (id) => {
  if (!id) return Axios.get(`${baseUrl}/`).then((resp) => resp.data);
  return Axios.get(`${baseUrl}/${id}`).then((resp) => resp.data);
};

export const getActivies = async (id) =>
  Axios.get(`${baseUrl}/activies/${id}`).then((resp) => resp.data);

export const delProject = async (id) => {
  Axios.delete(`${baseUrl}/del/${id}`);
  Axios.delete(`${baseUrl}/activies/project/${id}`);
};

export const changeState = async (id) =>
  Axios.put(`${baseUrl}/activies/${id}`).then((resp) => resp.data);
