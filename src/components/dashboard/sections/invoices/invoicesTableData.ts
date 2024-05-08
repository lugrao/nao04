import { InvoicesTableData } from "./InvoicesTable";
import clients from "./clients.json";
import { generateRandomDate } from "src/utils/getRandomDate";

export const data: InvoicesTableData = [];

clients.forEach((client) =>
  data.push({
    clientName: client,
    dateOfPurchase: generateRandomDate(),
    invoiceNumber: 1,
    status: "Pagado",
    totalAmount: 10,
  }),
);
