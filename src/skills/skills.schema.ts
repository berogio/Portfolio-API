import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Skill extends Document {
  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
