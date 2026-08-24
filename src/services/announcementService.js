import api from "@/lib/api";

// Get Active Announcement
export const getAnnouncement = async () => {
  return await api.get("/announcements/get");
};

// Create Announcement
export const createAnnouncement = async (text) => {
  return await api.post("/announcements/create", { text });
};

// Update Announcement
export const updateAnnouncement = async (id, data) => {
  return await api.put(`/announcements/update/${id}`, data);
};