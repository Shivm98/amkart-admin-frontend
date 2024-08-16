"use client";
import { useState } from "react";
import OrdersHeader from "../../components/orders/OrdersHeader";
import OrdersFilters from "../../components/orders/OrdersFilters";
import OrdersTable from "../../components/orders/OrdersTable";
import { FiDownload } from "react-icons/fi";

export default function OrdersPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  // Sample orders data
  const orders = [
    {
      id: 1,
      orderNumber: "192541",
      customerName: "Esther Howard",
      shippingMethod: "Shipping",
      status: "Paid",
      total: "$3,127.00",
      date: "Jun 19",
      productName:
        "Stihl TS 800 cut-off machine incl. 5x diamond cutting discs",
      productImage: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      orderNumber: "192541",
      customerName: "Esther Howard",
      shippingMethod: "Shipping",
      status: "Paid",
      total: "$3,127.00",
      date: "Jun 19",
      productName:
        "Stihl TS 800 cut-off machine incl. 5x diamond cutting discs",
      productImage: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      orderNumber: "192541",
      customerName: "Esther Howard",
      shippingMethod: "Shipping",
      status: "Paid",
      total: "$3,127.00",
      date: "Jun 19",
      productName:
        "Stihl TS 800 cut-off machine incl. 5x diamond cutting discs",
      productImage: "https://via.placeholder.com/40",
    },
    // Add more orders here...
  ];

  const headers = [
    { label: "Product", key: "productName", sortable: true, width: "10%" },
    { label: "Order Number", key: "orderNumber", sortable: true, width: "10%" },
    {
      label: "Customer Name",
      key: "customerName",
      sortable: true,
      width: "15%",
    },
    {
      label: "Shipping Method",
      key: "shippingMethod",
      sortable: true,
      width: "15%",
    },
    { label: "Status", key: "status", sortable: true, width: "10%" },
    { label: "Total", key: "total", sortable: true, width: "10%" },
    { label: "Date", key: "date", sortable: true, width: "10%" },
    { label: "Actions", key: "actions", sortable: false, width: "5%" },
  ];

  const statusOptions = [
    { value: "paid", label: "Paid" },
    { value: "pending", label: "Pending" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const shippingOptions = [
    { value: "shipping", label: "Shipping" },
    { value: "pickup", label: "Pickup" },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === orders.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orders.map((order) => order.id));
    }
  };

  const handleSort = (key, direction) => {
    // This function will handle the sort request to the backend
    console.log(`Sorting by ${key} in ${direction} order`);
    // Fetch sorted data from the backend using `key` and `direction`
  };

  return (
    <div className="flex flex-col space-y-8">
      <OrdersHeader />
      <OrdersFilters
        statusOptions={statusOptions}
        shippingOptions={shippingOptions}
        searchPlaceholder="Search Orders..."
      />
      <OrdersTable
        headers={headers}
        orders={orders} // Pass all orders for display
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort} // Pass the sort handler
      />
    </div>
  );
}
