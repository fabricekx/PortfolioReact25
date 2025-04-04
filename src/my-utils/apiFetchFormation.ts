import axios from "axios";

const API_URL = "http://localhost:1337/api/formations"; // ne pas oublier de donner les autorisations dans settings

export const fetchFormations = async () => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response)
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    return [];
  }
};