//
// お題： この data から TypeScript で Form DOM を作成してください
//    - value  が文字列の場合は Input タグとする
//    - values の場合は Select タグとする
//    - プロパティの追加は可能だが、削除は不可とする

const data = [
  {
    title: "氏名",
    value: "input value",
  },
  {
    title: "メールアドレス",
    value: `This is article.`,
  },
  {
    title: "電話番号",
    value: "080-1234-5678",
  },
  {
    title: "問合せの種類",
    values: ["返品について", "発送について", "その他"],
  },
  {
    title: "問合せ内容",
    value: `This is article.`,
  },
];
