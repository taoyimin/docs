// GlobalComponents for Volar
import LivDictSelect from "./dict-select";
import LivGridCascader from "./grid-cascader";
import LivDataForm from "./data-form";
import LivForm from "./form";
import LivFormItem from "./form-item";
import LivDataTable from "./data-table";
import LivDataDescriptions from "./data-descriptions";
import LivDataPagination from "./data-pagination";
import LivDataCard from "./data-card";
import LivLocationPicker from "./location-picker";
import LivLocationPickerPlus from "./location-picker-plus";
import LivEventDetail from "./event-detail";
import LivGridTree from "./grid-tree";
import LivMonitorTree from "./monitor-tree";
import LivFacilityDevices from "./facility-devices";
import LivLoginForm from "./login-form";
import LivLoginView from "./login-view";
import LivPageSelect from "./page-select";
import LivPersonnelSelect from "./personnel-select";
import LivSettingTheme from "./setting-theme";
import LivAsideMenu from "./aside-menu";
import LivIconFont from "./icon-font";
import LivTabsBar from "./tabs-bar";
import LivNotFound from "./not-found";
import LivPageHeader from "./page-header";
import LivGuidePage from "./guide-page";
import LivMonitorPlayer from "./monitor-player";
import LivMonitorWall from "./monitor-wall";
import LivXgPlayer from "./xg-player";
import LivMetaPlayer from "./meta-player";
import LivSearchForm from "./search-form";
import LivQrCode from "./qr-code";
import LivModifyPwd from "./modify-pwd";
import LivAMap from "./a-map";

declare module "vue" {
  export interface GlobalComponents {
    LivDictSelect: typeof LivDictSelect;
    LivGridCascader: typeof LivGridCascader;
    LivDataForm: typeof LivDataForm;
    LivForm: typeof LivForm;
    LivFormItem: typeof LivFormItem;
    LivDataTable: typeof LivDataTable;
    LivDataDescriptions: typeof LivDataDescriptions;
    LivDataPagination: typeof LivDataPagination;
    LivDataCard: typeof LivDataCard;
    LivLocationPicker: typeof LivLocationPicker;
    LivLocationPickerPlus: typeof LivLocationPickerPlus;
    LivEventDetail: typeof LivEventDetail;
    LivGridTree: typeof LivGridTree;
    LivMonitorTree: typeof LivMonitorTree;
    LivFacilityDevices: typeof LivFacilityDevices;
    LivLoginForm: typeof LivLoginForm;
    LivLoginView: typeof LivLoginView;
    LivPageSelect: typeof LivPageSelect;
    LivPersonnelSelect: typeof LivPersonnelSelect;
    LivSettingTheme: typeof LivSettingTheme;
    LivAsideMenu: typeof LivAsideMenu;
    LivIconFont: typeof LivIconFont;
    LivTabsBar: typeof LivTabsBar;
    LivNotFound: typeof LivNotFound;
    LivPageHeader: typeof LivPageHeader;
    LivGuidePage: typeof LivGuidePage;
    LivMonitorPlayer: typeof LivMonitorPlayer;
    LivMonitorWall: typeof LivMonitorWall;
    LivXgPlayer: typeof LivXgPlayer;
    LivMetaPlayer: typeof LivMetaPlayer;
    LivSearchForm: typeof LivSearchForm;
    LivQrCode: typeof LivQrCode;
    LivModifyPwd: typeof LivModifyPwd;
    LivAMap: typeof LivAMap;
  }
}

export {};
