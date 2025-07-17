// "use client";

// import { useState } from "react";
// import InventoryOverview from "@/plugins/inventory-plugin/components/inventory_components/InventoryOverview";
// import InventoryTable from "@/plugins/inventory-plugin/components/inventory_components/InventoryTable";
// import InventoryValuation from "@/plugins/inventory-plugin/components/inventory_components/InventoryValuation";
// import InventoryChart from "@/plugins/inventory-plugin/components/inventory_components/InventoryChart";
// import InventoryAlerts from "@/plugins/inventory-plugin/components/inventory_components/InventoryAlerts";
// import TransferModal from "@/plugins/inventory-plugin/components/inventory_components/TransferModal";
// import TransferHistory from "@/plugins/inventory-plugin/components/inventory_components/TransferHistory";
// import SupplierDirectory from "@/plugins/inventory-plugin/components/inventory_components/SupplierDirectory";
// import StockActivityLog from "@/plugins/inventory-plugin/components/inventory_components/StockActivityLog";
// import BarcodeGenerator from "@/plugins/inventory-plugin/components/inventory_components/BarcodeGenerator";
// import DocumentsStore from "@/plugins/inventory-plugin/components/inventory_components/DocumentsStore";
// import AuditTools from "@/plugins/inventory-plugin/components/inventory_components/AuditTools";
// import AIInventoryForecast from "@/plugins/inventory-plugin/components/inventory_components/AIInventoryForecast";
// import InventoryAddData from "@/plugins/inventory-plugin/components/inventory_components/InventoryAddData";


// interface TransferItem {
//   name: string;
//   location: string;
//   quantity: number;
// }

// interface TransferRecord {
//   item: string;
//   quantity: number;
//   from: string;
//   to: string;
//   timestamp: string;
// }

// export default function InventoryPage() {
//   const [showTransferModal, setShowTransferModal] = useState(false);
//   const [transferItems, setTransferItems] = useState<TransferItem[]>([]);
//   const [transferHistory, setTransferHistory] = useState<TransferRecord[]>([
//     {
//       item: "Copper Scrap",
//       quantity: 120,
//       from: "Warehouse A",
//       to: "Warehouse B",
//       timestamp: "2025-07-07 15:42",
//     },
//   ]);

//   const handleOpenTransfer = (items: TransferItem[]) => {
//     setTransferItems(items);
//     setShowTransferModal(true);
//   };

//   const handleTransfer = (name: string, from: string, to: string, qty: number) => {
//     const now = new Date();
//     const timestamp = now.toLocaleString("en-GB", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     });

//     const newRecord: TransferRecord = {
//       item: name,
//       quantity: qty,
//       from,
//       to,
//       timestamp,
//     };

//     setTransferHistory((prev) => [newRecord, ...prev]);
//     setShowTransferModal(false);
//   };

//   const handleEditTransfer = (index: number, newQty: number) => {
//     setTransferHistory((prev) => {
//       const updated = [...prev];
//       updated[index].quantity = newQty;
//       return updated;
//     });
//   };

//   const handleDeleteTransfer = (index: number) => {
//     setTransferHistory((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="space-y-10 bg-[#f6fff4] dark:bg-[#101e1e] p-4 md:p-6 min-h-screen">
//       <h1 className="text-3xl font-bold text-green-700">📦 Inventory Management</h1>

//       {/* ✅ Overview */}
//       <InventoryOverview />

//       {/* ✅ Table + Add Data */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <InventoryTable onOpenTransfer={handleOpenTransfer} />
//         <InventoryAddData />
//       </div>

//       {/* ✅ Analytics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <InventoryChart />
//         <InventoryAlerts />
//         <InventoryValuation />
//       </div>

//       {/* ✅ Transfer */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <button
//           onClick={() => handleOpenTransfer(transferItems)}
//           className="px-4 py-2 bg-green-700 text-white rounded w-full"
//         >
//           <span className="font-medium text-sm">Open Transfer Inventory Modal</span>
//         </button>

//         <TransferHistory
//           records={transferHistory}
//           onEdit={handleEditTransfer}
//           onDelete={handleDeleteTransfer}
//         />
//       </div>

//       {/* ✅ Tools */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <AuditTools />
//         <BarcodeGenerator />
//         <DocumentsStore />
//       </div>

//       {/* ✅ Forecasting */}
//       <AIInventoryForecast />

//       {/* ✅ Other */}
//       <SupplierDirectory />
//       <StockActivityLog />

//       {/* ✅ Transfer Modal */}
//       {showTransferModal && (
//         <TransferModal
//           items={transferItems}
//           onTransfer={handleTransfer}
//           onClose={() => setShowTransferModal(false)}
//         />
//       )}
//     </div>
//   );
// }
