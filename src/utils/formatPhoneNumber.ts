export const formatPhoneNumber = (phone: string): string => {
  let inputPhone = phone.replace(/\D/g, '');
  const inputLength = inputPhone.length;

  if (inputLength > 11) {
    inputPhone = inputPhone.slice(0, 11);
  }

  if (inputLength > 7) {
    inputPhone = `(${inputPhone.slice(0, 2)}) ${inputPhone.slice(2, 7)}-${inputPhone.slice(7)}`;
  } else if (inputLength > 2) {
    inputPhone = `(${inputPhone.slice(0, 2)}) ${inputPhone.slice(2)}`;
  } else if (inputLength > 0) {
    inputPhone = `(${inputPhone.slice(0)}`;
  }

  return inputPhone;
};
