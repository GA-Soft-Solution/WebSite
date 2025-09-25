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
    rowRender: (row) => (
      <>
        <td className="px-3 py-2">{row.id}</td>
        <td className="px-3 py-2">{row.title}</td>
        <td className="px-3 py-2">
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">{row.category}</span>
        </td>
        <td className="px-3 py-2">
          <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
            Details
          </button>
        </td>
      </>
    ),
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
    rowRender: (row) => (
      <>
        <td className="px-3 py-2">{row.id}</td>
        <td className="px-3 py-2">{row.title}</td>
        <td className="px-3 py-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
            {row.status}
          </span>
        </td>
        <td className="px-3 py-2">
          <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
            Details
          </button>
        </td>
      </>
    ),
  },
];

export default dashboardData;
