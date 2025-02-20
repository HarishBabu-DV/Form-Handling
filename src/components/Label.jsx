
const Label = ({inputName,labelName,className}) => {
  return (
    <label htmlFor={inputName} className={`${className} text-xl font-medium w-[20%]`} >{labelName}</label>
  )
}

export default Label