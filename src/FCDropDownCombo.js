import React, { Component } from "react";
import { DropDownBox } from "devextreme-react";
import FCDataGrid from "./FCDataGrid";
// import {
//   Validator,
//   RequiredRule
// } from 'devextreme-react/validator'

class FCDropDownCombo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridBoxValue: this.props.bindingData[this.bindingFieldName],
      gridSelectedRowKeys: [this.props.bindingData[this.bindingFieldName]]
    };
  }

  handleValueChanged = e => {
    this.setState({
      gridBoxValue: e.value,
      gridSelectedRowKeys: !e.value ? [] : [e.value]
    });

    this.setValueToBindingData(e.value);
  };

  handleSelectionChanged = e => {
    const newValue = (e.selectedRowKeys.length && e.selectedRowKeys[0]) || null;
    // const previousValue = this.state.gridBoxValue
    this.setState({
      gridBoxValue: newValue,
      gridSelectedRowKeys: !newValue ? [] : [newValue]
    });
    this.setValueToBindingData(newValue);
  };

  gridBox_displayExpr = item => {
    return item && `${item[this.props.displayExpr]}`;
  };

  handleRowClick = () => {
    this.dropDown.instance.close();
    this.dropDown.instance.focus();
  };

  onOptionChanged = e => {
    if (e.fullName === "searchPanel.text") {
      e.component.__searchChanged = true;
      this.onSearchCallback(e.component);
    }
  };

  onSearchCallback = grid => {
    setTimeout(() => {
      grid.selectRowsByIndexes([0]);
    }, 200);
  };

  onEnterInSearchPanel = () => {
    if (
      !this.state.gridSelectedRowKeys ||
      this.state.gridSelectedRowKeys.length === 0
    )
      return;

    this.dropDown.instance.close();
    this.dropDown.instance.focus();
  };

  setValueToBindingData(value) {
    if (!this.props.bindingData && this.props.bindingFieldName === "") return;

    this.props.bindingData[this.props.bindingFieldName] = value;
  }
  renderGrid = e => {
    const gridJsx = (
      <FCDataGrid
        {...this.props}
        ref={ref => (this.dataGrid = ref)}
        keyExpr={this.props.valueExpr}
        gridCssClassName={"dropdown-grid1"}
        selectionMode={"single"}
        showMoreFunctionsColumn={false}
        hideFilterRow={true}
        hideExportExcel={true}
        hideColumnChooser={true}
        hideGroupPanel={true}
        hoverStateEnabled={true}
        selectedRowKeys={this.state.gridSelectedRowKeys}
        onSelectionChanged={this.handleSelectionChanged}
        onRowClick={this.handleRowClick}
        onOptionChanged={this.onOptionChanged}
        onEnterInSearchPanel={this.onEnterInSearchPanel}
        height={"100%"}
      />
    );
    return gridJsx;
  };

  render() {
    // console.log("received this.props", this.props)
    return (
      <DropDownBox
        {...this.props}
        ref={ref => (this.dropDown = ref)}
        value={this.state.gridBoxValue}
        displayExpr={this.gridBox_displayExpr}
        deferRendering={true}
        placeholder={
          !this.props.placeholder ? "Select a value..." : this.props.placeholder
        }
        showClearButton={true}
        onValueChanged={this.handleValueChanged}
        contentRender={this.renderGrid}
        dropDownOptions={{
          resizeEnabled: true,
          width: 400
        }}
      >
        {this.props.children}
      </DropDownBox>
    );
  }
}

export default FCDropDownCombo;
