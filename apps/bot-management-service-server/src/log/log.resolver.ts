import * as graphql from "@nestjs/graphql";
import { LogResolverBase } from "./base/log.resolver.base";
import { Log } from "./base/Log";
import { LogService } from "./log.service";

@graphql.Resolver(() => Log)
export class LogResolver extends LogResolverBase {
  constructor(protected readonly service: LogService) {
    super(service);
  }
}
