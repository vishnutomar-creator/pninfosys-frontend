import api from "@/lib/api";

// Get All Courses
export const getCourses = async () => {
  return await api.get("/courses");
};

// Get Single Course
export const getCourse = async (id) => {
  return await api.get(`/courses/${id}`);
};

// Create Course
export const createCourse = async (formData) => {
  return await api.post("/courses", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Course
export const updateCourse = async (id, formData) => {
  return await api.put(`/courses/${id}`, formData);
};

// Delete Course
export const deleteCourse = async (id) => {
  return await api.delete(`/courses/${id}`);
};