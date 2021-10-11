import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUserDetails1633970428174 implements MigrationInterface {
    name = 'fixUserDetails1633970428174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_details\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`name\` \`name\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`surname\` \`surname\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`surname\` \`surname\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`name\` \`name\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_details\` ADD \`status\` varchar(8) NOT NULL DEFAULT ''ACTIVE''`);
    }

}
