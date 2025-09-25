// src/data/dashboardData.js
const dashboardData = [
  {
    title: "News",
    columns: ["No.", "Title", "Category"],
    rows: [
      { id: "01", title: "Import & Supply", category: "Technology" },
      { id: "02", title: "Design and commission", category: "Technology" },
      { id: "03", title: "Plant and installation", category: "Technology" },
      { id: "04", title: "Software Products", category: "Technology" },
    ],
    type: "news", // we’ll use this flag to decide how to render
  },
  {
    title: "FAQ",
    columns: ["No.", "Title", "Status"],
    rows: [
      { id: "01", title: "Import & Supply", status: "Active" },
      { id: "02", title: "Design and commission", status: "Active" },
      { id: "03", title: "Plant and installation", status: "Active" },
      { id: "04", title: "Software Products", status: "Active" },
    ],
    type: "faq",
  },
    {
    title: "Team",
    columns: ["No.", "Title", "Status"],
    rows: [
      { id: "01", title: "Import & Supply", status: "Active" },
      { id: "02", title: "Design and commission", status: "Active" },
      { id: "03", title: "Plant and installation", status: "Active" },
      { id: "04", title: "Software Products", status: "Active" },
    ],
    type: "faq",
  },
];

export default dashboardData;
