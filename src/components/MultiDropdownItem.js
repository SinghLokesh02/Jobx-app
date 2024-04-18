import React from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const options = [
  {
    label: "C++",
    value: "C++",
  },
  {
    label: "Java",
    value: "Java",
  },
  {
    label: "Python",
    value: "Python",
  },
  {
    label: "JavaScript",
    value: "JavaScript",
  },
  {
    label: "React",
    value: "React",
  },
  {
    label: "Angular",
    value: "Angular",
  },
  {
    label: "Vue",
    value: "Vue",
  },
  {
    label: "Node",
    value: "Node",
  },
  {
    label: "Express",
    value: "Express",
  },
  {
    label: "MongoDB",
    value: "MongoDB",
  },
  {
    label: "SQL",
    value: "SQL",
  },
  {
    label: "Docker",
    value: "Docker",
  },

  {
    label: "Git",
    value: "Git",
  },
  {
    label: "HTML",
    value: "HTML",
  },
  {
    label: "CSS",
    value: "CSS",
  },
];
const MultiDropdownItem = () => (
  <Select
    mode="multiple"
    style={{
      width: "80%",
    }}
    placeholder="Skills"
    onChange={handleChange}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.value}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
);
export default MultiDropdownItem;
