using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class OrderAddressFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Address_AddressId",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "AddressId",
                table: "Orders",
                newName: "AddressID");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_AddressId",
                table: "Orders",
                newName: "IX_Orders_AddressID");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Address_AddressID",
                table: "Orders",
                column: "AddressID",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Address_AddressID",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "AddressID",
                table: "Orders",
                newName: "AddressId");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_AddressID",
                table: "Orders",
                newName: "IX_Orders_AddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Address_AddressId",
                table: "Orders",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
