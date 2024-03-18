import CheckTable from "./components/CheckTable";

import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";

import {
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";

import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";

export const metadata = {
  title: "DataTables | Horizon UI by Ories",
};

const DataTablesPage = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />
        
        
        
      </div>
    </div>
  );
};

export default DataTablesPage;
