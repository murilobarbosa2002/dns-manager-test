import TabsSection from "./sections/Tabs/TabsSection"

const HomeScreen = () => {
  return (
    <main className="flex w-full min-h-screen justify-center items-center">
      <div className="w-[1360px]">
        <TabsSection />
      </div>
    </main>
  )
}

export default HomeScreen