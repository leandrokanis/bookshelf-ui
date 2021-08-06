import Axios from 'axios'
import fileDownload from 'js-file-download'

export function downloadFile(url: string, filename: string) {
  Axios.get(url, {
    responseType: 'blob',
  }).then((res) => {
    fileDownload(res.data, filename)
  })
}

export const fileToBase64 = (file: File): Promise<unknown> => {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = function (event) {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file)
  })
}

export const formatCurrency = (value) => {
  return parseFloat(value || 0)?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export const formatPercent = (value) => {
  return parseFloat(value || 0)?.toLocaleString('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 4,
    minimumFractionDigits: 2,
  })
}

export function setLocalStorage(key: string, value: object): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage(key: string): any {
  return JSON.parse(localStorage.getItem(key))
}

export function shouldValidateForm(form: object): boolean {
  return Object.values(form)
    .map((rule: Function) => rule())
    .every((result: Boolean) => !!result)
}

export function handleLoadingFunction(
  holdingFunction: Function,
  setIsLoading: Function,
): Promise<void> {
  return new Promise(async () => {
    setIsLoading(true)

    await holdingFunction().finally(() => setIsLoading(false))
  })
}

export function composeDate(dateString: string): Date {
  if (!dateString) return
  return new Date(dateString)
}

export function validatePassword(password: string): boolean {
  let isUpperCaseValid: boolean = false
  let isLowerCaseValid: boolean = false
  let isNumberValid: boolean = false
  let isSpecialValid: boolean = false
  const MIN_LENGTH = 6
  const MIN_RULES = 3
  const NUMBER_REGEX = /\d/g
  const LOWER_CASE_REGEX = /([a-z])/g
  const UPPER_CASE_REGEX = /([A-Z])/g
  const SPECIAL_REGEX = /\W|_/g

  if (password.length < MIN_LENGTH) {
    return false
  }

  isUpperCaseValid = UPPER_CASE_REGEX.test(password)
  isLowerCaseValid = LOWER_CASE_REGEX.test(password)
  isNumberValid = NUMBER_REGEX.test(password)
  isSpecialValid = SPECIAL_REGEX.test(password)

  return (
    Number(isUpperCaseValid) +
      Number(isLowerCaseValid) +
      Number(isNumberValid) +
      Number(isSpecialValid) >=
    MIN_RULES
  )
}
