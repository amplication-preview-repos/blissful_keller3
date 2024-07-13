import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BotService } from "./bot.service";
import { BotControllerBase } from "./base/bot.controller.base";

@swagger.ApiTags("bots")
@common.Controller("bots")
export class BotController extends BotControllerBase {
  constructor(protected readonly service: BotService) {
    super(service);
  }
}
