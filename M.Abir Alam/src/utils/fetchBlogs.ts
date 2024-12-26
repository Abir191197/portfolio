export const fetchBlogs = async () => {
  try {
    const response = await fetch('https://portfolio-dnjj.vercel.app/blogs');
    if (!response.ok) throw new Error('Failed to fetch blogs');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const fetchSingleBlog = async (id: string) => {
  const response = await fetch(
    `hhttps://portfolio-dnjj.vercel.app/blogs/${id}`
  ); // Your backend API URL
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
