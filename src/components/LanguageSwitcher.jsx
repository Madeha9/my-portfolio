// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mb-4 space-x-4">
      <button onClick={() => changeLanguage('en')} className="px-3 py-1 bg-blue-500 text-white rounded">EN</button>
      <button onClick={() => changeLanguage('de')} className="px-3 py-1 bg-gray-500 text-white rounded">DE</button>
    </div>
  );
};

export default LanguageSwitcher;
