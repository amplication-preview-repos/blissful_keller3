import { Module } from "@nestjs/common";
import { BotModuleBase } from "./base/bot.module.base";
import { BotService } from "./bot.service";
import { BotController } from "./bot.controller";
import { BotResolver } from "./bot.resolver";

@Module({
  imports: [BotModuleBase],
  controllers: [BotController],
  providers: [BotService, BotResolver],
  exports: [BotService],
})
export class BotModule {}
