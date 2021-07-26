import el from "element-ui/lib/locale/lang/zh-TW";
import fu from "fit2cloud-ui/src/locale/lang/zh-TW"; // 加载fit2cloud的内容

const message = {
  commons: {
    message_box: {
      alert: "警告",
      confirm: "確認",
      prompt: "提示",
    },
    button: {
      login: "登錄",
      ok: "確定",
      save: "保存",
      delete: "刪除",
      cancel: "取消",
      return: "返回",
    },
    msg: {
      success: "{0}成功",
      op_success: "操作成功",
      save_success: "保存成功",
      delete_success: "刪除成功",
    },
    validate: {
      limit: '長度在 {0} 到 {1} 個字符',
      input: "請輸入{0}",
      select: "請選擇{0}",
    },
    personal: {
      personal_information: "個人信息",
      help_documentation: "幫助文檔",
      exit_system: "退出系統",
    }
  },
  login: {
    username: "用戶名",
    password: "密碼",
    title: "登錄 FIT2CLOUD",
    welcome: "歡迎回來，請輸入用戶名和密碼登錄",
    expires: '認證信息已過期，請重新登錄',
  },
  route: {
    router_demo: "路由示例",
    router_menu: "路由與菜單",
    router_keep_alive: "組件緩存",
    components: "組件",
    complex_table: "複合表格",
    layout_content: "頁面佈局",
    system_setting: "系統設置",
    user_management: "用戶管理",
    params_setting: "參數設置",
  },
}

export default {
  ...el,
  ...fu,
  ...message
};
