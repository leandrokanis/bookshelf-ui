import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt_BR from '@/config/pt-BR.json'

const resources = {
  'pt-BR': {
    translation: {
      ...pt_BR,
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
