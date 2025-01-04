import * as mongoose from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cronjob } from "./schemas/cronjob.schema";

@Injectable()
export class CronjobService {
  constructor(
    @InjectModel(Cronjob.name)
    private cronjobModel: mongoose.Model<Cronjob>,
  ) { }
  
  async findAll(): Promise<Cronjob[]> {
    const cronjobs = await this.cronjobModel.find();
    return cronjobs;
  }

  async create(cronjob: Cronjob): Promise<Cronjob> {
    const res = await this.cronjobModel.create(cronjob)
    return res
  }
}
