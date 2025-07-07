import React from 'react';
import { useTranslation } from 'react-i18next';
import myPhoto from '../assets/me.jpg';

function Home() {
  const { t } = useTranslation();

  return (
   <div className="min-h-screen bg-white bg-opacity-80 flex flex-col items-center justify-center p-6">
      <img
        src={myPhoto}
        alt="Madeha"
        className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800">{t('home.greeting')}</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mt-4">
        {t('home.description')}
      </p>
    </div>
  );
}

export default Home;
