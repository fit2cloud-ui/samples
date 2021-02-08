import Layout from "@/business/app-layout/horizontal-layout";
import i18n from "@/i18n";

const SystemSetting = {
  path: '/system-setting',
  component: Layout,
  name: 'SystemSetting',
  meta: {
    title: i18n.t("system_setting.title"),
    icon: 'el-icon-setting',
    roles: ['admin']
  },
  children: [
    {
      path: 'user-management',
      component: () => import('@/business/system-setting/UserManagement'),
      name: "UserManagement",
      meta: {
        title: i18n.t("system_setting.user_management.title"),
        roles: ['admin']
      }
    },
    {
      path: 'params-setting',
      component: () => import('@/business/system-setting/ParamsSetting'),
      name: "ParamsSetting",
      meta: {
        title: i18n.t("system_setting.params_setting.title"),
        roles: ['admin']
      }
    }
  ]
}
export default SystemSetting
