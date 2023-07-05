import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
     {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-14`}>
        <h4 className="font-semibold xl:text-[40px] text-[30px] xl:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
        <p className="font-normal xl:text-[16px] text-[12px] xl:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
      </div>
     ))}
    </section>
  )
};

export default Stats;
