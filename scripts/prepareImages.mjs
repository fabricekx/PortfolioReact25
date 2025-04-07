import fs from 'fs';
import path from 'path';
import axios from 'axios';

const inputJsonPath = "./src/my-json/projects-strapi.json";
const outputImageDir = "./public/uploads";
const strapiBaseURL = "http://127.0.0.1:1337";

// Télécharger une image à partir d'une URL
async function downloadImage(url, outputPath) {
  const writer = fs.createWriteStream(outputPath);
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  return new Promise((resolve, reject) => {
    response.data.pipe(writer);
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

// Télécharger les images à partir du fichier JSON
async function downloadImagesFromJson() {
  if (!fs.existsSync(outputImageDir)) {
    fs.mkdirSync(outputImageDir, { recursive: true });
  }

  const rawData = fs.readFileSync(inputJsonPath, "utf-8");
  const data = JSON.parse(rawData);

  for (const project of data) {
    const picture = project.Picture;
    if (picture?.url) {
      const fullImageUrl = `${strapiBaseURL}${picture.url}`;
      const imageFileName = path.basename(picture.url);
      const localPath = path.join(outputImageDir, imageFileName);

      try {
        await downloadImage(fullImageUrl, localPath);
        picture.url = `/uploads/${imageFileName}`;
      } catch (err) {
        console.error(`❌ Erreur lors du téléchargement de l'image principale : ${fullImageUrl}`, err);
      }

      if (picture.formats) {
        for (const format in picture.formats) {
          const formatUrl = picture.formats[format].url;
          if (formatUrl) {
            const fullFormatUrl = `${strapiBaseURL}${formatUrl}`;
            const formatFileName = path.basename(formatUrl);
            const formatLocalPath = path.join(outputImageDir, formatFileName);

            try {
              await downloadImage(fullFormatUrl, formatLocalPath);
              picture.formats[format].url = `/uploads/${formatFileName}`;
            } catch (err) {
              console.error(`❌ Erreur lors du téléchargement du format d'image : ${fullFormatUrl}`, err);
            }
          }
        }
      }
    }
  }

  fs.writeFileSync(inputJsonPath, JSON.stringify(data, null, 2));
  console.log("✅ JSON mis à jour avec les chemins locaux et images téléchargées !");
}

downloadImagesFromJson();
