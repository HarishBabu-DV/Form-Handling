
const InputCard = ({labelname,inputType,placeholderText}) => {
  return (
    <div>
        <label htmlFor="">{}</label>
        <input type={inputType || 'text'} placeholder={placeholderText || "Enter here"} />
    </div>
  )
}

export default InputCard