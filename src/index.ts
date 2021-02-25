//
// お題： この data から TypeScript で Form DOM を作成してください
//    - value  が文字列の場合は Input タグとする
//    - values の場合は Select タグとする
//    - プロパティの追加は可能だが、削除は不可とする

const defaultData = [
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
