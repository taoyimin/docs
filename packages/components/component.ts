import type { Plugin } from "vue";
import { LivDemoButton } from "./demo-button";
import { LivDictSelect } from "./dict-select";
import { LivGridCascader } from "./grid-cascader";
import { LivDataTable } from "./data-table";
import { LivDataForm } from "./data-form";
import { LivDataDescriptions } from "./data-descriptions";

export default [LivDemoButton, LivDictSelect, LivGridCascader, LivDataTable, LivDataForm, LivDataDescriptions] as Plugin[]
