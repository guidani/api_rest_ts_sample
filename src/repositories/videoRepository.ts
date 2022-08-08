import { AppDataSoure } from "../data-source";
import { Video } from "../entities/Video";

export const videoRepository = AppDataSoure.getRepository(Video)