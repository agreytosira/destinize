import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button className={`flex items-center justify-between w-full p-4 font-semibold text-left transition-all duration-300 hover:bg-blue-50 ${isOpen && 'bg-blue-50'}`} onClick={toggleAccordion}>
        <p className={`transtion-all duration-300 ease ${isOpen ? 'text-blue-600 text-sm' : 'text-slate-900'}`}>{question}</p>
        <div className={`flex items-center justify-center aspect-square size-8 p-2 text-xl  rounded-full transition-transform duration-300 ease border border-slate-300 ${isOpen ? 'transform -scale-y-90 bg-blue-600 text-white' : ''}`}>
          <FaChevronDown />
        </div>
      </button>
      <div className={`py-4 px-4 overflow-hidden transition-max-height duration-300 ease ${isOpen ? 'flex bg-blue-50' : 'hidden'}`}>
        <p className='text-slate-900'>{answer}</p>
      </div>
    </div>
  )
}

export default AccordionItem
