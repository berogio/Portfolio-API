import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Navigation extends Document {
  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  label: string;
}

export const NavigationSchema = SchemaFactory.createForClass(Navigation);
