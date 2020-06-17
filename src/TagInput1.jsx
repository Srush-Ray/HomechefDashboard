import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import './TagInput.css';
function TagInput1() {
  const [tags, setTags] = React.useState(["maharashtrian"])
  const  catgories=['maharashtrian','gujarati','kokani'];
  const list=catgories.join(',')
  return (
    <div>
    <div style={{display: 'flex'}}>
    {list}
     </div>
    <ReactTagInput 
    tags={tags} 
    placeholder="Type subcategories to add"
    maxTags={10}
    editable={true}
    readOnly={false}
    removeOnBackspace={true}
    onChange={(newTags) => setTags(newTags)}
    validator={(value) => {
      const isPresent = catgories.includes(value);
      if (!isPresent) {
        alert("Enter only from the above subcategories mentioned!!");
      }
      // Return boolean to indicate validity
      return isPresent;
    }}
  />
  </div>
  )
}

export default TagInput1