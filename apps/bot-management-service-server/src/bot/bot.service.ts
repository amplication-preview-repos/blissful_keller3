import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BotServiceBase } from "./base/bot.service.base";

@Injectable()
export class BotService extends BotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
