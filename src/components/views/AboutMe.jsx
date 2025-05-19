import React from 'react';
import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
import Card from '../common/Card';

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
    maxWidth: '1300px',
    width: '90%',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    borderRadius: '16px',
    backdropFilter: 'blur(5px)',
    
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

    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
};

// 卡片出现的动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AboutMe = () => {
  const cardData = [
    {
      icon: '🔬',
      title: '专业技能 | 解决问题的一把好手',
      content: '深耕生物医学领域，从复杂科研难题到创新解决方案追求严谨实证，攻克高难度、关键性的技术瓶颈，持续推动疾病认知深化与诊疗技术革新。'
    },
    {
      icon: '🧠',
      title: '多维思考 | 综合方案的探索者',
      content: '热衷技术研究，擅长从不同角度拆解问题，提供多种解决方案。深入底层原理的同时也关注前沿技术，如人工智能、新型成像技术等，不断扩展技术广度。'
    },
    {
      icon: '🛠️',
      title: '流程把控 | 从0到1的项目落地者',
      content: '将模糊的概念清晰化，从无到有搭建起稳健的执行框架。面对未知与挑战，能洞察关键，精心规划每一步，并以强大的执行力推动项目落地，确保各环节高效协同，最终将蓝图化为现实，展现出非凡的创造与整合能力。'
    },
    {
      icon: '🚀',
      title: '快速学习 | 新领域的开拓者',
      content: '自驱型学习者，对技术充满热情，能快速上手新技术/新领域，持续迭代自我，确保与行业发展同步。'
    },
    {
      icon: '👥',
      title: '团队管理 | 高效协作的组织者',
      content: '从科研团队到跨部门项目，擅长组织和协调各方资源，确保团队高效协作。注重团队成员的成长与发展，营造积极向上的工作氛围。'
    },
    {
      icon: '💡',
      title: '独立思考 | 坚守内心判断的真知者',
      content: '注重业务理解，从业务需求到技术实现追求最佳实践，完成，持续优化系统性能与用户体验。'
    },
    {
      icon: '⚡',
      title: '执行力 | 说到做到的实干派',
      content: '认定目标即刻行动，允许试错但拒绝停滞。以结果为导向，推动项目落地，持续提升自我和团队价值。'
    },
    {
      icon: '🔧',
      title: '丰富经验 | 说到做到的实干派',
      content: '精研成果转化，从概念验证到硬件实现追求精密制造与实用价值，构建高性能、可量产的创新产品，持续优化生产工艺与市场适配性。'
    }    
  ];

  return (
    <section style={styles.section}>
      <TriangleDots position="top-right" size={25} opacity={0.4} />
      <TriangleDots position="bottom-left" size={25} opacity={0.4} />
      
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div 
          style={styles.titleContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 style={styles.title}>
            🌟 我有料 · 我能带给你的价值
          </h1>
          <p style={styles.subtitle}>
            专注技术，热爱创新
          </p>
        </motion.div>
        
        <motion.div 
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardData.map((card, index) => (
            <Card 
              key={index}
              title={`${card.icon} ${card.title}`}
              content={card.content}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;