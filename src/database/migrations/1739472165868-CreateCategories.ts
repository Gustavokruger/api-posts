import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export default class CreateCategories1639472165868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        )
            .then(async () =>
                await queryRunner.addColumn("categories", new TableColumn({
                    name: "userId",
                    type: "varchar"
                })))
            .then(async () =>
                await queryRunner.createForeignKey("categories", new TableForeignKey({
                    columnNames: ["userId"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    onDelete: "CASCADE"
                })));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("categories");
        const foreignKeys = table!.foreignKeys;
        await queryRunner.dropForeignKeys("categories", foreignKeys)
        await queryRunner.dropTable('categories')

    }

}
