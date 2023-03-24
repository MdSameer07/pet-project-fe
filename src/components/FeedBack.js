import { Input } from "antd";
import { useEffect, useState } from "react";
import "./FeedBack.css"

const { TextArea } = Input;

export const FeedBack = () => {
    const [value,setValue] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [response,setResponse] = useState("")
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const userId = localStorage.getItem('userId')
    const onChange = (e) =>{
        setValue(e.target.value)
    }
    const handleFeedBackSubmit = async (value) =>{
        setSubmitButtonDisabled(true)
        const reqBody = {
            userId : parseInt(userId),
            description : String(value)
        }
        const response = await fetch('/user/give-feedback',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(reqBody)
        })
        if (!response.ok){
            setErrorMsg("Error while submitting FeedBack")
            setSubmitButtonDisabled(false)
            return
        }
        const output = await response.json()

        setResponse(output)
        setSubmitButtonDisabled(false)
    }
    
  return (
    <>
    <div className = "whole-textarea">
      <TextArea className = "feedback-textarea" rows={2} value={value} onChange={onChange}/>
    </div>
    <div className='error-message'>{errorMsg}</div>
    <div className = "feedback-button">
    <button className = "feedback-submit-button" type="submit" disabled={submitButtonDisabled} onClick={()=>handleFeedBackSubmit(value)}>Submit Feedback</button>
    </div>
    {response &&
      <div className="feedback-response-whole">
        <div className="feedback-response">
          <div className="feedback-response-body">
            FeedBack successfully submitted
          </div>
        </div>
      </div>
}
    </>
  );
};
