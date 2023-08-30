import * as mongoose from 'mongoose';
import { modulesSchema } from './models/daomodels/modules';

const modulesModel = mongoose.model('modules', modulesSchema);

export class Seed {

    constructor() {

    }

    

}
