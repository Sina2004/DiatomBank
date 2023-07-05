import styles from "../../style";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-medium tetx-[18px] text-[#12111D] outline-none ${styles} rounded-md`}
    >Get Started</button>
  );
};

export default Button;
