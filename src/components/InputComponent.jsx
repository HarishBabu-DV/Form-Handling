
const InputCard = ({inputType,placeholderText,inputName,className,valueText,onChange}) => {




  return (      
        <input className={`${className} border-1 rounded-sm px-4 py-2 w-[60%]`} type={inputType || 'text'} placeholder={placeholderText || "Enter here"} name={inputName} value={valueText} 
        onChange={onChange}/>
  )
}

export default InputCard