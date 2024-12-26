export const fetchBlogs = async () => {
  try {
    const response = await fetch('http://localhost:7000/blogs');
    if (!response.ok) throw new Error('Failed to fetch blogs');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const fetchSingleBlog = async (id: string) => {
  const response = await fetch(`http://localhost:7000/blogs/${id}`); // Your backend API URL
  try {
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
