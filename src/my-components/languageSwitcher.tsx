import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="hide-cursor">
      <select
        className="hide-cursor bg-blue-950 text-white p-2 mb-2 border border-gray-700 rounded"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option className="hide-cursor" value="en">🇬🇧 English</option>
        <option className="hide-cursor" value="fr">🇫🇷 Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
