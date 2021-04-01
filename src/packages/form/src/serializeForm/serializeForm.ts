type RawData = Record<string, FormDataEntryValue[]>;
type Data = Record<string, FormDataEntryValue | FormDataEntryValue[]>;

// declare global {
//   interface FormData {
//     keys(): Iterator<[string]>;
//     entries(): Iterator<[string, FormDataEntryValue]>;
//   }
// }

export function serializeForm(form: HTMLFormElement): Data {
  const formData = new FormData(form);
  const d: Data = {};
  const r: RawData = {};

  // TODO: есть более короткий путь через formData.keys
  // Он, рабочий, но требуется задать тип

  // eslint-disable-next-line no-restricted-syntax
  // for (const key of formData.keys()) {
  //   const values = formData.getAll(key);
  //   data[key] = values.length > 1 ? values : values[0];
  // }

  // TODO: тогда forEach+forEach можно убрать

  formData.forEach((v, k) => {
    if (r[k]) r[k].push(v);
    else r[k] = [v];
  });

  formData.forEach((v, k) => {
    d[k] = r[k].length > 1 ? r[k] : r[k][0];
  });

  return d;
}
