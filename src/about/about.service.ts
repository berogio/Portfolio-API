import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './about.schema';

@Injectable()
export class AboutService {
  constructor(
    @InjectModel(Card.name) private readonly cardModel: Model<Card>,
  ) {}

  async getAllCards(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }
}
