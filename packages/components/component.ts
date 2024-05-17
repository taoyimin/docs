import type { Plugin } from "vue";
import { LivDictSelect } from "./dict-select";
import { LivGridCascader } from "./grid-cascader";
import { LivDataTable } from "./data-table";
import { LivDataForm } from "./data-form";
import { LivForm } from "./form";
import { LivFormItem } from "./form-item";
import { LivDataDescriptions } from "./data-descriptions";
import { LivDataPagination } from "./data-pagination";
import { LivDataCard } from "./data-card";
import { LivLocationPicker } from "./location-picker";
import { LivLocationPickerPlus } from "./location-picker-plus";
import { LivEventDetail } from "./event-detail";
import { LivGridTree } from "./grid-tree";
import { LivMonitorTree } from "./monitor-tree";
import { LivFacilityDevices } from "./facility-devices";
import { LivLoginForm } from "./login-form";
import { LivLoginView } from "./login-view";
import { LivPageSelect } from "./page-select";
import { LivPersonnelSelect } from "./personnel-select";
import { LivSettingTheme } from "./setting-theme";
import { LivAsideMenu } from "./aside-menu";
import { LivIconFont } from "./icon-font";
import { LivTabsBar } from "./tabs-bar";
import { LivNotFound } from "./not-found";
import { LivPageHeader } from "./page-header";
import { LivGuidePage } from "./guide-page";
import { LivMonitorPlayer } from "./monitor-player";
import { LivMonitorWall } from "./monitor-wall";
import { LivXgPlayer } from "./xg-player";
import { LivMetaPlayer } from "./meta-player";
import { LivSearchForm } from "./search-form";
import { LivQrCode } from "./qr-code";
import { LivFacilitySelection } from "./facility-selection";
import { LivModifyPwd } from "./modify-pwd";
import { LivAMap } from "./a-map";

export default [
  LivDictSelect,
  LivGridCascader,
  LivDataTable,
  LivDataForm,
  LivForm,
  LivFormItem,
  LivDataDescriptions,
  LivDataPagination,
  LivDataCard,
  LivLocationPicker,
  LivLocationPickerPlus,
  LivEventDetail,
  LivGridTree,
  LivMonitorTree,
  LivFacilityDevices,
  LivLoginForm,
  LivLoginView,
  LivPageSelect,
  LivPersonnelSelect,
  LivSettingTheme,
  LivAsideMenu,
  LivIconFont,
  LivTabsBar,
  LivNotFound,
  LivPageHeader,
  LivGuidePage,
  LivMonitorPlayer,
  LivMonitorWall,
  LivXgPlayer,
  LivMetaPlayer,
  LivSearchForm,
  LivQrCode,
  LivFacilitySelection,
  LivModifyPwd,
  LivAMap,
] as Plugin[];
