export const formatCep = (cep: string): string => {
  let inputCep = cep.replace(/\D/g, '');
  const inputLength = inputCep.length;

  if (inputLength > 8) {
    inputCep = inputCep.slice(0, 8);
  }

  if (inputLength > 5) {
    inputCep = `${inputCep.slice(0, 5)}-${inputCep.slice(5)}`;
  }

  return inputCep;
};
