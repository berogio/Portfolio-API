import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from './experience.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name)
    private readonly experienceModel: Model<Experience>,
  ) {}

  async getAllExperiences(language?: string): Promise<Experience[]> {
    const query = language ? { language } : {};
    return this.experienceModel.find(query).sort('order').exec();
  }
}
