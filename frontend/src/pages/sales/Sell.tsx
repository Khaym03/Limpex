import { RiShoppingCart2Line } from 'react-icons/ri'

export default function Sell() {
  return (
    <div className="flex flex-col mt-auto">
      <div className=" bg-content2 rounded-xl  grid gap-2 p-4">
        <div className="text-xl text-center font-medium">Total a pagar</div>
        <div className='grid grid-cols-2'>
          <div className="flex justify-center items-center">
            <RiShoppingCart2Line size={'2rem'} />
          </div>
          <span className=" text-2xl font-semibold italic grid place-items-center">
            98.54 Bs
          </span>
        </div>
      </div>

      
    </div>
  )
}
