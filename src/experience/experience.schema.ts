import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Experience extends Document {
  @Prop()
  position: string;

  @Prop()
  date: Date;

  @Prop()
  description: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
