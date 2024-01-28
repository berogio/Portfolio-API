import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Experience extends Document {
  @Prop({ required: true })
  logo: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  year: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  language: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
