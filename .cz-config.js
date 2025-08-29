export const types = [
  { value: "feat", name: "feat:     ✨ 新功能" },
  { value: "fix", name: "fix:      🐛 修复缺陷" },
  { value: "docs", name: "docs:     📝 文档变更" },
  { value: "style", name: "style:    💄 代码格式（不影响功能，例如空格、分号等）" },
  { value: "refactor", name: "refactor: 🔨 代码重构（既不是新增功能，也不是修复 bug）" },
  { value: "perf", name: "perf:     ⚡ 性能优化" },
  { value: "test", name: "test:     ✅ 添加测试" },
  { value: "build", name: "build:    📦 构建相关" },
  { value: "ci", name: "ci:       🧪 持续集成相关" },
  { value: "chore", name: "chore:    🔧 其他杂项" },
  { value: "revert", name: "revert:   ⏪ 回滚代码" }
];

export const skipQuestions = ["scope"]; // 跳过 scope 提问

export const messages = {
  type: "请选择提交类型:",
  scope: "请输入变更的范围（可选）:",
  customScope: "请输入自定义的变更范围:",
  subject: "请简要描述提交 (必填):",
  body: '请输入详细描述（可选），使用 "|" 换行:',
  breaking: "列出破坏性变更（可选）:",
  footer: "关联关闭的 issue，例如：#31, #34（可选）:",
  confirmCommit: "确认提交吗？(y/n)"
};
