import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Content from "./Content"
import ContentsData from "./ContentsData"
import { TableData } from "../Table/TableSection"

interface TabsSectionProps {
  addTableData: (data: TableData) => void;
}

const TabsSection: React.FC<TabsSectionProps> = ({ addTableData }) => {
  return (
    <section>
      <Tabs defaultValue="a" className="w-full">
        <TabsList>
          {ContentsData.map ((content) => (
            <TabsTrigger key={content.key} value={content.key || ''} className="uppercase">
              {content.key}
            </TabsTrigger>
          ))}
        </TabsList>
        {ContentsData.map ((content) => (
          <TabsContent key={content.key} value={content.key || ''}>
            <Content text={content.text} inputs={content.inputs} addTableData={addTableData} type={content.key || ''} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
    
  )
}

export default TabsSection