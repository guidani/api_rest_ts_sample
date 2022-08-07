import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659914176107 implements MigrationInterface {
    name = 'default1659914176107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "descriptioon" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "description" TO "descriptioon"`);
    }

}
