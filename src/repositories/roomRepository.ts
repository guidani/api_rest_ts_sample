import { AppDataSoure } from "../data-source";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSoure.getRepository(Room)