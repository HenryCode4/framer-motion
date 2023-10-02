import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const containerVariants = {
  hidden: { 
    x: '-100vh', 
  },
  visible: { 
    x: 0, 
    transition: { delay: 0.5, type: 'spring',  }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div 
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit="exit"
    className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
            whileHover={{
              scale: 1.3,
              color: '#f8e112',
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              originX: 0
            }}
            key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{
            x: '-100vh'
          }}
          animate={{
            x: 0
          }}
          transition={{type: 'spring', stiffness: 120, }}
          className="next">
          <Link to="/toppings">
            <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;