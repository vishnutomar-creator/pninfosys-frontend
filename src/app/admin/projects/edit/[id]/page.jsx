"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Upload, Save } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getProject, updateProject } from "@/services/projectService";

export default function EditProject() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const originalRef = useRef({
    title: "",
    category: "",
    description: "",
    techStack: "",
    link: "",
    status: "Active",
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getProject(id);
        const data = res?.data?.project || res?.data?.data || res?.data;

        const fetchedTitle = data.title || "";
        const fetchedCategory = data.category || "";
        const fetchedDescription = data.description || "";
        const fetchedTechStack = Array.isArray(data.techStack)
          ? data.techStack.join(", ")
          : data.techStack || "";
        const fetchedLink = data.link || "";
        const fetchedStatus = data.status || "Active";

        setTitle(fetchedTitle);
        setCategory(fetchedCategory);
        setDescription(fetchedDescription);
        setTechStack(fetchedTechStack);
        setLink(fetchedLink);
        setStatus(fetchedStatus);
        setPreview(data.image || null);

        originalRef.current = {
          title: fetchedTitle,
          category: fetchedCategory,
          description: fetchedDescription,
          techStack: fetchedTechStack,
          link: fetchedLink,
          status: fetchedStatus,
        };
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      const original = originalRef.current;

      if (title !== original.title) formData.append("title", title);
      if (category !== original.category) formData.append("category", category);
      if (description !== original.description) formData.append("description", description);
      if (link !== original.link) formData.append("link", link);
      if (status !== original.status) formData.append("status", status);

      if (techStack !== original.techStack) {
        techStack
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
          .forEach((t) => formData.append("techStack[]", t));
      }

      if (image) {
        formData.append("image", image);
      }

      let hasChanges = false;
      for (const _ of formData.keys()) {
        hasChanges = true;
        break;
      }
      if (!hasChanges) {
        setLoading(false);
        router.push("/admin/projects");
        return;
      }

      await updateProject(id, formData);

      alert("Project Updated Successfully");
      router.push("/admin/projects");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to update project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">Edit Project</h1>
          <p className="text-gray-500 mt-1">Fill the details below to edit project.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-200 p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Project Title</label>
              <input
                type="text"
                placeholder="Enter project title"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <input
                type="text"
                placeholder="e.g. Web Development, ERP Solution, Mobile App"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                rows={5}
                placeholder="Write project description..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Tech Stack (comma-separated)
              </label>
              <input
                type="text"
                placeholder="e.g. React, Node.js, MongoDB"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Project Link (optional)
              </label>
              <input
                type="text"
                placeholder="https://..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Status</label>
              <select
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
                onClick={() => router.push("/admin/projects")}
              >
                Cancel
              </button>

              <button
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                onClick={handleUpdate}
                disabled={loading}
              >
                <Save size={18} />
                {loading ? "Updating..." : "Save Project"}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="font-semibold mb-4">Project Image</h2>

            <label className="border-2 border-dashed border-gray-300 rounded-xl h-60 flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 transition">
              <Upload size={40} className="text-gray-400 mb-3" />
              <p className="font-medium text-gray-700">Click to upload image</p>
              <p className="text-sm text-gray-400 mt-1">PNG, JPG or WEBP</p>

              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="font-semibold mb-4">Preview</h2>

            <div className="rounded-xl border overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  "Image Preview"
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">{title || "Project Title"}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {description || "Your description will appear here..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}