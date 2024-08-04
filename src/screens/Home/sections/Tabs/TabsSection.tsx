import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Content from "./Content"

import ContentsData from "./ContentsData"


const TabsSection = () => {
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
            <Content text={content.text} inputs={content.inputs} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
    
  )
}

export default TabsSection