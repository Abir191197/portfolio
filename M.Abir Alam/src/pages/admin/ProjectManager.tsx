'use client';

import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Edit2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Project {
  _id?: string;
  name: string;
  url: string;
  repo: string;
  img: string;
  year: string;
  tags: string[] | string;
}

interface ProjectManagerProps {
  token: string;
}

const ProjectManager: React.FC<ProjectManagerProps> = ({ token }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState<Project>({
    name: '',
    url: '',
    repo: '',
    img: '',
    year: '',
    tags: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:7000/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      toast.error('Failed to fetch projects');
    }
  };

  useEffect(() => {
    if (token) fetchProjects();
  }, [token]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert tags string to array
    const formattedData = {
      ...formData,
      tags:
        typeof formData.tags === 'string'
          ? formData.tags.split(',').map((tag) => tag.trim())
          : formData.tags,
    };

    try {
      const url = isEditing
        ? `http://localhost:7000/projects/${editingId}`
        : 'http://localhost:7000/projects';

      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) throw new Error('Failed to save project');

      toast.success(
        isEditing
          ? 'Project updated successfully'
          : 'Project created successfully'
      );
      fetchProjects();
      resetForm();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?'))
      return;

    try {
      const response = await fetch(`http://localhost:7000/projects/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete project');

      toast.success('Project deleted successfully');
      fetchProjects();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // Handle edit
  const handleEdit = (project: Project) => {
    setFormData({
      name: project.name,
      url: project.url,
      repo: project.repo,
      img: project.img || '',
      year: project.year,
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : '',
    });
    setEditingId(project._id || null);
    setIsEditing(true);
    setShowForm(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      url: '',
      repo: '',
      img: '',
      year: '',
      tags: '',
    });
    setIsEditing(false);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Project Management</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Hide Form' : 'Add New Project'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Project Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              placeholder="Project Live link"
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              name="repo"
              value={formData.repo}
              onChange={handleInputChange}
              placeholder="Github Repository URL"
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              name="img"
              value={formData.img}
              onChange={handleInputChange}
                          placeholder="Cover Image URL (use unsplash.com/s3.amazonaws.com/imgbb.com)"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="Year"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Technology (comma-separated) eg. React, Node.js, MongoDB"
              className="border p-2 rounded"
              required
            />
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              {isEditing ? 'Update Project' : 'Create Project'}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{project.name}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <Edit2 size={20} />
                </button>
                <button
                  onClick={() => handleDelete(project._id!)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            {project.img && (
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <p className="text-gray-600 text-sm mb-2">Year: {project.year}</p>
            <div className="flex flex-wrap gap-1">
              {Array.isArray(project.tags) &&
                project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManager;
