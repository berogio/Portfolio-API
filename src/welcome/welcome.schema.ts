import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PortfolioItem extends Document {
  @Prop({ required: true })
  greeting: string;

  @Prop({ required: true })
  aboutHeader: string;

  @Prop({ required: true })
  aboutDescription: string;

  @Prop({ required: true })
  aboutFooter: string;

  @Prop({ type: [String], required: true })
  technologies: string[];
}

export const PortfolioItemSchema = SchemaFactory.createForClass(PortfolioItem);
