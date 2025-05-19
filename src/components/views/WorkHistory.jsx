import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
import { FaBriefcase, FaAward, FaCode, FaRobot, FaFileAlt, FaServer } from 'react-icons/fa';

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 减少子元素之间的交错时间
      delayChildren: 0.2, // 减少初始延迟
      duration: 0.5 // 减少动画时长
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // 减小位移距离
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80, // 减小弹性系数
      damping: 10, // 减小阻尼
      duration: 0.5 // 减小动画时长
    }
  }
};

const timelineItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70, // 减小弹性系数
      damping: 12, // 减小阻尼
      duration: 0.6 // 减小动画时长
    }
  }
};

const achievementVariants = {
  hidden: { opacity: 0, x: -10 }, // 减小位移距离
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60, // 减小弹性系数
      damping: 8, // 减小阻尼
      duration: 0.4 // 减小动画时长
    }
  }
};

const styles = {
  section: {
    background: '#765BB6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    overflow: 'hidden',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '100%',
    width: '100%',
    zIndex: 1,
    color: 'white',
  },
  title: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', // 减小标题字体大小
    fontWeight: 'bold',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    marginBottom: '2rem', // 减小下边距
    textAlign: 'center',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D9FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    letterSpacing: '1px',
  },
  timeline: {
    position: 'relative',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  timelineCenter: {
    position: 'absolute',
    width: '4px', // 减小时间线宽度
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
    top: '0',
    bottom: '0',
    left: '50%',
    marginLeft: '-2px', // 调整居中位置
    borderRadius: '4px', // 调整圆角
    boxShadow: '0 0 10px rgba(255,255,255,0.2)', // 减小阴影
  },
  timelineItem: {
    padding: '8px 30px', // 减小内边距
    position: 'relative',
    width: '50%',
    boxSizing: 'border-box',
    marginBottom: '30px', // 减小底部间距
  },
  timelineItemLeft: {
    left: '0',
  },
  timelineItemRight: {
    left: '50%',
  },
  timelineContent: {
    padding: '20px 18px', // 减小内边距
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px', // 调整圆角
    boxShadow: '0 8px 20px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)', // 减小阴影
    border: '1px solid rgba(255, 255, 255, 0.15)',
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
  },
  timelineDot: {
    width: '26px', // 减小圆点大小
    height: '26px', // 减小圆点大小
    background: 'linear-gradient(135deg, #FFFFFF 0%, #E0D9FF 100%)',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    zIndex: 2,
    boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.2), 0 0 15px rgba(0,0,0,0.3)', // 调整阴影
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#5D4A9C',
    transition: 'all 0.3s ease',
  },
  timelineDotLeft: {
    right: '-13px', // 调整位置
  },
  timelineDotRight: {
    left: '-13px', // 调整位置
  },
  companyName: {
    fontSize: '1.3rem', // 减小字体大小
    fontWeight: 'bold',
    marginBottom: '6px', // 减小下边距
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // 减小间距
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    color: '#FFFFFF',
  },
  jobTitle: {
    fontSize: '1.1rem', // 减小字体大小
    opacity: 0.95,
    marginBottom: '8px', // 减小下边距
    fontStyle: 'italic',
    fontWeight: '500',
    color: '#E0D9FF',
  },
  period: {
    fontSize: '0.9rem', // 减小字体大小
    marginBottom: '15px', // 减小下边距
    display: 'inline-block',
    padding: '4px 12px', // 减小内边距
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '20px', // 调整圆角
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // 减小阴影
    fontWeight: '500',
    letterSpacing: '0.5px',
  },
  achievementsList: {
    listStyle: 'none',
    padding: 0,
    margin: '15px 0 0 0', // 减小上边距
  },
  achievementItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '10px', // 减小下边距
    fontSize: '0.95rem', // 减小字体大小
    lineHeight: '1.5', // 减小行高
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: '8px 12px', // 减小内边距
    borderRadius: '10px', // 调整圆角
    transition: 'all 0.3s ease',
  },
  achievementIcon: {
    marginRight: '10px', // 减小右边距
    marginTop: '2px', // 调整上边距
    color: '#E0D9FF',
    flexShrink: 0,
    fontSize: '1rem', // 减小字体大小
  },
  // 响应式样式
  mobileTimelineItem: {
    width: '100%',
    paddingLeft: '60px', // 减小左内边距
    paddingRight: '15px', // 减小右内边距
    left: '0',
    marginBottom: '25px', // 减小底部间距
  },
  mobileTimelineCenter: {
    left: '30px', // 调整位置
    width: '4px', // 减小宽度
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.7), rgba(255,255,255,0.3))',
    boxShadow: '0 0 8px rgba(255,255,255,0.15)', // 减小阴影
  },
  mobileTimelineDot: {
    left: '20px', // 调整位置
    width: '24px', // 减小大小
    height: '24px', // 减小大小
  },
  mobileTimelineContent: {
    padding: '16px 15px', // 减小内边距
  }
};

// 添加自定义动画样式
const customAnimationStyles = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes glow {
    0% { box-shadow: 0 0 5px rgba(255,255,255,0.3); }
    50% { box-shadow: 0 0 20px rgba(255,255,255,0.5); }
    100% { box-shadow: 0 0 5px rgba(255,255,255,0.3); }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const WorkHistory = () => {
  // 添加自定义动画样式到页面
  React.useEffect(() => {
    // 创建style元素
    const styleElement = document.createElement('style');
    styleElement.innerHTML = customAnimationStyles;
    document.head.appendChild(styleElement);

    // 清理函数
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // 工作经历数据 - 精简描述文本
  const workExperience = [
    {
      company: '飞秒激光研究中心（广州）有限公司',
      position: '高级生物医学科学家',
      period: '2025.03 – 至今',
      achievements: [
        { text: '主导飞秒成像设备在活细胞/干细胞/类器官等活细胞应用场景的开发', icon: <FaServer /> },
        { text: '负责AE团队管理，提升团队开发效率与协作质量', icon: <FaBriefcase /> },
        { text: '负责公司对外交流、技术讲解及合作项目对接', icon: <FaCode /> },
        { text: '负责外部需求的技术可行性评估', icon: <FaAward /> },
        { text: '负责公司产品的SOP文档撰写', icon: <FaFileAlt /> },
        { text: '参与公司产品的市场调研与分析', icon: <FaRobot /> },
        { text: '参与公司产品的技术路线规划', icon: <FaServer /> },
      ]
    },
    {
      company: '聚集诱导发光高等研究院',
      position: '总监/副总监',
      period: '2024.02 – 2025.02',
      achievements: [
        { text: '管理创新中心和科研耗材中心的项目研发，领导22人团队，推动科研成果转化', icon: <FaCode /> },
        { text: '负责体外诊断领域的产品布局，推动分子诊断和有形成分分析产品的创新', icon: <FaServer /> },
        { text: '撰写国家及省部级科研项目指南，管理项目书撰写和合作项目', icon: <FaRobot /> },
        { text: '领导开发纳米粒子自动化生成仪等关键设备', icon: <FaCode /> },
        { text: '负责项目组的融资路演，推动商业化进程', icon: <FaAward /> },
      ]
    },
    {
      company: '聚集诱导发光高等研究院',
      position: '中心主任/副主任',
      period: '2022.07 – 2024.02',
      achievements: [
        { text: '负责中心的日常工作及安全维护，立项申请，专利申请等', icon: <FaCode /> },
        { text: '负责产品在体外诊断领域的布局，医疗器械证、药物临床前测试等', icon: <FaServer /> },
        { text: '推进项目组的项目进度，标准化研发文件和流程', icon: <FaRobot /> },
        { text: '负责市场推广，产品说明书、手册、宣传手册的设计，产品试用装、定价及包装的制定，销售代理商的联系，售后服务及技术支持', icon: <FaCode /> },
      ]
    },
    {
      company: '聚集诱导发光高等研究院',
      position: '项目经理/研发工程师',
      period: '2021.12 – 2022.02',
      achievements: [
        { text: '收集整理归纳细胞荧光成像领域所使用的AIE分子，进行产业化潜力评价', icon: <FaCode /> },
        { text: '负责AIE材料在生物成像，特别是细胞器成像方向的产业化', icon: <FaServer /> },
        { text: '制定详细的验证流程', icon: <FaRobot /> },
      ]
    },
    {
      company: '南方医科大学深圳医院',
      position: '博士后',
      period: '2019.10 – 2021.11',
      achievements: [
        { text: '氢分子生物荧光探针的开发及其药代动力学研究', icon: <FaCode /> },
      ]
    },
    {
      company: '深圳大学物理与光电学院',
      position: '博士后',
      period: '2017.07 – 2019.09',
      achievements: [
        { text: '活细胞超分辨荧光成像材料的开发', icon: <FaCode /> },
      ]
    },
  ];

  // 使用状态管理响应式布局
  const [isMobile, setIsMobile] = useState(false);

  // 检测窗口大小变化
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 初始检查
    checkMobile();

    // 添加窗口大小变化监听
    window.addEventListener('resize', checkMobile);

    // 清理监听器
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={styles.section}>
      <TriangleDots position="top-right" size={25} opacity={0.4} />
      <TriangleDots position="bottom-left" size={25} opacity={0.4} />

      {/* 添加装饰性背景元素 */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          top: '15%',
          right: '10%',
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          bottom: '20%',
          left: '5%',
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />

      <motion.div
        style={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        <div style={styles.timeline}>
          <motion.div
            style={isMobile ?
              { ...styles.timelineCenter, ...styles.mobileTimelineCenter } :
              styles.timelineCenter
            }
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }} // 减少动画时长
          >
           
          </motion.div>

          {workExperience.map((job, index) => {
            const isEven = index % 2 === 0;
            const itemStyle = isMobile
              ? { ...styles.timelineItem, ...styles.mobileTimelineItem }
              : { ...styles.timelineItem, ...(isEven ? styles.timelineItemLeft : styles.timelineItemRight) };

            const dotStyle = isMobile
              ? { ...styles.timelineDot, ...styles.mobileTimelineDot }
              : { ...styles.timelineDot, ...(isEven ? styles.timelineDotLeft : styles.timelineDotRight) };

            const contentStyle = isMobile
              ? { ...styles.timelineContent, ...styles.mobileTimelineContent }
              : styles.timelineContent;

            return (
              <motion.div
                key={index}
                style={itemStyle}
                variants={timelineItemVariants}
                custom={index}
              >
                <motion.div
                  style={dotStyle}
                  whileHover={{
                    scale: 1.1, // 减小悬停缩放比例
                    boxShadow: '0 0 0 6px rgba(255, 255, 255, 0.3), 0 0 15px rgba(0,0,0,0.3)' // 减小阴影
                  }}
                  animate={{
                    boxShadow: ['0 0 0 4px rgba(255, 255, 255, 0.2)', '0 0 0 4px rgba(255, 255, 255, 0.4)', '0 0 0 4px rgba(255, 255, 255, 0.2)'], // 减小阴影尺寸
                  }}
                  transition={{
                    boxShadow: {
                      repeat: Infinity,
                      duration: 1.5, // 减少动画时长
                    }
                  }}
                >
                  <FaBriefcase size={16} />
                </motion.div>
                <motion.div
                  style={contentStyle}
                  whileHover={{
                    y: -5, // 减小上移距离
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)', // 减小阴影
                    background: 'rgba(255, 255, 255, 0.2)'
                  }}
                  initial={{ opacity: 0, scale: 0.95 }} // 调整初始缩放
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }} // 减少动画时长
                >
                  <h3 style={styles.companyName}>
                    {job.company}
                  </h3>
                  <div style={styles.jobTitle}>{job.position}</div>
                  <span style={styles.period}>{job.period}</span>

                  <ul style={styles.achievementsList}>
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        style={styles.achievementItem}
                        variants={achievementVariants}
                        whileHover={{
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          x: 3, // 减小悬停时的位移
                          transition: { duration: 0.15 } // 减少动画时长
                        }}
                      >
                        <motion.span
                          style={styles.achievementIcon}
                          animate={{ rotate: [0, 3, 0, -3, 0] }} // 减小旋转角度
                          transition={{
                            duration: 1.5, // 减少动画时长
                            repeat: Infinity,
                            repeatDelay: Math.random() * 1.5 + 0.5 // 减少延迟
                          }}
                        >
                          {achievement.icon}
                        </motion.span>
                        <span>{achievement.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export default WorkHistory;