import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659898303801 implements MigrationInterface {
    name = 'default1659898303801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "descriptioon" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "descriptioon"`);
    }

}
