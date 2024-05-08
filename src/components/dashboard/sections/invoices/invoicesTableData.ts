import { InvoicesTableData } from "./InvoicesTable";
import clients from "./clients.json";
import { generateRandomDate } from "src/utils/getRandomDate";

export const data: InvoicesTableData = [];

clients.forEach((client) =>
  data.push({
    clientName: client,
    dateOfPurchase: generateRandomDate(2020, 2024),
    invoiceNumber: 1,
    status: "Pagado",
    totalAmount: 10,
  }),
);
