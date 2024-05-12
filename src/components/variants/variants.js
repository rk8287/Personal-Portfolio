

export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: "easeOut",
        },
      },
    };
  };
  

  

export const fadeInS = (direction,delay) =>{

    return{
        hidden:{
            y: direction  === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction  === 'left' ? 60 : direction === 'right' ? -60 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.7,
                delay: delay,
                ease: [0.35,0.35,0.35,0.85]
            }
        }
    }
}