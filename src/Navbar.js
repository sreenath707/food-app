function Navbar({ setIsModal, user, logout }) {
  return (
    <div className='px-[10px] bg-blue-400 h-[80px] flex items-center justify-between'>
      <div>logo</div>
      { !user ? 
      <div
        className='cursor-pointer'
        onClick={() => {
          setIsModal(true)
        }}
      >
        Login
      </div> : 
      <div>
        <div>{user.username}</div>
        <button onClick={logout}> Logout</button>
      </div>
      }
    </div>
  )
}

export default Navbar
