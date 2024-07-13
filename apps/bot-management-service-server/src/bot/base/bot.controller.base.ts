/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BotService } from "../bot.service";
import { BotCreateInput } from "./BotCreateInput";
import { Bot } from "./Bot";
import { BotFindManyArgs } from "./BotFindManyArgs";
import { BotWhereUniqueInput } from "./BotWhereUniqueInput";
import { BotUpdateInput } from "./BotUpdateInput";

export class BotControllerBase {
  constructor(protected readonly service: BotService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bot })
  async createBot(@common.Body() data: BotCreateInput): Promise<Bot> {
    return await this.service.createBot({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bot] })
  @ApiNestedQuery(BotFindManyArgs)
  async bots(@common.Req() request: Request): Promise<Bot[]> {
    const args = plainToClass(BotFindManyArgs, request.query);
    return this.service.bots({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bot(@common.Param() params: BotWhereUniqueInput): Promise<Bot | null> {
    const result = await this.service.bot({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBot(
    @common.Param() params: BotWhereUniqueInput,
    @common.Body() data: BotUpdateInput
  ): Promise<Bot | null> {
    try {
      return await this.service.updateBot({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBot(
    @common.Param() params: BotWhereUniqueInput
  ): Promise<Bot | null> {
    try {
      return await this.service.deleteBot({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
