import React from 'react';
import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
import { FaCode, FaReact, FaServer, FaDatabase, FaRobot, FaTools } from 'react-icons/fa';

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
    maxWidth: '1200px',
    width: '90%',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    backdropFilter: 'blur(8px)',
  },
  titleContainer: {
    marginBottom: '40px',
  },
  title: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    marginBottom: '1rem',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D9FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    opacity: 0.9,
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  categoriesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  categoryCard: {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '25px 20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    textAlign: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  categoryTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ffffff',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  },
  skillItem: {
    marginBottom: '10px',
  },
  skillName: {
    fontSize: '0.9rem',
    marginBottom: '5px',
    fontWeight: '500',
  },
  progressBarContainer: {
    height: '8px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #B19EFF 100%)',
    borderRadius: '4px',
    boxShadow: '0 0 8px rgba(177, 158, 255, 0.5)',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
  },
  '@media (max-width: 768px)': {
    skillsGrid: {
      gridTemplateColumns: '1fr',
    },
    container: {
      padding: '20px 15px',
    }
  }
};

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: width => ({
    width: `${width}%`,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.5 }
  })
};

const SkillCategory = ({ title, icon, skills }) => (
  <motion.div
    style={styles.categoryCard}
    variants={cardVariants}
    whileHover={{
      y: -8,
      scale: 1.03,
      boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
      background: 'rgba(255, 255, 255, 0.18)'
    }}
    whileTap={{ scale: 0.98 }}
  >
    <h3 style={styles.categoryTitle}>
      <span style={styles.iconContainer}>{icon}</span>
      {title}
    </h3>
    <div style={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <div key={index} style={styles.skillItem}>
          <div style={styles.skillName}>{skill.name}</div>
          <div style={styles.progressBarContainer}>
            <motion.div
              style={styles.progressBar}
              custom={skill.level}
              variants={progressVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {

  const skillsData = [
    {
      category: '科研转化技能',
      icon: <FaReact />,
      skills: [
        { name: '文献写作', level: 90 },
        { name: '科研项目管理', level: 80 },
        { name: '科研数据分析', level: 90 },
        { name: '科研数据可视化', level: 90 },
        { name: '科研数据挖掘', level: 80 },
        { name: '专利写作申请', level: 90 }, 
        { name: '项目申请', level: 90 },
        { name: '项目管理', level: 80 },
        { name: '项目评估', level: 80 },
        { name: '项目实施', level: 80 },
      ]
    },
    {
      category: '化学专业技能',
      icon: <FaCode />,
      skills: [
        { name: '有机合成', level: 95 },
        { name: '化合物表征', level: 90 },
        { name: '化学反应机理', level: 75 },
        { name: '化学数据分析', level: 90 },
        { name: '化学文献检索', level: 90 },
        { name: '化学实验设计', level: 95 },
        { name: '化学数据可视化', level: 90 },
        { name: '化学实验室安全', level: 90 },
        { name: '化学实验室管理', level: 85 },
        { name: '化学实验室设备维护', level: 80 },
      ]
    },
    {
      category: '成像专业技能',
      icon: <FaServer />,
      skills: [
        { name: '荧光成像技术', level: 90 },
        { name: '荧光探针的设计', level: 95 },
        { name: '特异性标记', level: 90 },
        { name: '共聚焦显微成像技术', level: 95 },
        { name: '超分辨率荧光成像技术', level: 90 },
        { name: '多光子显微成像技术', level: 90 },
        { name: '活细胞荧光成像技术', level: 95 },
        { name: '图像处理与分析', level: 90 },
        { name: '小动物活体成像', level: 85 },
        { name: '成像数据分析', level: 90 },
      ]
    },
    {
      category: '产品开发专业技能',
      icon: <FaDatabase />,
      skills: [
        { name: '转化流程', level: 90 },
        { name: '市场分析', level: 65 },
        { name: '产品设计', level: 80 },
        { name: '产品开发', level: 90 },
        { name: '产品注册', level: 80 },
        { name: '产品上市', level: 75 },
        { name: '产品推广', level: 80 },
        { name: '产品销售', level: 60 },
        { name: '产品售后服务', level: 70 },
        { name: '产品质量管理', level: 80 },
      ]
    },
    {
      category: '综合专业技能',
      icon: <FaReact />,
      skills: [
        { name: '适应性', level: 90 },
        { name: '团队合作', level: 90 },
        { name: '沟通能力', level: 90 },
        { name: '项目管理', level: 80 },
        { name: '时间管理', level: 90 },
        { name: '数据分析', level: 90 },
        { name: '文献检索', level: 90 },
        { name: '文献阅读', level: 90 },
        { name: '文献写作', level: 90 },
        { name: '学习能力', level: 90 },
      ]
    },
  ];

  return (
    <section style={styles.section}>
      <TriangleDots position="top-left" size={25} opacity={0.4} />
      <TriangleDots position="bottom-right" size={25} opacity={0.4} />

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          style={styles.titleContainer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5, type: 'spring' }}
          >
            💻 我的技能树
          </motion.h1>
          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            全流程开发，持续学习新技术
          </motion.p>
        </motion.div>

        <motion.div
          style={styles.categoriesContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.category}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;