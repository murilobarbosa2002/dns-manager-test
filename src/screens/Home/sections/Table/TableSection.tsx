import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface TableData {
  type: string;
  hostname: string;
  value: string;
  ttl: number;
}

interface TableSectionProps {
  tableData: TableData[];
  onUpdate: (index: number, data: TableData) => void;
  onDelete: (index: number) => void;
}

const TableSection: React.FC<TableSectionProps> = ({ tableData, onUpdate, onDelete }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<TableData | null>(null);

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setEditData(tableData[index]);
  };

  const handleSave = () => {
    if (editIndex !== null && editData) {
      if (typeof onUpdate === 'function') {
        onUpdate(editIndex, editData);
      }
      setEditIndex(null);
      setEditData(null);
    }
  };

  const handleDelete = (index: number) => {
    if (typeof onDelete === 'function') {
      onDelete(index);
    }
    setEditIndex(null);
    setEditData(null);
  };

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Hostname</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>TTL (seconds)</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((data, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>{data.type}</TableCell>
                <TableCell>{data.hostname}</TableCell>
                <TableCell>{data.value}</TableCell>
                <TableCell>{data.ttl}</TableCell>
                <TableCell>
                  <Button
                    variant="link"
                    onClick={() => handleEditClick(index)}
                    className="text-blue-500"
                  >
                    More
                  </Button>
                </TableCell>
              </TableRow>
              {editIndex === index && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <div className="p-4 border-t">
                      <div className="flex gap-4 mb-2">
                        <Input
                          type="text"
                          value={editData?.hostname || ''}
                          onChange={(e) =>
                            setEditData({ ...editData!, hostname: e.target.value })
                          }
                          placeholder="Hostname"
                          className="border border-gray-300 p-2 rounded"
                        />
                        <Input
                          type="text"
                          value={editData?.value || ''}
                          onChange={(e) =>
                            setEditData({ ...editData!, value: e.target.value })
                          }
                          placeholder="Value"
                          className="border border-gray-300 p-2 rounded"
                        />
                        <Input
                          type="number"
                          value={editData?.ttl || ''}
                          onChange={(e) =>
                            setEditData({ ...editData!, ttl: parseInt(e.target.value, 10) })
                          }
                          placeholder="TTL"
                          className="border border-gray-300 p-2 rounded"
                        />
                      </div>
                      <div className="flex gap-4">
                        <Button
                          onClick={handleSave}
                          className="bg-blue-500 text-white"
                        >
                          Save
                        </Button>
                        <Button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TableSection;
