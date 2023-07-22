import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] rounded-[24px] bg-[#323f5d]`}>
      <p className='font-bold text-[20px] text-white'>0{number}</p>
    </div>
    <p className='flex-1 ml-[30px] font-normal sm:text-[18px] text-[14px] text-[#B0B0B0] leading-[32px]'>
      {text}
    </p>
  </div>
);

export default StartSteps;
