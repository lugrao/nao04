import { InvoicesTableData } from "./InvoicesTable";
import clients from "./clients.json";
import { generateRandomDate } from "src/utils/getRandomDate";

export const data: InvoicesTableData = [];

clients.forEach((client) =>
  data.push({
    clientName: client,
    dateOfPurchase: generateRandomDate(2020, 2024),
    invoiceNumber: Math.floor(Math.random() * 100000000),
    status: Math.random() < 0.5 ? "Pagado" : "Pendiente",
    totalAmount: Math.floor(Math.random() * 10000),
  }),
);
