import pool from "../utils/database";
import { _getAll, _getAllTablesData, _update } from "../queries/table";

const getAll: any = async () => {
  try {
    const result = await pool.query(_getAll);
    return { success: true, data: result.rows, error: null };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

const getAllTablesData: any = async () => {
  try {
    const result = await pool.query(_getAllTablesData);
    return { success: true, data: result.rows, error: null };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

const update: any = async (id: string, description: string) => {
  try {
    const result = await pool.query(_update, [id, description]);
    return { success: true, data: result.rows[0], error: null };
  } catch (e) {
    return { success: false, data: null, error: (e as Error).message };
  }
};

export { getAll, getAllTablesData, update };
