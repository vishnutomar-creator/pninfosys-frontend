import api from "@/lib/api";

// Get All Placements
export const getPlacements = async () => {
  return await api.get("/placements");
};

// Get Single Placement
export const getPlacement = async (id) => {
  return await api.get(`/placements/${id}`);
};

// Create Placement
export const createPlacement = async (formData) => {
  return await api.post("/placements", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Placement
export const updatePlacement = async (id, formData) => {
  return await api.put(`/placements/${id}`, formData);
};

// Delete Placement
export const deletePlacement = async (id) => {
  return await api.delete(`/placements/${id}`);
};