import users from "./users";
import invoices from "./invoices";
import invoiceitems from "./invoiceitems";
import singlesaves from "./singlesaves";

invoices.hasMany(invoiceitems, { foreignKey: "invoiceId" });
invoiceitems.belongsTo(invoices, { foreignKey: "invoiceId" });


export { users, invoices, invoiceitems, singlesaves }