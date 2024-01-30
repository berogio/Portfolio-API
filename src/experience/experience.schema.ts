import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Experience extends Document {
  @Prop({ required: true })
  logo: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  order: number;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
