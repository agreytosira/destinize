import AccordionItem from './AccordionItem'

const Accordion = ({ faqs }) => {
  return (
    <div className='border divide-y divide-slate-300 border-slate-300'>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default Accordion
