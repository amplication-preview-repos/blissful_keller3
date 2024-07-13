import { Bot as TBot } from "../api/bot/Bot";

export const BOT_TITLE_FIELD = "id";

export const BotTitle = (record: TBot): string => {
  return record.id?.toString() || String(record.id);
};
