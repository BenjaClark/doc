import createLogger from "../utils/logger";

import * as TableModel from "../models/table";
import * as TableFieldModel from "../models/tableField";
import * as TableIndexModel from "../models/tableIndex";

const getAllTablesData = async (req: any, res: any) => {
  try {
    const result = await TableModel.getAllTablesData();

    if (!result.success) {
      createLogger.error({
        model: "tableField/getAllTablesData",
        error: result.error,
      });
      return res
        .status(500)
        .json({ success: false, data: null, error: result.error });
    }

    const data = result.data.map((tablesData: any) => {
      return {
        table_id: tablesData.table_id,
        table_name: tablesData.table_name,
        table_description: tablesData.table_description,
        table_field_id: tablesData.field_id,
        table_field_name: tablesData.field_name,
        table_field_type: tablesData.field_type,
        table_field_length: tablesData.field_length,
        table_field_default: tablesData.field_default,
        table_field_key: tablesData.field_key,
        table_field_extra: tablesData.field_extra,
        table_index_id: tablesData.index_id,
        table_index_table: tablesData.index_table,
        table_index_column: tablesData.index_column,
      };
    });
    createLogger.info({
      controller: "table/getAllTablesData",
      message: "OK",
    });
    return res.status(200).json({ success: true, data, error: null });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, data: null, error: (e as Error).message });
  }
};

const getAllTable = async (req: any, res: any) => {
  try {
    const result = await TableModel.getAll();

    if (!result.success) {
      createLogger.error({
        model: "table/getAll",
        error: result.error,
      });
      return res
        .status(500)
        .json({ success: false, data: null, error: result.error });
    }

    const data = result.data.map((table: any) => {
      return {
        id: table.id,
        name: table.name,
        description: table.description,
      };
    });
    createLogger.info({
      controller: "table/getAllTable",
      message: "OK",
    });
    return res.status(200).json({ success: true, data, error: null });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, data: null, error: (e as Error).message });
  }
};

const getAllTableField = async (req: any, res: any) => {
  try {
    const result = await TableFieldModel.getAll();

    if (!result.success) {
      createLogger.error({
        model: "tableField/getAll",
        error: result.error,
      });
      return res
        .status(500)
        .json({ success: false, data: null, error: result.error });
    }

    const data = result.data.map((tableField: any) => {
      return {
        id: tableField.id,
        table_id: tableField.name,
        name: tableField.description,
        type: tableField.type,
        length: tableField.length,
        default: tableField.default,
        key: tableField.key,
        extra: tableField.extra,
        description: tableField.description,
      };
    });
    createLogger.info({
      controller: "table/getAllTableField",
      message: "OK",
    });
    return res.status(200).json({ success: true, data, error: null });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, data: null, error: (e as Error).message });
  }
};

const getAllTableIndex = async (req: any, res: any) => {
  try {
    const result = await TableIndexModel.getAll();

    if (!result.success) {
      createLogger.error({
        model: "tableIndex/getAll",
        error: result.error,
      });
      return res
        .status(500)
        .json({ success: false, data: null, error: result.error });
    }

    const data = result.data.map((TableIndex: any) => {
      return {
        id: TableIndex.id,
        table_field_id: TableIndex.table_field_id,
        constraint: TableIndex.constraint,
        table: TableIndex.table,
        column: TableIndex.column,
      };
    });
    createLogger.info({
      controller: "table/getAllTableIndex",
      message: "OK",
    });
    return res.status(200).json({ success: true, data, error: null });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, data: null, error: (e as Error).message });
  }
};

const update = async (req: any, res: any) => {
  try {
    const { id, description } = req.body;

    const result = await TableModel.update(id, description);
    if (!result.success) {
      createLogger.error({
        model: "table/update",
        error: result.error,
      });
      return res
        .status(500)
        .json({ success: false, data: null, error: result.error });
    }
    createLogger.info({
      controller: "table/update",
      message: "OK",
    });
    return res.status(200).json({
      success: true,
      data: "Descripción modificada",
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      data: null,
      error: (e as Error).message,
    });
  }
};

export {
  getAllTable,
  getAllTableField,
  getAllTableIndex,
  getAllTablesData,
  update,
};
