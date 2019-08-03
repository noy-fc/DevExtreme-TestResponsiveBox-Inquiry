import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location
} from "devextreme-react/responsive-box";

import React, { Component } from "react";

import { SelectBox } from "devextreme-react";
import { DateBox } from "devextreme-react";
import { CheckBox } from "devextreme-react/check-box";
import { Button } from "devextreme-react";

import FCDropDownCombo from "./FCDropDownCombo";

function screen(width) {
  return width < 700 ? "sm" : "lg";
}

const data = {
  machineId: 1
};
const machines = [
  {
    id: 1,
    code: "CT",
    name: "CT"
  },
  {
    id: 2,
    code: "MC1",
    name: "Machine1"
  }
];
class Inquiry extends Component {
  render() {
    return (
      <ResponsiveBox singleColumnScreen={"sm"} screenByWidth={screen}>
        <Row ratio={2} />

        <Col ratio={2} />
        <Col ratio={1} />
        <Col ratio={1} />
        <Col ratio={2} />
        <Col ratio={1} />
        <Col ratio={1} />
        <Col ratio={1} />
        <Col ratio={1} />

        <Item>
          <Location row={0} col={0} />
          <div className={"dx-field"}>
            <div className={"dx-field-label"}>Machine :</div>
            <div className={"dx-field-value"}>
              <FCDropDownCombo
                dataSource={machines}
                valueExpr={"id"}
                displayExpr={"name"}
                columnConfigs={this.getColumnsConfig()}
                bindingData={data}
                bindingFieldName={"machineId"}
              >
                {/* <Validator validationGroup={'formGroup'}>
                    <RequiredRule message={"Machine is required"} />
                </Validator> */}
              </FCDropDownCombo>
            </div>
          </div>
        </Item>

        <Item>
          <Location row={0} col={1} />
          <div className={"dx-field"}>
            <div className={"dx-field-label"}>From Date :</div>
            <div className={"dx-field-value"}>
              <DateBox defaultValue={this.now} type={"date"} />
            </div>
          </div>
        </Item>

        <Item>
          <Location row={0} col={2} />
          <div className={"dx-field"}>
            <div className={"dx-field-label"}>To Date :</div>
            <div className={"dx-field-value"}>
              <DateBox defaultValue={this.now} type={"date"} />
            </div>
          </div>
        </Item>

        <Item>
          <Location row={0} col={3} />
          <div className={"dx-field"}>
            <div className={"dx-field-label dx-field-label-80"}>
              Include Complete :
            </div>
            <div className={"dx-field-value dx-field-value-20"}>
              <CheckBox defaultValue={true} />
            </div>
          </div>
        </Item>

        <Item>
          <Location row={0} col={4} />
          <Button
            width={90}
            text={"Search"}
            type={"success"}
            stylingMode={"contained"}
          />
        </Item>

        <Item>
          <Location row={0} col={5} />
          <div>Space</div>
        </Item>

        <Item>
          <Location row={0} col={6} />
          <div className={"dx-field"}>
            <div className={"dx-field-label"}>Action :</div>
            <div className={"dx-field-value"}>
              <FCDropDownCombo
                dataSource={machines}
                valueExpr={"id"}
                displayExpr={"name"}
                columnConfigs={this.getColumnsConfig()}
                bindingData={data}
                bindingFieldName={"machineId"}
              >
                {/* <Validator validationGroup={'formGroup'}>
                    <RequiredRule message={"Machine is required"} />
                </Validator> */}
              </FCDropDownCombo>
            </div>
          </div>
        </Item>

        <Item>
          <Location row={0} col={7} />
          <Button
            width={90}
            text={"Execute"}
            type={"danger"}
            stylingMode={"contained"}
          />
        </Item>
      </ResponsiveBox>
    );
  }

  getColumnsConfig() {
    const configs = [
      { dataField: "id", caption: "id", dataType: "number", visible: false },
      { dataField: "code", caption: "Code", dataType: "string" },
      { dataField: "name", caption: "Name", dataType: "string" }
    ];
    return configs;
  }
}

export default Inquiry;
