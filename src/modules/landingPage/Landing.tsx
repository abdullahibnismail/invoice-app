import SideBar from "../../components/sideBar/SideBar"




function Landing() {
  return (
    <div className="flex relative h-screen w-full bg-[#f2f2f2] ">
        <SideBar/>
        <section className="flex  h-full w-full justify-center z-10 relative pt-20 pb-1">
          <div className="flex-col justify-start w-[730px] gap-16">
            <div className="flex items-center justify-between w-full">
              {/* Invoices */}
              <div className="gap-2">
                  <h1>Invoices</h1>
                  <p>There are 6 total invoices</p>
              </div>
              {/* Filter and New Invoice Button */}
              <div className="flex  gap-10">
                <div className="cursor-pointer flex gap-4">
                  <p>Filter by status</p>
                  <i>^</i>
                </div>
                <button className="cursor-pointer">New Invoice</button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Landing