


import ComplexTable from "./components/ComplexTable";

import {
 
  columnsDataComplex,
} from "./variables/columnsData";


import tableDataComplex from "./variables/tableDataComplex.json";

export const metadata = {
  title: "DataTables | Horizon UI by Ories",
};

const DataTablesPage = () => {
  return (
    <div>
      <div className="mt-5 grid  grid-cols-1  ">
       
        <ComplexTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />
        
        
        
      </div>
    </div>
  );
};

export default DataTablesPage;
