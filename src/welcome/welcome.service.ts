import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PortfolioItem } from './welcome.schema';

@Injectable()
export class WelcomeService {
  constructor(
    @InjectModel(PortfolioItem.name)
    private readonly portfolioItemModel: Model<PortfolioItem>,
  ) {}

  async getWelcomeData(language?: string): Promise<PortfolioItem[]> {
    const query = language ? { language } : {};
    return this.portfolioItemModel.find(query).exec();
  }
}
