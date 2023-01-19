import { LangType } from '@constant/api';

const URL_API = './api/process_data.php';
export function sendMail(
  onMessage: (msg: string) => void,
  lang = LangType.PtBR
) {
  const contactFormEl = document.getElementById(
    'contact_form'
  ) as HTMLFormElement;
  const fieldsEl = document.getElementsByClassName(
    'form_data'
  ) as never as HTMLInputElement[];
  const formData = new FormData();
  formData.append('lang', lang);

  const fields = Array.from(fieldsEl);
  const fieldsRequired = fields
    .filter(
      ({ name }) => name === 'name' || name === 'email' || name === 'subject'
    )
    .map(({ value, name }) => ({
      name,
      value
    }));
  const isEmpty = fieldsRequired.every(({ value }) => value);

  for (let i = 0; i < fieldsEl.length; i++) {
    formData.append(fieldsEl[i].name, fieldsEl[i].value);
  }

  // submitBtnEl.disabled = true;
  const request = new XMLHttpRequest();
  request.open('POST', URL_API);
  request.send(formData);

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      // submitBtnEl.disabled = false;

      if (isEmpty) {
        contactFormEl.reset();
      }

      onMessage(request.responseText);
    }
  };
}
