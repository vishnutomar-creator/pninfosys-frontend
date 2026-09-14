import api from "@/lib/api";

// Get All Projects
export const getProjects = async () => {
  return await api.get("/projects");
};

// Get Single Project
export const getProject = async (id) => {
  return await api.get(`/projects/${id}`);
};

// Create Project
export const createProject = async (formData) => {
  return await api.post("/projects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Project
export const updateProject = async (id, formData) => {
  return await api.put(`/projects/${id}`, formData);
};

// Delete Project
export const deleteProject = async (id) => {
  return await api.delete(`/projects/${id}`);
};