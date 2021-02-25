//
// お題： 配列「items」から TypeScript で Form を動的に作成してください
//
// 1. 配列は、「Item型」に準じた要素が、増減を受け入れられる様にすること
// 2. 配列は、map関数を使って実装すること
// 3. 「Item型」は改変しても構わないが、配列「items」は改変しないこと
//
// type Item = {
//   name: string;
//   tagName: string;
//   type?: string;
//   label: string;
//   placeholder?: string;
//   values?: { label: string; value: number }[];
//   options?: { text: string; value: number }[];
// };

type ItemBase = {
  name: string;
  label: string;
};
type InputItem = ItemBase & {
  tagName: "input";
};
type InputTextItem = InputItem & {
  type: "text";
  placeholder: string;
};
type InputEmailItem = InputItem & {
  type: "email";
  placeholder: string;
};
type InputTelItem = InputItem & {
  type: "tel";
  placeholder: string;
};
type InputRadioItem = InputItem & {
  type: "radio";
  values: { label: string; value: number }[];
};
type SelectItem = ItemBase & {
  name: string;
  tagName: "select";
  label: string;
  options: { text: string; value: number }[];
};
type TextAreaItem = ItemBase & {
  tagName: "textarea";
  placeholder: string;
};
type Item =
  | InputTextItem
  | InputEmailItem
  | InputTelItem
  | InputRadioItem
  | SelectItem
  | TextAreaItem;

const items: Item[] = [
  {
    name: "name",
    label: "氏名",
    tagName: "input",
    type: "text",
    placeholder: "山田　太郎",
  },
  {
    name: "email",
    label: "メールアドレス",
    tagName: "input",
    type: "email",
    placeholder: `example@gmail.com`,
  },
  {
    name: "tel",
    label: "電話番号",
    tagName: "input",
    type: "tel",
    placeholder: "080-1234-5678",
  },
  {
    name: "contact",
    label: "ご希望の返信方法",
    tagName: "input",
    type: "radio",
    values: [
      { label: "メール", value: 0 },
      { label: "電話", value: 1 },
      { label: "どちらでも可", value: 2 },
    ],
  },
  {
    name: "inquiry_kind",
    label: "お問い合せの種類",
    tagName: "select",
    options: [
      { text: "返品について", value: 0 },
      { text: "発送について", value: 1 },
      { text: "その他", value: 2 },
    ],
  },
  {
    name: "inquiry_detail",
    label: "お問い合せ内容",
    tagName: "textarea",
    placeholder: "お問い合わせ内容詳細をご記入ください",
  },
];
function createRadioElementDom(item: InputRadioItem) {
  return `
    <th>
      <label>${item.label}</label>
    </th>
    <td>
    ${item.values
      .map(
        ({ value, label }) =>
          `
          <span class="radioItem">
            <input
              type="radio"
              id="${item.name}${value}"
              name="${item.name}"
              value="${value}"
            />
            <label for="${item.name}${value}">${label}</label>
          </span>
          `
      )
      .join("")}
    </td>
  `;
}
function createInputElementDom(
  item: InputTextItem | InputEmailItem | InputTelItem
) {
  return `
    <th>
      <label>${item.label}</label>
    </th>
    <td>
      <input
        type="${item.type}"
        name="${item.name}"
        placeholder="${item.placeholder}"
      />
    </td>
  `;
}
function createSelectElementDom(item: SelectItem) {
  return `
    <th>
      <label>${item.label}</label>
    </th>
    <td>
      <select name="${item.name}">
      ${item.options.map(
        ({ value, text }) => `<option value="${value}">${text}</option>`
      )}
      </select>
    </td>
  `;
}
function createTextAreElementDom(item: TextAreaItem) {
  return `
    <th><label>${item.label}</label></th>
    <td><textarea placeholder="${item.placeholder}"></textarea></td>
  `;
}
function createElementDom() {
  const list = items
    .map((item) => {
      switch (item.tagName) {
        case "input":
          if (item.type === "radio") {
            return createRadioElementDom(item);
          } else {
            return createInputElementDom(item);
          }
        case "select":
          return createSelectElementDom(item);
        case "textarea":
          return createTextAreElementDom(item);
        default:
          throw new Error("Found unhandled element.");
      }
    })
    .map((item) => `<tr>${item}</tr>`)
    .join("");
  return `<table>${list}</table>`;
}
function createFormDom() {
  const form = document.getElementById("form");
  if (!form) throw new Error("Not found form.");
  form.innerHTML = createElementDom();
}
createFormDom();
