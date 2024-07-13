import { BotWhereInput } from "./BotWhereInput";
import { BotOrderByInput } from "./BotOrderByInput";

export type BotFindManyArgs = {
  where?: BotWhereInput;
  orderBy?: Array<BotOrderByInput>;
  skip?: number;
  take?: number;
};
