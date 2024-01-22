// language.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Language extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  proficiency: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
