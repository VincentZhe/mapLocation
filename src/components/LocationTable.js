import React, { useState } from "react";

import "antd/dist/antd.css";
import { Table } from "antd";

const LocationTable = (props) => {
  console.log(props.record);

  const [locations, setLocations] = useState([]);

  const columns = [
    { title: "Location Latitude", dataIndex: "lat" },
    { title: "Location Longitude", dataIndex: "lng" },
    { title: "Location Name", dataIndex: "name" },
  ];

  let newLocation = props.record;

  if (newLocation !== undefined) {
    locations.push(newLocation);
  }

  let uniqueLocations = [...new Set(locations)];

  console.log(uniqueLocations);

  return (
    <div className="table">
      <Table
        columns={columns}
        dataSource={uniqueLocations}
        rowSelection={true}
      ></Table>
    </div>
  );
};

export default LocationTable;
