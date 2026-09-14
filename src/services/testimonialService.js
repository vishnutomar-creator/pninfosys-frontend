import api from "@/lib/api";

// Get All Testimonials
export const getTestimonials = async () => {
  return await api.get("/testimonials");
};

// Get Single Testimonial
export const getTestimonial = async (id) => {
  return await api.get(`/testimonials/${id}`);
};

// Create Testimonial
export const createTestimonial = async (formData) => {
  return await api.post("/testimonials", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Testimonial
export const updateTestimonial = async (id, formData) => {
  return await api.put(`/testimonials/${id}`, formData);
};

// Delete Testimonial
export const deleteTestimonial = async (id) => {
  return await api.delete(`/testimonials/${id}`);
};