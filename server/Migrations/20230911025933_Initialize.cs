using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class Initialize : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cart",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        UserId = table.Column<int>(type: "INTEGER", nullable: false),
                        Color = table.Column<string>(type: "TEXT", nullable: true),
                        Size = table.Column<string>(type: "TEXT", nullable: true),
                        Quantity = table.Column<int>(type: "INTEGER", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cart", x => x.Id);
                }
            );

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        Brand = table.Column<string>(type: "TEXT", nullable: false),
                        Name = table.Column<string>(type: "TEXT", nullable: false),
                        Image = table.Column<string>(type: "TEXT", nullable: false),
                        Price = table.Column<int>(type: "INTEGER", nullable: false),
                        Slug = table.Column<string>(type: "TEXT", nullable: false),
                        Category = table.Column<string>(type: "TEXT", nullable: false),
                        Gender = table.Column<string>(type: "TEXT", nullable: true),
                        Desc = table.Column<string>(type: "TEXT", nullable: true),
                        Quantity = table.Column<int>(type: "INTEGER", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                }
            );

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        Email = table.Column<string>(type: "TEXT", nullable: false),
                        PasswordHash = table.Column<byte[]>(type: "BLOB", nullable: false),
                        PasswordSalt = table.Column<byte[]>(type: "BLOB", nullable: false),
                        Role = table.Column<string>(type: "TEXT", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                }
            );

            migrationBuilder.CreateTable(
                name: "Favorites",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        UserId = table.Column<int>(type: "INTEGER", nullable: false),
                        ProductId = table.Column<int>(type: "INTEGER", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorites", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Favorites_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        Title = table.Column<string>(type: "TEXT", nullable: false),
                        ContactNumber = table.Column<string>(type: "TEXT", nullable: false),
                        Details = table.Column<string>(type: "TEXT", nullable: false),
                        UserId = table.Column<int>(type: "INTEGER", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Address_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table =>
                    new
                    {
                        OrderID = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        OrderDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                        OrderTotal = table.Column<string>(type: "TEXT", nullable: false),
                        OrderStatus = table.Column<string>(type: "TEXT", nullable: false),
                        DeliveryAddress = table.Column<string>(type: "TEXT", nullable: false),
                        DeliveryContact = table.Column<string>(type: "TEXT", nullable: false),
                        DeliveryTrace = table.Column<string>(type: "TEXT", nullable: true),
                        DeliveryInvoice = table.Column<string>(type: "TEXT", nullable: true),
                        UserID = table.Column<int>(type: "INTEGER", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderID);
                    table.ForeignKey(
                        name: "FK_Orders_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "OrderItems",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        OrderId = table.Column<int>(type: "INTEGER", nullable: false),
                        ProductId = table.Column<int>(type: "INTEGER", nullable: false),
                        Brand = table.Column<string>(type: "TEXT", nullable: false),
                        Name = table.Column<string>(type: "TEXT", nullable: false),
                        Image = table.Column<string>(type: "TEXT", nullable: false),
                        Color = table.Column<string>(type: "TEXT", nullable: true),
                        Size = table.Column<string>(type: "TEXT", nullable: true),
                        Price = table.Column<string>(type: "TEXT", nullable: false),
                        Quantity = table.Column<int>(type: "INTEGER", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItems_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_Address_UserId",
                table: "Address",
                column: "UserId",
                unique: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_Favorites_ProductId",
                table: "Favorites",
                column: "ProductId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_OrderId",
                table: "OrderItems",
                column: "OrderId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserID",
                table: "Orders",
                column: "UserID"
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "Address");

            migrationBuilder.DropTable(name: "Cart");

            migrationBuilder.DropTable(name: "Favorites");

            migrationBuilder.DropTable(name: "OrderItems");

            migrationBuilder.DropTable(name: "Products");

            migrationBuilder.DropTable(name: "Orders");

            migrationBuilder.DropTable(name: "Users");
        }
    }
}
