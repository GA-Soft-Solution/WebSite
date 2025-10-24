// src/ui/admin/DashboardTable.jsx
import PropTypes from "prop-types";

const DashboardTable = ({
  title,
  columns,
  rows,
  type,
  index,
  openMenu,
  setOpenMenu,
  handleSort,
  getSortedRows,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-3 sm:p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm sm:text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === index ? null : index)}
            className="text-xs sm:text-sm text-gray-400 hover:text-gray-600"
          >
            ⋯
          </button>

          {openMenu === index && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg text-sm z-10">
              <button
                onClick={() => handleSort(index, "title")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sort by Name
              </button>
              <button
                onClick={() => handleSort(index, "date")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sort by Date
              </button>
              <button
                onClick={() => handleSort(index, "category")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sort by Category
              </button>
            </div>
          )}
        </div>
      </div>

      <table className="w-full text-xs sm:text-sm text-gray-600">
        <thead className="text-[10px] sm:text-xs uppercase bg-gray-50 text-gray-500 ">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-3 py-4 text-left">
                {col}
              </th>
            ))}
            <th className="px-3 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {getSortedRows(rows, index).map((row, rowIndex) => (
            <tr key={row.id} className="border-b last:border-none">
              <td className="px-3 py-4">
                {String(rowIndex + 1).padStart(2, "0")}
              </td>
              <td className="px-3 py-2">{row.title}</td>

              {type === "news" && (
                <td className="px-3 py-4">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {row.category}
                  </span>
                </td>
              )}

              {type === "faq" && (
                <td className="px-3 py-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                    {row.status}
                  </span>
                </td>
              )}

              <td className="px-3 py-4">
                <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DashboardTable.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openMenu: PropTypes.number,
  setOpenMenu: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  getSortedRows: PropTypes.func.isRequired,
};

export default DashboardTable;
