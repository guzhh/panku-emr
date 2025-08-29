export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // type 类型定义，表示提交的类型必须是以下这些之一
    "type-enum": [
      2,
      "always",
      [
        "feat", // ✨ 新功能
        "fix", // 🐛 修复 Bug
        "docs", // 📝 仅文档变更
        "style", // 💄 代码格式（不影响功能，如空格、分号等）
        "refactor", // 🔨 代码重构（既不是功能也不是修复）
        "perf", // ⚡ 性能优化
        "test", // ✅ 添加或修改测试
        "build", // 📦 构建相关（构建脚本、依赖更新）
        "ci", // 🧪 持续集成相关（GitHub Actions、CI 配置文件）
        "chore", // 🔧 其他杂项（不属于以上类型）
        "revert" // ⏪ 回滚代码
      ]
    ],

    // subject 不能为空
    "subject-empty": [2, "never"],

    // 禁止 subject 以句号结尾
    "subject-full-stop": [2, "never", "."],

    // type 不能为空
    "type-empty": [2, "never"],

    // subject 最长不得超过 100 个字符
    "subject-max-length": [2, "always", 100],

    // 可以允许 scope 为空
    "scope-empty": [2, "always"]
  }
};
