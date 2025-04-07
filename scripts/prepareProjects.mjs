import fs from 'fs';
import fetch from 'node-fetch';

const strapiBaseURL = "http://127.0.0.1:1337"; // URL de ton serveur Strapi
const strapiEndpoint = "/api/projects?populate[Picture]=true&populate[technos]=true"; // API Strapi

const outputJsonPath = "./src/my-json/projects-strapi.json";

// Récupérer les données JSON depuis Strapi
async function fetchJsonData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération du fichier JSON :", error);
    return [];
  }
}

// Sauvegarder le fichier JSON
async function saveJsonData() {
  const response = await fetchJsonData(`${strapiBaseURL}${strapiEndpoint}`);
  const data=response.data
  if (data.length === 0) {
    console.warn("⚠️ Aucun projet trouvé dans Strapi");
    return;
  }
  fs.writeFileSync(outputJsonPath, JSON.stringify(data, null, 2));
  console.log("✅ Données récupérées et sauvegardées dans le fichier JSON !");
}

saveJsonData();
