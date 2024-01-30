import { Injectable } from '@nestjs/common';
import { Navigation } from './navigation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NavigationService {
  constructor(
    @InjectModel(Navigation.name)
    private readonly navigationModel: Model<Navigation>,
  ) {}

  async getAllNavigation(language?: string): Promise<Navigation[]> {
    const query = language ? { language } : {};
    return this.navigationModel.find(query).sort('order').exec();
  }
}
