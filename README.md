# ts-study-example

お題： 配列「items」から TypeScript で Form を動的に作成してください

```typescript
type Item = {
  name: string;
  tagName: string;
  type?: string;
  label: string;
  placeholder?: string;
  values?: { label: string; value: number }[];
  options?: { text: string; value: number }[];
};

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
```

### 完成イメージ

![完成イメージ](./image.png)
