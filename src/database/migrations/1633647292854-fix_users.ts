import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUsers1633647292854 implements MigrationInterface {
    name = 'fixUsers1633647292854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(25) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` varchar(8) NOT NULL DEFAULT 'ACTIVE', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`detail_id\` int NOT NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`REL_673613c95633d9058a44041794\` (\`detail_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`name\` \`name\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`surname\` \`surname\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_673613c95633d9058a44041794d\` FOREIGN KEY (\`detail_id\`) REFERENCES \`user_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_673613c95633d9058a44041794d\``);
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`surname\` \`surname\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user_details\` CHANGE \`name\` \`name\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP INDEX \`REL_673613c95633d9058a44041794\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
