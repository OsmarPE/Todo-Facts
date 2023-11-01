
function Header({setShowModal}:{setShowModal:(value:boolean) => void}):JSX.Element {
  return (
    <header className="h-[120px] flex items-center justify-between">
        <h1 className="font-bold text-3xl capitalize text-white">Today i learned</h1>
        <button onClick={() => setShowModal( (modal: boolean) => !modal  )} className="py-3 hover:bg-[#47c18a]  px-4 uppercase rounded-3xl bg-[#359B6D] border-[1px] border-[#4fe2a0] text-white  transition-colors">share a fact</button>
    </header>
  )
}

export default Header