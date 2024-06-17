// const BASE_URL = 'https://s1backend1.onrender.com/'; 

export const getSportByCategory = async (category) => {
  try {
    const response = await fetch(`https://s1backend1.onrender.com/api/v1/posts/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts by category');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch posts by category');
  }
};
