export default function Input({ label, type, value, onChange, placeholder }) {
  return (
    <div className="mb-[24px]">
      <label className="block text-[#2B3674] text-[14px]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-[24px] py-[15px] mt-3 border  border-[#E0E5F2]  outline-none rounded-lg "
        required
      />
    </div>
  );
}
