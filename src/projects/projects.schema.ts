import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  description2: string;

  @Prop()
  technologies: string[];

  @Prop()
  image: string;

  @Prop()
  liveDemoLink: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
