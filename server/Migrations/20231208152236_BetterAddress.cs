using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class BetterAddress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeliveryAddress",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "DeliveryContact",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Address",
                newName: "FullName");

            migrationBuilder.RenameColumn(
                name: "Details",
                table: "Address",
                newName: "Country");

            migrationBuilder.AddColumn<string>(
                name: "AddressLine",
                table: "Address",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AddressLineSecond",
                table: "Address",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Address",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddressLine",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "AddressLineSecond",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Address");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Address",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Country",
                table: "Address",
                newName: "Details");

            migrationBuilder.AddColumn<string>(
                name: "DeliveryAddress",
                table: "Orders",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DeliveryContact",
                table: "Orders",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
