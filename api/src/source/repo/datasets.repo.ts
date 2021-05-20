import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Dataset } from '../models/datasets';


@Injectable()
export class DatasetRepo {
  constructor(
    @InjectModel(Dataset)
    private dataset: typeof Dataset,
  ) {}
  get(id: number): Promise<Dataset> {
    return this.dataset.findByPk(id);
  }

}
