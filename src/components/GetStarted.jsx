import styles from "../style";

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-[#10101C] w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-medium text-[18px] leading-[24px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src='https://svgshare.com/i/usK.svg' alt='arrow' className='w-[24px] h-[24px] object-contain ' />
        </div>
        <div className={`${styles.flexStart} flex-row `}>
          <p className='font-medium text-[18px] leading-[24px]'>
            <span className='text-gradient'>Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
