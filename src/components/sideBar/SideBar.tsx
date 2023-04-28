


function SideBar() {
  return (
    <div className='flex flex-col z-[2] fixed h-full w-[103px]  justify-between bg-[#373b53] content-center rounded-r-[20px] bottom-0 left-0 '>
          <img src="/assets/logo.png" alt="" />
          <div className='flex flex-col items-center max-w-[144px] pb-6 justify-center gap-8 '>
            <img src="/assets/themelogo.svg" alt="" />
            <div className='bg-[#494e6e] h-[1px] w-full block'></div>
            <img className='rounded-full h-10 w-10 object-cover object-center' src="/assets/userdp.jpg" alt="" />
          </div>
    </div>
  )
}

export default SideBar