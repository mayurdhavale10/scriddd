// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Sidebar from "@/components/saasmodel_components/layout/sidebar";
// import Header from "@/components/saasmodel_components/layout/header";

// const machines = [
//   {
//     title: "Shredder #2",
//     status: "running",
//     metric: "Blade Wear: 82%",
//     image: "/saas_assets/shredder.webp",
//   },
//   {
//     title: "Magnetic Separator",
//     status: "idle",
//     metric: "Motor Temp: 65°C",
//     image: "/saas_assets/magnetic.webp",
//   },
//   {
//     title: "Dust Extractor",
//     status: "down",
//     metric: "Filter Change Required",
//     image: "/saas_assets/dust.webp",
//   },
//   {
//     title: "Crusher Unit",
//     status: "running",
//     metric: "Output: 2.3T/hr",
//     image: "/saas_assets/crusher.webp",
//   },
// ];

// export default function DashboardPage() {
//   return (
//     <div className="p-4 md:p-6 bg-[#f6fff4] dark:bg-[#101e1e] min-h-screen">
//       <h1 className="text-3xl font-bold text-green-700 mb-8">
//         Scrid Factory Dashboard
//       </h1>

//       {/* Machine Section */}
//       <section className="mb-2">
//         <h2 className="text-xl font-semibold text-emerald-700 mb-3">🏭 Machine Status</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {machines.map((machine) => (
//             <div
//               key={machine.title}
//               className="bg-white dark:bg-[#1a2e2e] rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.01]"
//             >
//               <Image
//                 src={machine.image}
//                 alt={machine.title}
//                 width={400}
//                 height={200}
//                 className="w-full h-40 object-cover rounded-t-2xl"
//                 unoptimized
//               />
//               <div className="p-4 space-y-1">
//                 <h3 className="text-md font-semibold text-gray-900 dark:text-white">{machine.title}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   Status:{" "}
//                   <span className={`font-medium ${machine.status === "running"
//                     ? "text-green-600"
//                     : machine.status === "idle"
//                     ? "text-yellow-500"
//                     : "text-red-500"
//                   }`}>
//                     {machine.status}
//                   </span>
//                 </p>
//                 <p className="text-sm text-gray-700 dark:text-gray-300">{machine.metric}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <p className="text-sm text-gray-600 dark:text-gray-400 ml-2 mt-4">🛠️ Machines Monitored: 6</p>
//       </section>

//       {/* Inventory & Logistics */}
//       <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mb-8">
//         {/* Inventory */}
//         <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg">
//           <h2 className="text-lg font-bold text-emerald-700 mb-3">📦 Inventory</h2>
//           <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//             <li>Raw Scrap - Copper: 1200kg / 2000kg</li>
//             <li>WIP - Crushed PCB: 82% yield</li>
//             <li>Finished Goods - PET: 500kg @ ₹80/kg</li>
//             <li className="text-red-600 dark:text-red-400">⚠️ Lubricant below threshold</li>
//           </ul>
//         </div>

//         {/* Logistics */}
//         <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg">
//           <h2 className="text-lg font-bold text-emerald-700 mb-3">🚚 Logistics</h2>
//           <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
//             <li>Total Pickups: 213</li>
//             <li>Pickups Scheduled Today: 3</li>
//             <li>Cancelled Pickups: 1</li>
//             <li>📞 Contact: +91 88888 12345</li>
//           </ul>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg space-y-4 h-fit">
//            <h2 className="text-lg font-bold text-emerald-700 flex items-center gap-2">
//               <span>⚡</span> Quick Actions
//                </h2>
//            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">Add Inventory</Button>
//            <Button className="w-full bg-green-100 hover:bg-green-200 text-green-800 border border-green-600 font-medium">
//             Request Pickup
//           </Button>
//           <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-medium">
//             Generate Report
//           </Button>
//         </div>
//       </section>

//       {/* Financial KPIs */}
//       <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//         <KPIBox label="Paid" value="₹5.8L" />
//         <KPIBox label="Overdue" value="₹1.1L" status="danger" />
//         <KPIBox label="Pending" value="₹3.2L" />
//       </section>

//       {/* Financial Details */}
//       <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//         <ProfitChart />
//         <LossAnalysis />
//         <AIRecommendations />
//       </section>

//       {/* Invoices */}
//       <section className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg mb-8">
//         <h2 className="text-lg font-semibold text-emerald-700 mb-2">🧾 Latest Invoices</h2>
//         <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
//           <li>Invoice #SA001 - ₹25,000 - ✅ Paid</li>
//           <li>Invoice #SA002 - ₹18,400 - ❌ Overdue</li>
//           <li>Invoice #SA003 - ₹12,000 - ⏳ Pending</li>
//         </ul>
//       </section>

//       {/* Employees */}
//       <section className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg mb-12">
//         <h2 className="text-lg font-semibold text-emerald-700 mb-3">👥 Employee Summary</h2>
//         <p className="text-sm text-gray-800 dark:text-gray-300 mb-1">Total Employees: 14</p>
//         <p className="text-sm text-gray-800 dark:text-gray-300">
//           Today's Attendance: 12 Present, 2 Absent
//         </p>
//       </section>
//     </div>
//   );
// }

// // 🧩 Reusable Components

// const KPIBox = ({ label, value, status }: any) => (
//   <div
//     className={`p-4 rounded-2xl shadow-lg ${
//       status === "danger"
//         ? "bg-red-50 text-red-700 dark:bg-red-950"
//         : "bg-white text-gray-800 dark:bg-[#1a2e2e] dark:text-white"
//     }`}
//   >
//     <p className="text-sm font-medium">{label}</p>
//     <h3 className="text-2xl font-bold">{value}</h3>
//   </div>
// );

// const ProfitChart = () => (
//   <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg">
//     <h2 className="text-lg font-semibold text-emerald-700 mb-2">📊 Profit Analysis</h2>
//     <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
//       <li>Copper: ₹15/kg</li>
//       <li>Plastic: ₹4/kg</li>
//       <li>Steel: ₹8/kg</li>
//     </ul>
//   </div>
// );

// const LossAnalysis = () => (
//   <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg">
//     <h2 className="text-lg font-semibold text-red-700 mb-2">📉 Loss Summary</h2>
//     <ul className="text-sm space-y-1 text-red-700 dark:text-red-400">
//       <li>Fuel Overspend: ₹12,000</li>
//       <li>Inventory Idle: ₹48,000</li>
//     </ul>
//   </div>
// );

// const AIRecommendations = () => (
//   <div className="bg-white dark:bg-[#1a2e2e] p-6 rounded-2xl shadow-lg">
//     <h2 className="text-lg font-semibold text-emerald-700 mb-2">🤖 AI Suggestions</h2>
//     <p className="text-sm text-gray-700 dark:text-gray-300">
//       Bundle PET + Paper → Save ₹9K/month
//     </p>
//     <a href="#" className="text-sm text-green-700 dark:text-green-400 underline mt-2 inline-block">
//       View Details
//     </a>
//   </div>
// );
