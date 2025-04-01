import axios from "axios";

const API_URL = "http://localhost:1337/api/Projects"; // Remplace "articles" par ta collection

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    return [];
  }
};