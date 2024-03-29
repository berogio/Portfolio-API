import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Card extends Document {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  altText: string;

  @Prop({ required: true })
  organization: string;

  @Prop({ required: true })
  focusArea: string;

  @Prop({ required: true })
  additionalInfo1: string;

  @Prop({ required: true })
  additionalInfo2: string;

  @Prop({ required: true })
  notice?: string;

  @Prop({ required: true })
  website?: string;

  @Prop({ required: true })
  language: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
