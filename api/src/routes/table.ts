import { Router } from "express";
import * as TableController from "../controllers/table";

const TableRouter = Router();

TableRouter.get("/getAllTable/", TableController.getAllTable);
TableRouter.get("/getAllTableField/", TableController.getAllTableField);
TableRouter.get("/getAllTableIndex/", TableController.getAllTableIndex);
TableRouter.get("/getAllTablesData/", TableController.getAllTablesData);
TableRouter.post("/update/", TableController.update);

export default TableRouter;
