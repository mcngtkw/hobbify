import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "@/app/lib/data";

export default async function Customers() {
    const [revenue, invoices, cardData] = Promise.all([fetchRevenue, fetchLatestInvoices, fetchCardData]);
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
    return(
        <div>
            Customers
        </div>
    );
}