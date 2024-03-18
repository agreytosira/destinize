import Accordion from '../components/Accordion'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa6'

const FAQSection = () => {
  const faqs = [
    {
      question: 'Pertanyaan pertama?',
      answer: 'Jawaban pertanyaan pertama.'
    },
    {
      question: 'Pertanyaan kedua?',
      answer: 'Jawaban pertanyaan kedua.'
    },
    {
      question: 'Pertanyaan ketiga?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, id perspiciatis. Voluptatum ea, optio animi incidunt fugiat, veritatis accusamus accusantium sed distinctio error maiores eaque quos. Mollitia vel illum, eum deleniti consectetur reiciendis ullam. Quos aliquid nam impedit eligendi, animi dolor doloribus sed sint? Aspernatur delectus, quia culpa cupiditate necessitatibus ea tenetur pariatur debitis. Earum, ab quasi modi nemo corrupti eos perspiciatis exercitationem quos consectetur! Alias, ad! Facilis tempora nesciunt quae ad commodi et atque nam odit amet dolorem. Fugit cupiditate blanditiis doloribus aliquam optio quidem obcaecati, quis quasi officiis perferendis. Fugit sed corporis optio, incidunt minima nobis dolorum quaerat?'
    }
  ]

  return (
    <div className='container my-16' id='faq'>
      <div className='flex flex-col items-center justify-between mb-12 lg:flex-row'>
        <div className='flex flex-col items-center gap-2 text-center lg:items-start'>
          <span className='subtitle'>FREQUENTLY ASKED QUESTION</span>
          <h2>Pertanyaan yang Sering Diajukan </h2>
        </div>
        <Link to='/destination' className='flex items-center gap-2 mt-4 font-semibold text-blue-600 lg:mt-0'>
          Lihat Semua <FaChevronRight />
        </Link>
      </div>
      <Accordion faqs={faqs} />
    </div>
  )
}

export default FAQSection
