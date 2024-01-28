import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  description2: string;

  @Prop({ required: true })
  technologies: string[];

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  liveDemoLink: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
