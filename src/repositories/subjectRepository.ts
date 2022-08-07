import { AppDataSoure } from "../data-source";
import { Subject } from "../entities/Subject";

export const subjectRepository = AppDataSoure.getRepository(Subject);