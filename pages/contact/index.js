import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text and form */}
        <div className='flex flex-col w-full max-w-[700px] bg-pink-500/10'>
          {/* text */}
          <h2 className='h2 text-center mb-12'>
            Let's <span className='text-accent'>connect</span>
          </h2>
          {/* form */}
          <form>
            {/* group */}
            <div className="flex">
              <input type="text" placeholder='name' className='input'/>
              <input type="text" placeholder='email' className='input'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
