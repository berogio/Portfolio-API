import { Injectable } from '@nestjs/common';
import { Navigation } from './navigation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NavigationService {
  constructor(
    @InjectModel(Navigation.name)
    private readonly NavigationModel: Model<Navigation>,
  ) {}

  async getAllNavigation(): Promise<Navigation[]> {
    return this.NavigationModel.find().exec();
  }
}
