
function Navbar({setIsModal}){
  return (
    <div className="px-[10px] bg-blue-400 h-[80px] flex items-center justify-between">
      <div>logo</div>
      <div 
        className="cursor-pointer"
        onClick={()=>{setIsModal(true)}}
      >login</div>
      
    </div>
  ) }

export default Navbar;
