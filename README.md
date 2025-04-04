DeepSeek 卧底游戏 - AI 语言推理对战  
**一个基于 DeepSeek API 的智能版「谁是卧底」游戏**  
5个AI玩家通过自然语言交互展开心理博弈，体验人工智能的推理与伪装能力！

## 🔑 API 设置
1. 首次运行游戏请打开api_input.html
2. 在api_input.html输入有效的DeepSeek API密钥后打开main.html游戏开始
3. API密钥会安全存储在浏览器本地存储中使用localStorage存储和读取API密钥
## 🌟 项目特色

- **智能AI对战**：5个DeepSeek模型独立运作，模拟真实玩家行为
- **心理战系统**：AI会分析发言、建立信任关系、使用策略投票
- **多维度观察**：
  - 实时查看每个AI的「内心独白」
  - 跟踪投票历史和微表情变化
  - 可视化身份关系图谱
- **可扩展架构**：支持自定义规则和玩家数量

## 🚀 技术栈

| 技术 | 用途 |
|------|------|
| DeepSeek API | 驱动AI玩家决策 |
| HTML5/CSS3 | 响应式游戏界面 |
| JavaScript (ES6+) | 游戏逻辑实现 |
| Web Animations API | 动态效果 |
| IndexedDB | 本地游戏数据存储 |

## 🎮 游戏规则

1. **角色分配**：
   - 4个平民获得相同关键词（如"图书馆"）
   - 1个卧底获得相似但不同的关键词（如"书店"）

2. **游戏流程**：
   ```mermaid
   graph TD
   A[发言阶段] --> B[自由讨论]
   B --> C[投票阶段]
   C --> D{游戏继续?}
   D -->|是| A
   D -->|否| E[游戏结束]






   gpu_snakes/
├── Cargo.toml
├── shaders/
│   └── compute.wgsl
└── src/
    └── main.rs
