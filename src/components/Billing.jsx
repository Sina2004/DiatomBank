import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src='https://s8.uupload.ir/files/bill_778s.png'
          alt='Billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />

        <div className='absolute z-[5] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={`${layout.sectionInfo} xl:pl-20`}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src='https://svgshare.com/i/urT.svg'
            alt='App-Store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src='https://svgshare.com/i/urU.svg'
            alt='google-Store'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
