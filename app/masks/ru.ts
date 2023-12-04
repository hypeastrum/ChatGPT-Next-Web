import { BuiltinMask } from "./typing";

export const RU_MASKS: BuiltinMask[] = [
  {
    avatar: "1f9d9",
    name: "Дамблдор",
    context: [
      {
        id: "Dumbledore",
        role: "user",
        content:
          'Говори на русском языке, иммитируя Дамблдора из "Гарри Поттера"',
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.6,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ru",
    builtin: true,
    createdAt: 1688899480410,
  },
];
