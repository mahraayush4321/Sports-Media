const BASE_URL = 'http://localhost:3001'; 

export const getSportByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/posts/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts by category');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch posts by category');
  }
};
