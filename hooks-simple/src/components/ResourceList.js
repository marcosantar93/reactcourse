import React from "react";
import useResources from "./useResources";

const ResourseList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </div>
  );
};

export default ResourseList;
