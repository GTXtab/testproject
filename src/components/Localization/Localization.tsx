import React, { useState } from 'react';
import styles from './Localization.module.scss';  // Import the SCSS file

const localization = {
  en: {
    title: 'EN',
    options: {
      en: 'ENG',
      uk: 'UKR',
    },
  },
  uk: {
    title: 'UA',
    options: {
      en: 'Англ',
      uk: 'Укр',
    },
  },
};

const Localization = () => {
  const [selectedLang, setSelectedLang] = useState<'en' | 'uk'>('en');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang: 'en' | 'uk') => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  const { title, options } = localization[selectedLang];

  return (
    <div className={styles['dropdown-container']}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles['dropdown-button']}
      >
        {title}
        <span className={styles['arrow']}>▼</span>
      </button>

      {isOpen && (
        <ul className={styles['dropdown-list']}>
          {Object.entries(options).map(([key, label]) => (
            <li
              key={key}
              onClick={() => handleSelect(key as 'en' | 'uk')}
              className={`${styles['dropdown-item']} ${selectedLang === key ? styles['selected'] : ''}`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Localization;
