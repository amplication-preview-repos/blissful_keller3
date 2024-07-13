import * as graphql from "@nestjs/graphql";
import { BotResolverBase } from "./base/bot.resolver.base";
import { Bot } from "./base/Bot";
import { BotService } from "./bot.service";

@graphql.Resolver(() => Bot)
export class BotResolver extends BotResolverBase {
  constructor(protected readonly service: BotService) {
    super(service);
  }
}
