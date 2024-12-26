import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-hot-toast';
import { Trash2, Edit2 } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import with ssr disabled
const ReactQuill = dynamic(
  () => import('react-quill'),
  { ssr: false } // This disables server-side rendering for this component
);

interface Blog {
  _id?: string;
  title: string;
  description: string;
  topic: string;
  img: string;
  readTime: string;
}

interface BlogManagerProps {
  token: string;
}

const BlogManager: React.FC<BlogManagerProps> = ({ token }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData, setFormData] = useState<Blog>({
    title: '',
    description: '',
    topic: '',
    img: '',
    readTime: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:7000/blogs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data: Blog[] = await response.json();
      setBlogs(data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) fetchBlogs();
  }, [token]);

  // Handle form changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle ReactQuill changes
  const handleQuillChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  // Handle submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const url = isEditing
        ? `http://localhost:7000/blogs/${editingId}`
        : 'http://localhost:7000/blogs';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save blog');
      toast.success(
        isEditing ? 'Blog updated successfully' : 'Blog created successfully'
      );
      setFormData({
        title: '',
        description: '',
        topic: '',
        img: '',
        readTime: '',
      });
      setEditingId(null);
      setIsEditing(false);
      setShowForm(false);
      fetchBlogs();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // Handle edit
  const handleEdit = (blog: Blog) => {
    setFormData(blog);
    setEditingId(blog._id || null);
    setIsEditing(true);
    setShowForm(true);
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`http://localhost:7000/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error('Failed to delete blog');
      toast.success('Blog deleted successfully');
      fetchBlogs();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // Custom toolbar for ReactQuill
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['blockquote', 'code-block'],
      ['image'],
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Hide Form' : 'Add New Blog'}
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
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Blog Title"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              placeholder="Topic eg. Web Development/technology/Self-improvement"
              className="border p-2 rounded"
              required
            />
            <input
              type="url"
              name="img"
              value={formData.img}
              onChange={handleInputChange}
              placeholder="Image URL => use unsplash.com/s3.amazonaws.com/imgbb.com "
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="readTime"
              value={formData.readTime}
              onChange={handleInputChange}
              placeholder="Read Time eg. 5 mins"
              className="border p-2 rounded"
              required
            />
          </div>
          <ReactQuill
            value={formData.description}
            onChange={handleQuillChange}
            className="mt-4"
            placeholder="Blog Description"
            modules={modules} // Apply custom toolbar options
          />
          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              {isEditing ? 'Update Blog' : 'Create Blog'}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <Edit2 size={20} />
                </button>
                <button
                  onClick={() => handleDelete(blog._id!)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <p className="text-gray-600 text-sm mb-2">{blog.topic}</p>
            <p className="text-gray-600 text-sm mb-2">
              Read Time: {blog.readTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
