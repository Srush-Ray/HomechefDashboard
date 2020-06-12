import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import './TagInput.css';
function TagInput() {
  const [tags, setTags] = React.useState(["Indian"])
  const  catgories=['indian,','mexican,','chinese'];
  return (
      <div>
      <div style={{display: 'flex'}}>
      {catgories}
       </div>
    <ReactTagInput 
    tags={tags} 
    placeholder="Type categories to add"
    maxTags={10}
    editable={true}
    readOnly={false}
    removeOnBackspace={true}
    onChange={(newTags) => setTags(newTags)}
    validator={(value) => {
      
      const isPresent = catgories.includes(value);
      if (!isPresent) {
        alert("Enter only from the above categories mentioned!!");
      }
      // Return boolean to indicate validity
      return isPresent;
    }}
  />
  </div>
  )
}

export default TagInput