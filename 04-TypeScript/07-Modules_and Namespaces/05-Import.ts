import { Employee, PermanentEmployee as PE } from "./03-Export";

let emp = new PE("Miley Cyrus", 214);
emp.doWork();

import * as allEmp from "./04-ExportAlias";
let emp2 = new allEmp.PermanentEmployee("Thomus", 5211);
emp2.doWork();