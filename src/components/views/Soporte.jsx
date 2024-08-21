import React from "react";
import { useTranslation } from 'react-i18next';

export const Soporte = () => {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: '90px' }}> {/* Ajusta según la altura de la navbar */}
      <h1>{t('support')}</h1>
      <p>{t('supportContent')}</p>
    </div>
  );
};

