//
// お題： この data から TypeScript で Form DOM を作成してください
//    - value  が文字列の場合は Input タグとする
//    - values の場合は Select タグとする
//    - プロパティの追加は可能だが、削除は不可とする

type InputTextItem = {
  elementType: "inputText";
  title: string;
  value: string;
};
type InputNumberItem = {
  elementType: "inputNumber";
  title: string;
  value: number;
};
type SelectItem = {
  elementType: "select";
  title: string;
  values: string[];
};
type TextareaItem = {
  elementType: "textarea";
  title: string;
  value: string;
};
type Item = InputTextItem | SelectItem | TextareaItem;

const defaultData: Item[] = [
  {
    elementType: "inputText",
    title: "氏名",
    value: "input value",
  },
  {
    elementType: "inputText",
    title: "メールアドレス",
    value: `This is article.`,
  },
  {
    elementType: "inputText",
    title: "電話番号",
    value: `This is article.`,
  },
  {
    elementType: "select",
    title: "問合せの種類",
    values: ["返品について", "発送について", "その他"],
  },
  {
    elementType: "textarea",
    title: "問合せ内容",
    value: `This is article.`,
  },
];

function createDom(data = defaultData) {
  data.map((item) => {
    switch (item.elementType) {
      case "inputText":
        return `<input type="text" value="${item.value}" />`;
      case "select":
        const rows = item.values.map((value) => `<option>${value}</option>`);
        return `<select>${rows}</select>`;
      case "textarea":
        return `<textarea>"${item.value}</textarea>`;
    }
  });
}
