'use client'

import React, { useState } from 'react';
import TableSection from "./sections/Table/TableSection";
import TabsSection from "./sections/Tabs/TabsSection";

export interface TableData {
  type: string;
  hostname: string;
  value: string;
  ttl: number;
}

const HomeScreen = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const handleAddTableData = (data: TableData) => {
    setTableData((prevData) => [...prevData, data]);
  };

  const handleUpdate = (index: number, updatedData: TableData) => {
    const updatedDataArray = [...tableData];
    updatedDataArray[index] = updatedData;
    setTableData(updatedDataArray);
  };
  
  const handleDelete = (index: number) => {
    const updatedDataArray = tableData.filter((_, i) => i !== index);
    setTableData(updatedDataArray);
  };

  return (
    <main className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col w-[1360px] gap-16">
        <TabsSection addTableData={handleAddTableData} />
        <TableSection
          tableData={tableData}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}

export default HomeScreen;
