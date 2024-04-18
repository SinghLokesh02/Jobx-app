import React from "react";
import { Select } from "antd";

const Dropdown = (props) => {
     const {name,data} = props;
  return (
    <Select
      showSearch
      className="w-[80%] min-w-28"
      placeholder={name}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={data}
    />
  );
};

export default Dropdown;
