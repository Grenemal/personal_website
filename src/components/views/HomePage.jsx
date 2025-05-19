import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import personImage from '../../assets/person.mp4';
import TriangleDots from '../common/TriangleDots';



const MessageBubble = ({ message, position = { top: '50%', left: '60%' }, delay = 0, animationType = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const animations = [
    'fadeInScale 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
    'fadeInFromLeft 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
    'fadeInFromRight 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
    'fadeInFromTop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
    'fadeInFromBottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: isHovered ? 'translateY(-50%) scale(1.2)' : 'translateY(-50%)',
        backgroundColor: isHovered ? 'rgba(109, 83, 178, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        padding: '20px',
        maxWidth: '300px',
        boxShadow: isHovered ? '0 16px 32px rgba(0, 0, 0, 0.5)' : '0 6px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 2,
        animation: `${animations[animationType]} ${delay}s`,
        opacity: 0,
        transformOrigin: 'center',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        cursor: isHovered ? 'pointer' : 'default'
      }}>
      <p style={{ color: isHovered ? 'white' : '#765BB6', margin: 0 }}>{message}</p>
    </div>
  );
};

const Notification = ({ message }) => (
  <div style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(118, 92, 183, 0.95)',
    color: 'white',
    padding: '16px 28px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    animation: 'fadeIn 0.5s ease-out forwards',
    transform: 'translateX(0)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(4px)',
    fontSize: '1.1em',
    fontWeight: '500',
    letterSpacing: '0.5px'
  }}>
    {message}
  </div>
);


const HomePage = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const videoRef = React.useRef(null);

  const handleVideoLoad = () => {
    console.log('视频加载完成');
    setIsLoading(false);
    if (onLoadComplete) {
      console.log('触发onLoadComplete回调');
      onLoadComplete();
    }
  };

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleVideoLoad);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
        }
      };
    }
  }, []);

  const messages = [
    { text: "你好呀！", position: { top: '25%', left: '35%' }, delay: 0 },
    { text: "我叫老十一，英文名ElOneven", position: { top: '72%', left: '58%' }, delay: 0.5 },
    { text: "没有什么成果的科学家", position: { top: '35%', left: '70%' }, delay: 1 },
    { text: "读读文献，读读书，做做科研", position: { top: '65%', left: '24%' }, delay: 1.5 },
    { text: "荧光爱好者", position: { top: '30%', left: '60%' }, delay: 2 },
    { text: "自驱型学习者", position: { top: '20%', left: '66%' }, delay: 2.5 },
    { text: "抬杠青年", position: { top: '78%', left: '32%' }, delay: 3 },
    { text: "E人 | 交流", position: { top: '45%', left: '30%' }, delay: 3.5 },
    { text: "一点都不想动，唱唱歌", position: { top: '56%', left: '73%' }, delay: 4 },
    { text: "软件追求：优美、简约、实用", position: { top: '15%', left: '47%' }, delay: 4.5 },
    { text: "高效 | 独立思考", position: { top: '60%', left: '35%' }, delay: 5 },
    { text: "追梦 | 自由", position: { top: '45%', left: '60%' }, delay: 5.5 },
    { text: "撸起袖子加油干", position: { top: '33%', left: '25%' }, delay: 6 },
    { text: "烧烤爱好者", position: { top: '68%', left: '70%' }, delay: 6.5 },
    { text: "科学管理", position: { top: '50%', left: '20%' }, delay: 7 },
    { text: "六边形战士", position: { top: '12%', left: '23%' }, delay: 7.5 }
  ];



  return (
    <section style={{
      background: '#765BB6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '60px',
      overflow: 'hidden',
      height: '100vh',
    }}>
      <style>{
        `
        @keyframes floatArrow {
          0% { transform: translateY(0); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: translateY(-50%) scale(0.9); }
          100% { opacity: 1; transform: translateY(-50%) scale(1); }
        }
        @keyframes fadeInFromLeft {
          0% { opacity: 0; transform: translateX(-100px) translateY(-50%); }
          100% { opacity: 1; transform: translateX(0) translateY(-50%); }
        }
        @keyframes fadeInFromRight {
          0% { opacity: 0; transform: translateX(100px) translateY(-50%); }
          100% { opacity: 1; transform: translateX(0) translateY(-50%); }
        }
        @keyframes fadeInFromTop {
          0% { opacity: 0; transform: translateY(-100px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInFromBottom {
          0% { opacity: 0; transform: translateY(100px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }`}
      </style>
      <TriangleDots position="top-left" size={25} opacity={0.4} />
      <TriangleDots position="bottom-right" size={25} opacity={0.4} />

      {(
        <video
          src={personImage}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '35%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      )}
      {!isLoading && messages.map((msg, index) => (
        <MessageBubble
          key={index}
          message={msg.text}
          position={msg.position}
          delay={msg.delay}
          animationType={index % 4}
        />
      ))}
      <Notification message="欢迎来到我的个人主页！" />
      <button
        onClick={() => window.open('https://cv.0420301.xyz', '_blank')}
        style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          backgroundColor: '#D14455',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '50px',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          animation: 'fadeIn 0.5s ease-out forwards',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#F83D7E'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#D14455'}
      >
        我的故事
      </button>
      <FaArrowUp
        style={{
          position: 'fixed',
          top: '155px',
          right: '60px',
          zIndex: 1000,
          animation: 'floatArrow 1.5s ease-in-out infinite',
          fontSize: '1.5em',
          color: 'white',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: '50px',
        left: '200px',
        zIndex: 1000,
        fontSize: '1.5em',
        color: 'white',
        animation: 'floatArrow 1.5s ease-in-out infinite',
      }}>
        <h3 style={{
          fontSize: '0.7em',
          marginBottom: '10px',
        }}>
          滚动鼠标或者按下箭头键 ~ 走起！
        </h3>
        <FaArrowDown
          style={{
            fontSize: '0.8em',
            color: 'white',
          }}
        />
      </ div>
    </section>
  );
};

export default HomePage;
