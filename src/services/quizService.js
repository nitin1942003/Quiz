import axios from 'axios';

const API_URL = 'https://api.jsonserve.com/Uw5CrX';

const quizData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw error;
  }
};

export default quizData;