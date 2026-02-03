# ⚡ Швидкий старт: Keystatic через Teleport

> **Для:** Швидкого налаштування за 15-30 хвилин

---

## 🎯 Що буде в результаті

```
Ви → Teleport → Офісний сервер → Keystatic CMS
                                    ↓
                                  GitHub
                                    ↓
                                  Vercel
```

---

## 📋 Чеклист підготовки

- [ ] Доступ до офісного сервера (Ubuntu/Debian)
- [ ] Доступ до Teleport кластера
- [ ] Node.js 18+ на сервері
- [ ] Git SSH доступ до GitHub

---

## 🚀 5 кроків до запуску

### Крок 1: Підготовка сервера (5 хв)

```bash
# SSH на сервер
ssh your-server

# Встановити Node.js (якщо потрібно)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Клонувати проект
cd ~
git clone https://github.com/artemius-info/three-holy-hierarchs-church.git
cd three-holy-hierarchs-church
npm install
```

### Крок 2: Встановити PM2 (2 хв)

```bash
# Встановити PM2
sudo npm install -g pm2

# Запустити Astro
pm2 start npm --name "keystatic" -- run dev -- --host 0.0.0.0

# Зберегти конфігурацію
pm2 save
pm2 startup
```

### Крок 3: Налаштувати Teleport (5 хв)

**Варіант А: Через Teleport UI (рекомендовано)**

1. Відкрити Teleport Dashboard
2. Applications → Add Application
3. Заповнити:
   - Name: `keystatic-cms`
   - URI: `http://localhost:4321`
   - Public Address: `keystatic.teleport.company.com`

4. Скопіювати Join Token
5. На сервері:

```bash
# Встановити Teleport
curl https://get.gravitational.com/teleport-v13.0.0-linux-amd64-bin.tar.gz | tar -xz
sudo mv teleport/teleport /usr/local/bin/

# Підключити до кластера
sudo teleport app start \
  --token=YOUR_JOIN_TOKEN \
  --auth-server=teleport.company.com:443 \
  --name=keystatic-cms \
  --uri=http://localhost:4321
```

**Варіант Б: SSH Tunnel (швидший)**

```bash
# З локального комп'ютера
tsh login --proxy=teleport.company.com
tsh ssh -L 4321:localhost:4321 user@server

# Відкрити в браузері
# http://localhost:4321/keystatic
```

### Крок 4: Налаштувати Git (3 хв)

```bash
# На сервері
ssh-keygen -t ed25519 -C "server@company.com"
cat ~/.ssh/id_ed25519.pub

# Додати ключ у GitHub:
# https://github.com/settings/keys

# Налаштувати Git
git config --global user.name "Keystatic Server"
git config --global user.email "keystatic@company.com"
```

### Крок 5: Автопуш контенту (5 хв)

```bash
# Створити скрипт
cat > ~/auto-push.sh <<'EOF'
#!/bin/bash
cd ~/three-holy-hierarchs-church
if [[ -n $(git status -s src/content/) ]]; then
    git add src/content/
    git commit -m "Auto: content update $(date '+%Y-%m-%d %H:%M')"
    git push origin main
    echo "✅ Pushed to GitHub"
fi
EOF

chmod +x ~/auto-push.sh

# Додати в cron (кожні 10 хв)
(crontab -l 2>/dev/null; echo "*/10 * * * * ~/auto-push.sh >> ~/auto-push.log 2>&1") | crontab -
```

---

## ✅ Перевірка

**1. Перевірити PM2:**
```bash
pm2 status
```
Має показати `online`

**2. Перевірити Astro:**
```bash
curl http://localhost:4321
```
Має повернути HTML

**3. Перевірити Keystatic:**

**Через Teleport App:**
```bash
tsh app login keystatic-cms
tsh app open keystatic-cms
```

**Через SSH tunnel:**
```bash
tsh ssh -L 4321:localhost:4321 user@server
# Відкрити http://localhost:4321/keystatic
```

---

## 📝 Workflow

### Для контент-менеджера:

1. **Зайти в CMS:**
   ```bash
   tsh app login keystatic-cms
   tsh app open keystatic-cms
   ```

2. **Редагувати контент** через веб-інтерфейс

3. **Зберегти** - файл зберігається локально на сервері

4. **Почекати 10 хв** - cron автоматично запушить на GitHub

5. **Перевірити сайт** - Vercel задеплоїть за 2-3 хв

### Альтернативно (негайний пуш):

```bash
# SSH на сервер
tsh ssh user@server

# Запустити скрипт вручну
~/auto-push.sh
```

---

## 🔧 Корисні команди

```bash
# Статус PM2
pm2 status

# Логи Astro
pm2 logs keystatic

# Перезапустити
pm2 restart keystatic

# Git статус
cd ~/three-holy-hierarchs-church && git status

# Ручний пуш
cd ~/three-holy-hierarchs-church && git add . && git commit -m "Update" && git push
```

---

## 🚨 Якщо щось не працює

### PM2 процес offline
```bash
pm2 restart keystatic
pm2 logs keystatic --err
```

### Teleport не підключається
```bash
# Перевірити, чи працює Astro
curl http://localhost:4321

# Перезапустити Teleport
sudo systemctl restart teleport
```

### Git push не працює
```bash
# Перевірити SSH
ssh -T git@github.com

# Якщо помилка, додати ключ у GitHub
cat ~/.ssh/id_ed25519.pub
```

---

## 📚 Детальна документація

**Повна інструкція:** [TELEPORT_KEYSTATIC_SETUP.md](./TELEPORT_KEYSTATIC_SETUP.md)

**Там знайдете:**
- Детальні налаштування безпеки
- Бекапи та моніторинг
- Troubleshooting
- Автоматизація

---

## ✨ Готово!

**Тепер маєте:**
- ✅ Keystatic доступний через Teleport
- ✅ Автоматичний пуш контенту на GitHub
- ✅ Автоматичний деплой на Vercel
- ✅ Безпечний доступ для команди

**Час налаштування:** 15-30 хвилин
**Складність:** Середня

---

**Успіхів! 🎉**
