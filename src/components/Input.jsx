const Input = ({ type, placeholder, handleChange, name, value, label }) => {
  return (
    <aside>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        id={name}
      />
    </aside>
  )
}

export default Input
