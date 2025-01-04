import { Body, Controller, Get, Post } from "@nestjs/common";
import { create } from "domain";
import { CronjobService } from "./cronjob.service";
import { Cronjob } from "./schemas/cronjob.schema";

@Controller('cronjobs')
export class CronjobController {
  constructor(private cronjobService: CronjobService) { }

  @Get()
  async getAllCronjobs(): Promise<Cronjob[]> {
    return this.cronjobService.findAll();
  }

  @Post('create')
  async createCronjob(
    @Body()
    cronjob,
  ): Promise<Cronjob> {
    return this.cronjobService.create(cronjob);
  }
}