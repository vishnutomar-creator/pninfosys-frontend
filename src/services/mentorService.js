import api from "@/lib/api";

// Create Mentor
export const createMentor = async (data) => {
  return await api.post("/mentors", data);
};

// Get All Mentors
export const getMentors = async () => {
  return await api.get("/mentors");
};

// Get Single Mentor
export const getMentor = async (id) => {
  return await api.get(`/mentors/${id}`);
};

// Update Mentor
export const updateMentor = async (id, data) => {
  return await api.put(`/mentors/${id}`, data);
};

// Delete Mentor
export const deleteMentor = async (id) => {
  return await api.delete(`/mentors/${id}`);
};