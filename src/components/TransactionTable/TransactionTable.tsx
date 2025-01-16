import React, { useState } from "react";
import styles from "./TransactionTable.module.scss"; // Імпорт стилів
import Pagination from "../Pagination/Pagination";

const transactions = [
  { name: "NL KPN 1 Month", method: "XRP", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "AVAX", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "AVAX", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "ETH", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "PEPE", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "XRP", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "AVAX", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "AVAX", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "ETH", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "PEPE", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "XRP", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "AVAX", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "AVAX", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
  { name: "NL KPN 1 Month", method: "ETH", date: "16/12/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "PEPE", date: "14/11/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "14/10/2023", amount: "$ 89,00", status: "Active" },
  { name: "NL KPN 1 Month", method: "BTC", date: "15/09/2023", amount: "$ 89,00", status: "Cancelled" },
];

const TransactionsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 4; // Відображати 4 транзакції на сторінку

  // Calculate the indices for the current page
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Method</th>
            <th>Created on</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}
            >
              <td>{transaction.name}</td>
              <td>{transaction.method}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>
                <span
                  className={
                    transaction.status === "Active"
                      ? styles.statusActive
                      : styles.statusCancelled
                  }
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(transactions.length / transactionsPerPage)}
        paginate={paginate}
      />
    </div>
  );
};

export default TransactionsTable;