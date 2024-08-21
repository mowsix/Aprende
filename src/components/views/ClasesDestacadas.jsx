import React from "react";
import { useTranslation } from 'react-i18next';

export const ClasesDestacadas = () => {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: '90px' }}> {/* Ajusta según la altura de la navbar */}
      <h1>{t('highlightedClasses')}</h1>
      <p>{t('content')}</p>
    </div>
  );
};

