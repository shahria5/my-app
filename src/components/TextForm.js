import React, {useState} from "react";




export default function TextForm(props) {
  function wordCounter(text){
    let ct=0
    for(const word of text.split(" ")){
      if(word !== ""){
        ct += 1
      }
    }
    return ct
  }
  function handleOnChange(event){
    setText(event.target.value)
  }
  function handleUppercase(){
    setText(text.toUpperCase())
    props.showalert("sucess", "text capitalized")
  }
  function handleLowercase(){
    setText(text.toLowerCase())
    props.showalert("sucess", "text lowercapitalized")
  }
  function handleCopy() {
    document.getElementById("myBox").select()
    navigator.clipboard.writeText(document.getElementById("myBox").value)
    props.showalert("sucess", "text copied")
  }
  function handleExtraSpace(){
    setText(text.split(/[ ]+/).join(" "))
    props.showalert("sucess", "extran spaces removed")
  }
  function handleFontSize(){
    document.getElementById("myBox").style.fontSize = document.getElementById("fontSize").value + "px"
  }

  const [text, setText] = useState("enter text here")

  return (
    <>
    <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
      <h3>{props.heading}</h3>
      <label htmlFor="myBox" className="form-label mb-0">
        Example textarea
      </label>
      <div className="mb-2">Font size: <input style={{color: props.mode==="light"?"black":"white", backgroundColor: props.mode==="light"?"white":"gray", border: props.mode==="light"?"1px solid #ced4da":"1px solid white", borderRadius: ".25rem"}} type="number" id="fontSize" onChange={handleFontSize}/></div>
      <textarea
        className="form-control"
        style={{backgroundColor: props.mode==="light"?"white":"gray", color: props.mode==="light"?"black":"white"}}
        id="myBox"
        rows="5"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <button className={`btn btn-primary mr-2`} onClick={handleUppercase}>convet to uppercase</button>
      <button className={`btn btn-primary m-2`} onClick={handleLowercase}>convet to lowercase</button>
      <button className={`btn btn-primary m-2`} onClick={handleCopy}>copy</button>
      <button className={`btn btn-primary m-2`} onClick={handleExtraSpace}>remove extra space</button>
    </div>
    <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
      <h3>text summary</h3>
      <p>{wordCounter(text)} words {text.length} char</p>
      <p>{0.008 * wordCounter(text)} minutes to read</p>
      <h3>preview</h3>
      <p>{text.length>0?text:"enter something to preview it here"}</p>
    </div>
    </>
  );
}

 


