import { Document, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CronjobDocument = Cronjob & Document; 

 
@Schema()

export class Cronjob {
  @Prop({ required: true })
  name: string;
 
  @Prop({ required: true })
  link: string;
 
  @Prop()
  apiKey: string;
 
  @Prop({ required: true })
  schedule: string; // e.g., "0 0 * * 0" (cron expression) 
} 

export const CronjobSchema = SchemaFactory.createForClass(Cronjob); 
