//
// お題： 配列「items」から TypeScript で Form を動的に作成してください
//
// 1. 配列は、「Item型」に準じた要素が、増減を受け入れられる様にすること
// 2. 配列は、map関数を使って実装すること
// 3. 「Item型」は改変しても構わないが、配列「items」は改変しないこと
//
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
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  const label = document.createElement("label");
  label.innerHTML = item.label;
  for (const { value, label: _label } of item.values) {
    const span = document.createElement("span");
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.id = `${item.name}${value}`;
    input.name = item.name;
    input.value = `${value}`;
    label.htmlFor = `${item.name}${value}`;
    label.innerHTML = _label;
    span.className = "radioItem";
    span.appendChild(input);
    span.appendChild(label);
    td.appendChild(span);
  }
  th.appendChild(label);
  tr.appendChild(th);
  tr.appendChild(td);
  return tr;
}
function createInputElementDom(
  item: InputTextItem | InputEmailItem | InputTelItem
) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  const label = document.createElement("label");
  const input = document.createElement("input");
  label.innerHTML = item.label;
  input.type = item.type;
  input.name = item.name;
  input.placeholder = item.placeholder;
  th.appendChild(label);
  td.appendChild(input);
  tr.appendChild(th);
  tr.appendChild(td);
  return tr;
}
function createSelectElementDom(item: SelectItem) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  const label = document.createElement("label");
  const select = document.createElement("select");
  label.innerHTML = item.label;
  select.name = item.name;
  for (const { value, text } of item.options) {
    const option = document.createElement("option");
    option.value = `${value}`;
    option.innerHTML = text;
    select.appendChild(option);
  }
  th.appendChild(label);
  td.appendChild(select);
  tr.appendChild(th);
  tr.appendChild(td);
  return tr;
}
function createTextAreElementDom(item: TextAreaItem) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  const label = document.createElement("label");
  const textarea = document.createElement("textarea");
  label.innerHTML = item.label;
  textarea.placeholder = item.placeholder;
  th.appendChild(label);
  td.appendChild(textarea);
  tr.appendChild(th);
  tr.appendChild(td);
  return tr;
}
function createElementDom(items: Item[]) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  items.map((item) => {
    switch (item.tagName) {
      case "input":
        if (item.type === "radio") {
          tbody.appendChild(createRadioElementDom(item));
        } else {
          tbody.appendChild(createInputElementDom(item));
        }
        break;
      case "select":
        tbody.appendChild(createSelectElementDom(item));
        break;
      case "textarea":
        tbody.appendChild(createTextAreElementDom(item));
        break;
      default:
        throw new Error("Found unhandled element.");
    }
  });
  table.appendChild(tbody);
  return table;
}
function createFormDom() {
  const form = document.getElementById("form");
  if (!form) throw new Error("Not found form.");
  form.appendChild(createElementDom(items));
}
createFormDom();
