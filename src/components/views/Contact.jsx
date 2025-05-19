import React from 'react';

import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
import Card from '../common/Card';
import { FaPhone, FaEnvelope, FaGithub, FaWeixin, FaQq } from 'react-icons/fa';
import { SiCsdn } from 'react-icons/si';

const styles = {
  section: {
    background: '#765BB6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: '40px',
    paddingBottom: '40px',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1000px',
    width: '90%',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    padding: '40px 30px',
    borderRadius: '24px',
    backdropFilter: 'blur(12px)',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.4s ease-in-out',
  },
  titleContainer: {
    marginBottom: '50px',
    position: 'relative',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    fontWeight: 'bold',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    marginBottom: '1.2rem',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D9FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    opacity: 0.95,
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  contactCard: {
   

    borderRadius: '20px',
    padding: '35px 30px',
    
    textAlign: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
    fontSize: '1.15rem',
    padding: '12px 15px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  icon: {
    marginRight: '18px',
    fontSize: '1.6rem',
    color: '#E0D9FF',
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '50%',
    padding: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  contactText: {
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },
  '@media (max-width: 768px)': {
    grid: {
      gridTemplateColumns: '1fr',
    },
    container: {
      padding: '30px 20px',
    },
    contactItem: {
      padding: '10px 12px',
    }
  }
};

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: 'spring',
      stiffness: 80,
      damping: 10,
      duration: 0.6 
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 70,
      damping: 12,
      duration: 0.7
    }
  }
};

const Contact = () => {
    return (
        <section style={styles.section}>
            <TriangleDots position="top-right" size={25} opacity={0.4} />
            <TriangleDots position="bottom-left" size={25} opacity={0.4} />
            
            <motion.div 
              style={styles.container}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)' }}
            >
              <motion.div 
                style={styles.titleContainer}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  style={styles.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  📞 联系我 · 随时保持联系
                </motion.h1>
                <motion.p 
                  style={styles.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  如果您对我感兴趣，欢迎通过以下方式联系我
                </motion.p>
              </motion.div>
              
              <motion.div 
                style={styles.contactCard}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  transform: 'translateY(-8px)', 
                  
                }}
              >
                <motion.div 
                  variants={itemVariants} 
                  style={styles.contactItem}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    scale: 1.02,
                    x: 5
                  }}
                >
                  <span style={styles.icon}><FaPhone /></span>
                  <span style={styles.contactText}>手机：17665333475</span>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  style={styles.contactItem}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    scale: 1.02,
                    x: 5
                  }}
                >
                  <span style={styles.icon}><FaEnvelope /></span>
                  <span style={styles.contactText}>邮箱：w.j.gong1989@gmail.com</span>
                </motion.div>

                <motion.div 
                  variants={itemVariants} 
                  style={styles.contactItem}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    scale: 1.02,
                    x: 5
                  }}
                >
                  <span style={styles.icon}><FaWeixin /></span>
                  <span style={styles.contactText}>微信：WjGong1989</span>
                </motion.div>

                <motion.div 
                  variants={itemVariants} 
                  style={styles.contactItem}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    scale: 1.02,
                    x: 5
                  }}
                >
                  <span style={styles.icon}><FaQq /></span>
                  <span style={styles.contactText}>QQ：1551931699</span>
                </motion.div>
                
                {/* <motion.div 
                  variants={itemVariants} 
                  style={styles.contactItem}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    scale: 1.02,
                    x: 5
                  }}
                >
                  <span style={styles.icon}><FaGithub /></span>
                  <span style={styles.contactText}>GitHub：github.com/Grenemal</span>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants} 
                  style={styles.contactItem}
                  whileHover={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    scale: 1.02,
                    x: 5
                  }}
                >
                  <span style={styles.icon}><SiCsdn /></span>
                  <span style={styles.contactText}>CSDN：csdn.net/任宇恒</span>
                </motion.div> */}
              
              </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;