import { MigrationInterface, QueryRunner } from 'typeorm';

export class userTableCreation1633638895094 implements MigrationInterface {
  name = 'userTableCreation1633638895094';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user_details\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NULL, \`surname\` varchar(255) NULL, \`status\` varchar(8) NOT NULL DEFAULT 'ACTIVE', \`created_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user_details\``);
  }
}
