# iOS PWA 安裝 404 問題解決方案

## 問題描述

在 GitHub Pages 上託管 PWA 時，從主屏幕（iOS Safari "加入主屏幕"）打開網頁會顯示 404 錯誤，但瀏覽器直接訪問正常（返回 200）。

## 根本原因

1. **Safari 緩存舊的 404 鏈接**
   - 第一次嘗試時（部署未完成）保存了錯誤的 URL
   - 即使後來部署成功，PWA 使用緩存的舊 manifest.json
   - Safari 不會自動刷新 PWA 緩存

2. **GitHub Pages 子目錄託管問題**
   - 網站託管在 `/repo-name/` 子目錄
   - PWA 資源路徑需要正確配置
   - 相對路徑在子目錄可能無法正確解析

3. **manifest.json 配置複雜**
   - 過多配置字段導致 iOS Safari 兼容性問題
   - `scope` 限制過嚴格導致路由問題

## 解決方案（兩種方案）

### 方案 1：簡化 PWA 配置（用於現有 repo）

**步驟：**

1. **簡化 manifest.json**
   ```json
   {
     "name": "App Name",
     "short_name": "App",
     "start_url": "/",
     "display": "standalone",
     "theme_color": "#667eea",
     "icons": [
       {
         "src": "icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       }
     ]
   }
   ```
   - 移除不必要的字段（`scope`、複雜的 `purpose`）
   - 使用簡單的相對路徑

2. **添加 404.html 重定向頁面**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
     <title>Redirecting...</title>
     <script>
       var segmentCount = 0;
       var l = window.location;
       l.replace(
         l.protocol,
         l.hostname,
         l.pathname.split('/').slice(0, 1 + segmentCount).join('/')
       );
     </script>
   </head>
   <body>
     <h1>Redirecting...</h1>
   </body>
   </html>
   ```
   - 用於處理 GitHub Pages 的客戶端路由問題
   - 使用 History API 重定向到正確頁面

3. **部署並標記版本**
   ```bash
   git add .
   git commit -m "fix: PWA improvements"
   git push
   git tag -a v1.0.1 -m "Release notes"
   git push origin v1.0.1
   ```

**結果：**
- 部分解決問題，但子目錄託管仍有 PWA 路徑問題

---

### 方案 2：重新部署到根目錄（推薦方案）⭐

**為什麼更好：**
- 沒有 `/repo-name/` 子路徑
- 簡單的 URL：`username.github.io`
- 避免 GitHub Pages 的子目錄路由問題
- PWA manifest 更可靠

**步驟：**

1. **複製項目到新目錄**
   ```bash
   cp -r original-repo new-app-dir
   cd new-app-dir
   rm -rf .git
   ```

2. **初始化新的 Git repo**
   ```bash
   git init
   git branch -m main
   git config user.email "email@example.com"
   git config user.name "Your Name"
   ```

3. **簡化 manifest.json（關鍵！）**
   ```json
   {
     "name": "App Name",
     "short_name": "App",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#667eea",
     "theme_color": "#667eea",
     "icons": [
       {
         "src": "icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "icon-512.png",
         "sizes": "512x512",
         "type": "image/png"
       }
     ]
   }
   ```
   **注意：**
   - 移除 `scope`（讓瀏覽器自動處理）
   - 使用相對路徑（不是絕對路徑）
   - 只保留必要字段

4. **提交代碼**
   ```bash
   git add .
   git commit -m "Initial commit: App Name"
   ```

5. **創建用戶 GitHub Pages repo**
   ```bash
   gh repo create username.github.io --public --source=. --remote=origin --push
   ```

6. **啟用 GitHub Pages**
   ```bash
   gh api -X POST repos/username/danalston.github.io/pages \
     -f source[branch]=main \
     -f source[path]=/
   ```
   **注意：**
   - 如果返回 "GitHub Pages is already enabled"，說明已配置
   - 需要等待 30 秒讓部署完成

7. **驗證部署**
   ```bash
   # 等待 30 秒
   sleep 30

   # 檢查狀態
   gh api repos/username/danalston.github.io/pages
   ```

8. **打標籤**
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0: Description"
   git push origin v1.0.0
   ```

**結果：**
- ✅ 完全解決 404 問題
- ✅ iOS Safari 正常添加到主屏幕
- ✅ PWA 工作正常

---

## 用戶端清理步驟（關鍵！）

**必須完全清除 Safari 緩存：**

1. **刪除主屏幕所有舊圖標**
   - 長按圖標 → "刪除應用"
   - 必須刪除所有舊的 PWA 快捷方式

2. **完全關閉 Safari**
   - iPhone X 及以上：從底部向上滑動
   - 雙擊 Home 鍵 → 上滑關閉所有 Safari 視窗

3. **清除 Safari 數據（可選但推薦）**
   - 設置 → Safari
   - 清除歷史記錄與網站數據
   - 點擊"清除歷史記錄與網站數據"

4. **重新打開 Safari 並訪問網站**
   - 等待 GitHub Pages 部署完成（30 秒 - 2 分鐘）
   - 訪問：https://username.github.io/
   - 確認看到正常頁面（不是 404）

5. **重新添加到主屏幕**
   - 點擊分享按鈕（底部中間）
   - 向下滾動，找到"加入主屏幕"
   - 點擊"加入"
   - 確認圖標和名稱正確

---

## 常見錯誤及原因

### 錯誤 1：manifest.json 路徑問題

**症狀：**
- Safari 無法找到 manifest.json
- 添加到主屏幕時顯示錯誤

**原因：**
- 使用了相對路徑但子目錄託管時無法解析
- 圖標路徑錯誤

**解決：**
- 使用根目錄部署（方案 2）
- 或在子目錄中使用絕對路徑（`/repo-name/`）

---

### 錯誤 2：Safari 緩存舊的 404

**症狀：**
- 網站部署成功，瀏覽器訪問正常（200）
- 主屏幕圖標打開仍然是 404

**原因：**
- Safari 緩存了第一次嘗試（404）的 manifest.json
- PWA 使用緩存的舊配置
- Safari 不會自動刷新 PWA 緩存

**解決：**
- 完全關閉 Safari（不是最小化）
- 清除瀏覽器數據
- 刪除所有舊的 PWA 圖標
- 等待部署完成後重新添加

---

### 錯誤 3：GitHub Pages 子目錄路由問題

**症狀：**
- 直接訪問網站正常
- PWA 訪問時返回 404

**原因：**
- GitHub Pages 是靜態服務器
- 不支持 SPA（Single Page App）的客戶端路由
- 子目錄託管時路徑解析複雜

**解決：**
- 部署到根目錄（方案 2）
- 或添加 404.html 重定向頁面
- 簡化 manifest.json 路徑

---

## 最佳實踐建議

### 1. 優先使用根目錄部署
- 避免 `/repo-name/` 子路徑
- 簡單的 URL：`username.github.io`
- 減少 PWA 路徑問題

### 2. 保持 manifest.json 簡單
- 只包含必要字段
- 使用相對路徑
- 移除不必要的 `scope` 和複雜配置

### 3. 及時標記版本
- 使用 git tag 管理版本
- 每次發布都打新標籤
- 方便追蹤和回滾

### 4. 完整清理用戶端緩存
- 部署新版本前提醒用戶
- 提供詳細的清理步驟
- 強調必須刪除舊 PWA 圖標

### 5. 驗證部署狀態
```bash
# 檢查 GitHub Pages 狀態
gh api repos/username/repo-name/pages

# 等待部署完成
sleep 30

# 檢查是否成功
curl -I https://username.github.io/
```

---

## 檢查清單

部署前：
- [ ] manifest.json 使用相對路徑
- [ ] 移除不必要的 `scope` 字段
- [ ] 包含正確的圖標（PNG/SVG）
- [ ] 有 index.html 在根目錄
- [ ] 404.html 重定向頁面（可選）

部署後：
- [ ] GitHub Pages 狀態為 "built"
- [ ] curl 或瀏覽器訪問返回 200
- [ ] 等待 30 秒以上讓部署完成

用戶端：
- [ ] 刪除所有舊的 PWA 圖標
- [ ] 完全關閉 Safari
- [ ] 清除 Safari 緩存
- [ ] 重新訪問網站確認正常
- [ ] 重新添加到主屏幕
- [ ] 從主屏幕打開確認成功

---

## 參考資源

- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
- [Stack Overflow: PWA on GitHub Pages](https://stackoverflow.com/questions/60768884/404-error-for-a-pwa-hosted-on-github-pages)
- [PWA Manifest Best Practices](https://web.dev/add-manifest/)

---

## 案例記錄：Tabata Timer

**問題：** iOS Safari 添加到主屏幕後打開顯示 404

**解決方案：** 方案 2（根目錄部署）

**執行步驟：**
1. 複製到新目錄 `tabata-app`
2. 簡化 manifest.json
3. 創建 `danalston.github.io` repo
4. 部署到根目錄
5. 打標籤 v1.0.0

**結果：**
- ✅ 部署成功（https://danalston.github.io/）
- ✅ 瀏覽器訪問正常（200）
- ✅ iOS Safari 正常添加到主屏幕
- ✅ PWA 功能正常工作

**關鍵成功因素：**
1. 使用根目錄部署（避免子路徑）
2. 簡化 manifest.json（移除 `scope`）
3. 相對路徑配置（`start_url: "/"`）
4. 用戶端完全清除 Safari 緩存

---

**日期：** 2026-03-10
**作者：** Dan Alston
