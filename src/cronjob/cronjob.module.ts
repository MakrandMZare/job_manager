import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CronjobController } from "./cronjob.controller";
import { CronjobSchema } from "./cronjob.schema";
import { CronjobService } from "./cronjob.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cronjob', schema: CronjobSchema }]),
  ],
  providers: [CronjobService],
  controllers: [CronjobController],
})
export class CronjobModule {}
