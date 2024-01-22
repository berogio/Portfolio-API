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

  async getAllExperiences(): Promise<Experience[]> {
    return this.experienceModel.find().exec();
  }
}
