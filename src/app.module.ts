import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CronjobController } from "./cronjob/cronjob.controller";
import { CronjobModule } from "./cronjob/cronjob.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    CronjobModule,
  ],
  controllers: [AppController, CronjobController],
  providers: [AppService],
})
export class AppModule {}
