import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";

const SkillSetsInput = ({ register, setSelectedSkills, loggedInUser }) => {
  const data = [
    { name: "React Js", id: 1 },
    { name: "Next Js", id: 2 },
    { name: "Tailwind CSS", id: 3 },
    { name: "HTMl", id: 4 },
    { name: "CSS", id: 5 },
    { name: "Firebase", id: 6 },
    { name: "MongoDB", id: 7 },
    { name: "Mongoose", id: 8 },
    { name: "Node JS", id: 9 },
    { name: "JWT", id: 10 },
    { name: "Redux", id: 11 },
    { name: "MySQL", id: 12 },
    { name: "Python", id: 13 },
    { name: "Django", id: 14 },
    { name: "PHP", id: 15 },
    { name: "Laravel", id: 16 },
  ];

  const [options] = useState(data);

  const onSelect = (selectedList, selectedItem) => {
    setSelectedSkills(selectedList);
    // (selectedLists);
  };

  const onRemove = (selectedList, removedItem) => {
    setSelectedSkills(selectedList);
    // (selectedLists);
  };
  return (
    <div>
      <Multiselect
        options={options} // Options to display in the dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        // getSelectedItems={getSelectedItems}
        placeholder="Skills (max 10)"
        // onSearch={onSearch}
        selectionLimit="10"
        // showCheckbox={true}
        selectedValues={loggedInUser?.selectedSkills}
        displayValue="name" // Property name to display in the dropdown options
        style={{
          color: "black",
          backgroundColor: "white",
          marginTop: "10px",
        }}
      />
    </div>
  );
};

export default SkillSetsInput;
