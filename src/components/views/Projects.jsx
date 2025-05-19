import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import TriangleDots from '../common/TriangleDots';
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
    width: '80%', // 宽度稍微放宽，以便展示更多内容
  },
  projectCard: {
    width: '100%',
    maxWidth: '550px',
    height: '500px',
    background: 'rgba(255,255,255,0.12)',
    borderRadius: '20px',
    backdropFilter: 'blur(16px)',
    padding: '32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
    textAlign: 'left',
    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    border: '1px solid rgba(255,255,255,0.08)'
  },
  topRow: {
    marginBottom: '16px',
    fontSize: '1.7rem',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '-0.02em',
    lineHeight: '1.3'
  },
  middleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.15rem',
    marginBottom: '28px',
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  },
  description: {
    flex: 1,
    fontSize: '1.05rem',
    lineHeight: '1.7',
    marginBottom: '24px',
    overflowY: 'auto',
    color: 'rgba(255,255,255,0.8)',
    paddingRight: '8px',
    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '3px'
    }
  },
  performance: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginTop: '24px',
    color: 'rgba(255,255,255,0.9)',
    padding: '12px',
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '8px'
  },
};



const projectsData = [
  {
    title: '基于聚集诱导发光特性的新型融合蛋白标签技术',
    tech: '广州市科技计划项目',
    duration: '2023',
    description: `蛋白质特异性标记技术在生物学研究中广泛应用。构建新的蛋白质特异性标记体系并进一步利用新型荧光功能分子实现特异性标记对于相关研究具有重要意义。`,
    performance: '发表多篇SCI高水平文章。',
  },
  {
    title: '新型STORM成像材料的研究',
    tech: '深圳市科技计划项目',
    duration: '2018',
    description: ` 超分辨显微成像技术在生物医学成像领域表现出极大的应用与发展潜力。申请人拟发展一种基于比例荧光型的超分辨成像方法，设计适合于该方法的新型比例荧光探针。`,
    performance: '成功开发出适用于蛋白荧光标记的AIE大分子标记试剂盒，已成功推向市场。',
  },
  {
    title: '基于AIE的药敏检测技术开发',
    tech: '聚集诱导发光高等研究院',
    duration: '2023',
    description: `随着抗生素的乱用、滥用，各类耐药菌层出不穷。本项目拟利用AIE分子的荧光特性对细菌的生长情况进行监测，开发基于AIE技术的药物敏感性快速检验产品。`,
    performance: '筛选出多款适用于细菌生长检测的荧光材料，并应用于革兰氏阳性细菌和革兰氏阴性细菌的耐药性检测，能够在6小时左右报告细菌的MIC值。',
  },
  {
    title: 'AIE分子及成像试剂的开发',
    tech: '聚集诱导发光高等研究院',
    duration: '2024',
    description: `AIE技术是中国原创性新技术体系，具有高效固态发光和特殊发光机制特征。本项目旨在研究AIE荧光分子合成的适用条件，稳定合成工艺，获取批量的AIE原材料，并开发对应的成像材料。`,
    performance: '获得2000余种AIE分子的合成信息，完成公斤级的生产工艺。',
  },
  {
    title: 'AIE微生物检测',
    tech: '聚集诱导发光高等研究院',
    duration: '2024',
    description: `针对现有微生物检测时间慢、操作繁琐、成本高等问题，基于AIE材料开发微生物快速检测产品，提高检测速度和灵敏度，减轻医务工作者的负担`,
    performance: '开发出细菌革兰氏阴/阳荧光染色液、妇科阴道分泌物荧光染色液、真菌荧光染色液、抗酸荧光染色液等微生物快速检测产品，并进入下游厂家生产线，实现盈利。',
  },
  {
    title: '白细胞五分类试剂研发',
    tech: '聚集诱导发光高等研究院',
    duration: '2023',
    description: `： 白细胞分类染色液的研发在医学和生物学领域具有重要意义。采用AIE荧光核酸染色技术，减少检测步骤，节约检测时间，提高检测效率。`,
    performance: '围绕血细胞分析，成功开发出白细胞分类检测试剂、网织红细胞检测试剂、有核红细胞检测试剂及幼稚白细胞检测试剂及多款溶血剂等试剂，完成多款产品医疗器械备案。',
  },
  {
    title: 'AIE荧光分子筛选及评价标准',
    tech: '聚集诱导发光高等研究院',
    duration: '2023',
    description: `AIE现象提出至今已有20年历史，相关文献和化合物数以万计。建立AIE分子评价标准，有利于新的AIE分子的设计和开发，以及AIE分子在生物领域、产业领域的推广。`,
    performance: '成功建立AIE分子评价标准，涵盖分子设计、合成、表征、应用等多个方面。并在AIE分子筛选中取得良好效果。',
  },
  {
    title: 'AIE抗体标记试剂盒开发',
    tech: '聚集诱导发光高等研究院',
    duration: '2022',
    description: ` 荧光标记的生物大分子可用于监测生物过程、辅助检测等。通过在AIE分子上修饰活化的结构，实现对生物大分子的荧光标记。`,
    performance: ' 成功开发出生物大分子荧光标记试剂盒，完成市场推广，实现盈利',
  },
  {
    title: '基于AIE染料的双链DNA定量试剂盒开发',
    tech: '聚集诱导发光高等研究院',
    duration: '2023',
    description: `  染料法因其快捷准确、良好的线性以及对样本中其他成分的良好抗干扰能力，正在成为双链DNA浓度精确测量的主流方法。本项目预期从AIE分子库中筛选出符合检测要求的目标分子，优化检测条件，实现对双链DNA浓度的精确定量。`,
    performance: ' 成功开发出适用于DNA/RNA定量的试剂及对应便携设备',
  },
  {
    title: '骨关节液中细菌快速检测试剂盒的开发',
    tech: '聚集诱导发光高等研究院',
    duration: '2023',
    description: `致病菌的快速、灵敏、特异性检测对食品质量监管、公共安全等具有重要意义。本项目的开发目标是为微生物检测市场提供一种快速、灵敏、准确的检测方法以及相应的检测试剂盒。`,
    performance: '成功开发出一套适用于骨关节液中细菌快速检测的试剂盒。',
  },
];



// 把项目数据复制两遍，实现无缝滚动
const loopedProjectsData = [...projectsData, ...projectsData];

const Projects = () => {
  return (
    <section style={styles.section}>
      <TriangleDots position="top-left" size={25} opacity={0.4} />
      <TriangleDots position="bottom-right" size={25} opacity={0.4} />
      <div style={styles.container}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          speed={4000} // 整体移动速度，越大越慢
          autoplay={{
            delay: 0, // 每帧连续移动
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // 鼠标悬停暂停
          }}
          freeMode={true}
          allowTouchMove={false}
          style={{ width: '100%' }}
        >
          {loopedProjectsData.map((project, index) => (
            <SwiperSlide key={index} style={{ width: '500px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                style={styles.projectCard}
                whileHover={{
                  scale: 1.05, // 稍微变大
                  boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                  background: 'rgba(255,255,255,0.2)',
                }}
              >
                <div style={styles.topRow}>{project.title}</div>
                <div style={styles.middleRow}>
                  <span>{project.tech}</span>
                  <span>{project.duration}</span>
                </div>
                <div style={styles.description}>
                  <b>项目描述：</b>
                  <p>👉 {project.description}</p>
                  <p>👉 {project.performance}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
