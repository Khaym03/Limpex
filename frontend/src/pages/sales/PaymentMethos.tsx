import { RiFingerprintFill } from 'react-icons/ri'
import { MdOutlineCreditCard } from 'react-icons/md'
import { PiMoneyWavy } from 'react-icons/pi'
import { BiMessageAltDetail } from 'react-icons/bi'
import {
    Card,
    Tabs,
    Tab,
  } from '@nextui-org/react'

export default function PaymentMethods() {
    return (
      <div className="flex w-full flex-col justify-center">
        <Tabs aria-label="Options" color="primary"  className='mx-auto'>
          <Tab
            key="bio"
            title={
              <div className="flex items-center space-x-2">
                <RiFingerprintFill />
                <span>Bio</span>
              </div>
            }
          />
          <Tab
            key="tarjeta"
            title={
              <div className="flex items-center space-x-2">
                <MdOutlineCreditCard />
                <span>Tarjeta</span>
              </div>
            }
          />
          <Tab
            key="efectivo"
            title={
              <div className="flex items-center space-x-2">
                <PiMoneyWavy />
                <span>Efectivo</span>
              </div>
            }
          />
          <Tab
            key="pago-movil"
            title={
              <div className="flex items-center space-x-2">
                <BiMessageAltDetail />
                <span>Pago-Movil</span>
              </div>
            }
          />
        </Tabs>
      </div>
    )
  }