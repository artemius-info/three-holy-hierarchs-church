# 🚀 Налаштування Keystatic з Teleport

> **Мета:** Запустити Astro + Keystatic на офісному сервері з доступом через Teleport

---

## 📋 Зміст

1. [Огляд архітектури](#архітектура)
2. [Підготовка сервера](#підготовка-сервера)
3. [Налаштування Astro](#налаштування-astro)
4. [Налаштування Teleport](#налаштування-teleport)
5. [Робота з Keystatic](#робота-з-keystatic)
6. [Автоматизація](#автоматізація)
7. [Безпека](#безпека)
8. [Troubleshooting](#troubleshooting)

---

## 🏗️ Архітектура {#архітектура}

```
┌─────────────────────────────────────────────────────┐
│  Зовнішні користувачі                               │
│  (дизайнер, контент-менеджер)                       │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ HTTPS через Teleport
                   │
┌──────────────────▼──────────────────────────────────┐
│  Teleport Proxy                                     │
│  (teleport.your-company.com)                        │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ Проксування на внутрішній сервер
                   │
┌──────────────────▼──────────────────────────────────┐
│  Офісний сервер (192.168.x.x)                       │
│  ┌──────────────────────────────────────────────┐   │
│  │  Astro Dev Server                            │   │
│  │  Port: 4321                                  │   │
│  │  ├─ http://localhost:4321/keystatic (CMS)   │   │
│  │  └─ http://localhost:4321/ (preview)        │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │  Git Repository (локальний)                  │   │
│  │  /var/www/three-holy-hierarchs               │   │
│  │  ├─ src/content/posts/*.md                   │   │
│  │  ├─ src/content/sermons/*.md                 │   │
│  │  └─ src/content/saints/*.md                  │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                   │
                   │ git push
                   │
┌──────────────────▼──────────────────────────────────┐
│  GitHub                                             │
│  artemius-info/three-holy-hierarchs-church          │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ Webhook на деплой
                   │
┌──────────────────▼──────────────────────────────────┐
│  Vercel                                             │
│  https://three-holy-hierarchs-church.vercel.app     │
└─────────────────────────────────────────────────────┘
```

---

## 🖥️ Підготовка сервера {#підготовка-сервера}

### Крок 1: Системні вимоги

**Мінімальні:**
- **OS:** Ubuntu 20.04+ / Debian 11+ / CentOS 8+
- **CPU:** 2 cores
- **RAM:** 2 GB
- **Disk:** 10 GB вільного місця
- **Node.js:** v18+ або v20+

**Перевірка:**
```bash
# Перевірити версію Node.js
node --version  # Має бути v18.x або v20.x

# Перевірити npm
npm --version

# Перевірити Git
git --version
```

### Крок 2: Встановлення Node.js (якщо потрібно)

**Для Ubuntu/Debian:**
```bash
# Встановити Node.js 20.x LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Встановити build tools
sudo apt-get install -y build-essential
```

**Для CentOS/RHEL:**
```bash
# Встановити Node.js 20.x LTS
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

# Встановити build tools
sudo yum groupinstall -y "Development Tools"
```

### Крок 3: Створення користувача для запуску

```bash
# Створити користувача
sudo useradd -m -s /bin/bash astro-app
sudo usermod -aG sudo astro-app  # Якщо потрібні sudo права

# Перейти під користувача
sudo su - astro-app
```

### Крок 4: Клонування репозиторію

```bash
# Перейти у домашню директорію
cd ~

# Створити директорію для проекту
mkdir -p /home/astro-app/projects
cd /home/astro-app/projects

# Клонувати репозиторій
git clone https://github.com/artemius-info/three-holy-hierarchs-church.git
cd three-holy-hierarchs-church

# Встановити залежності
npm install
```

### Крок 5: Налаштування SSH ключів для Git

```bash
# Згенерувати SSH ключ (якщо немає)
ssh-keygen -t ed25519 -C "server@your-company.com"

# Показати публічний ключ
cat ~/.ssh/id_ed25519.pub

# Додайте цей ключ у GitHub:
# https://github.com/settings/keys
```

### Крок 6: Налаштування Git

```bash
# Встановити ім'я та email
git config --global user.name "Keystatic Server"
git config --global user.email "keystatic@your-company.com"

# Налаштувати автопуш на main
git config --global push.default simple
```

---

## ⚙️ Налаштування Astro {#налаштування-astro}

### Крок 1: Налаштування для серверного запуску

**Редагуємо package.json:**
```bash
nano package.json
```

**Додайте скрипт для production:**
```json
{
  "scripts": {
    "dev": "astro dev",
    "dev:host": "astro dev --host 0.0.0.0",
    "dev:prod": "astro dev --host 0.0.0.0 --port 4321",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

### Крок 2: Тестовий запуск

```bash
# Запустити dev сервер
npm run dev:host

# Перевірити, чи доступний
curl http://localhost:4321
```

**Якщо все працює:**
- ✅ Сервер запущений
- ✅ Keystatic доступний на http://localhost:4321/keystatic

**Зупиніть сервер:** `Ctrl+C`

### Крок 3: Встановлення PM2 (Process Manager)

**PM2** - утиліта для запуску Node.js додатків як сервіс.

```bash
# Встановити PM2 глобально
sudo npm install -g pm2

# Перевірити встановлення
pm2 --version
```

### Крок 4: Створення конфігурації PM2

**Створіть файл `ecosystem.config.js`:**
```bash
nano ~/projects/three-holy-hierarchs-church/ecosystem.config.js
```

**Вміст файлу:**
```javascript
module.exports = {
  apps: [{
    name: 'keystatic-cms',
    script: 'npm',
    args: 'run dev:host',
    cwd: '/home/astro-app/projects/three-holy-hierarchs-church',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 4321,
      HOST: '0.0.0.0'
    },
    error_file: '/home/astro-app/logs/keystatic-error.log',
    out_file: '/home/astro-app/logs/keystatic-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
};
```

**Створіть директорію для логів:**
```bash
mkdir -p ~/logs
```

### Крок 5: Запуск через PM2

```bash
# Запустити додаток
pm2 start ecosystem.config.js

# Перевірити статус
pm2 status

# Переглянути логи
pm2 logs keystatic-cms

# Зберегти конфігурацію для автозапуску
pm2 save

# Налаштувати автозапуск при перезавантаженні сервера
pm2 startup
# Виконайте команду, яку покаже PM2
```

**Корисні команди PM2:**
```bash
pm2 restart keystatic-cms    # Перезапустити
pm2 stop keystatic-cms        # Зупинити
pm2 delete keystatic-cms      # Видалити з PM2
pm2 logs keystatic-cms        # Дивитися логи в реальному часі
pm2 monit                     # Моніторинг ресурсів
```

---

## 🔐 Налаштування Teleport {#налаштування-teleport}

### Варіант А: Teleport Application Access

**Найкращий варіант для веб-додатків**

#### Крок 1: Створення Application в Teleport

**У Teleport Web UI:**

1. Перейдіть у **Applications**
2. Натисніть **Add Application**
3. Заповніть форму:

```yaml
Name: keystatic-cms
Description: Keystatic CMS для храму Трьох святителів
URI: http://localhost:4321
Public Address: keystatic.teleport.your-company.com
```

4. **Labels** (опціонально):
```yaml
env: production
team: web
project: three-holy-hierarchs
```

#### Крок 2: Встановлення Teleport Node

**На сервері з Astro:**

```bash
# Скачати Teleport
curl https://get.gravitational.com/teleport-v13.0.0-linux-amd64-bin.tar.gz | tar -xz

# Перемістити в /usr/local/bin
sudo mv teleport/teleport /usr/local/bin/
sudo mv teleport/tsh /usr/local/bin/

# Перевірити
teleport version
```

#### Крок 3: Конфігурація Teleport Node

**Створіть `/etc/teleport.yaml`:**

```yaml
version: v3
teleport:
  nodename: keystatic-server
  data_dir: /var/lib/teleport
  auth_token: YOUR_JOIN_TOKEN_FROM_TELEPORT_CLUSTER
  auth_servers:
    - teleport.your-company.com:443

app_service:
  enabled: yes
  apps:
  - name: keystatic-cms
    uri: http://localhost:4321
    public_addr: keystatic.teleport.your-company.com
    labels:
      env: production
      team: web
```

**Замініть:**
- `YOUR_JOIN_TOKEN_FROM_TELEPORT_CLUSTER` - токен з Teleport UI
- `teleport.your-company.com` - ваш Teleport cluster адрес

#### Крок 4: Запуск Teleport Node

```bash
# Створити systemd сервіс
sudo tee /etc/systemd/system/teleport.service > /dev/null <<EOF
[Unit]
Description=Teleport SSH Service
After=network.target

[Service]
Type=simple
Restart=on-failure
EnvironmentFile=-/etc/default/teleport
ExecStart=/usr/local/bin/teleport start --config=/etc/teleport.yaml
ExecReload=/bin/kill -HUP \$MAINPID
PIDFile=/run/teleport.pid
LimitNOFILE=524288

[Install]
WantedBy=multi-user.target
EOF

# Запустити сервіс
sudo systemctl daemon-reload
sudo systemctl enable teleport
sudo systemctl start teleport

# Перевірити статус
sudo systemctl status teleport
```

#### Крок 5: Перевірка доступу

**З вашого локального комп'ютера:**

```bash
# Авторизуватися в Teleport
tsh login --proxy=teleport.your-company.com

# Отримати доступ до додатку
tsh app login keystatic-cms

# Відкрити в браузері
tsh app open keystatic-cms
```

**АБО прямо в браузері:**
```
https://keystatic.teleport.your-company.com
```

---

### Варіант Б: Teleport SSH Tunnel

**Простіший варіант для швидкого доступу**

#### Крок 1: SSH доступ через Teleport

```bash
# З локального комп'ютера
tsh login --proxy=teleport.your-company.com

# Підключитися до сервера
tsh ssh astro-app@keystatic-server

# Створити SSH tunnel
tsh ssh -L 4321:localhost:4321 astro-app@keystatic-server
```

#### Крок 2: Доступ до Keystatic

**У браузері на локальному комп'ютері:**
```
http://localhost:4321/keystatic
```

**Це проксує з'єднання через Teleport SSH tunnel.**

---

## 📝 Робота з Keystatic {#робота-з-keystatic}

### Workflow для контент-менеджера

#### Крок 1: Отримати доступ

**Варіант А (через Teleport App):**
```bash
# З локального комп'ютера
tsh app login keystatic-cms
tsh app open keystatic-cms
```

**Варіант Б (через SSH tunnel):**
```bash
tsh ssh -L 4321:localhost:4321 astro-app@keystatic-server
# Відкрити http://localhost:4321/keystatic у браузері
```

#### Крок 2: Редагувати контент

1. Відкривається Keystatic CMS
2. Оберіть колекцію (Новини, Проповіді, Святі)
3. Створіть або редагуйте запис
4. Натисніть **Save** - файл зберігається локально

#### Крок 3: Опублікувати зміни

**На сервері (автоматично через cron або вручну):**

```bash
# Перейти у проект
cd /home/astro-app/projects/three-holy-hierarchs-church

# Перевірити зміни
git status

# Додати всі зміни
git add src/content/

# Закомітити
git commit -m "Оновлено контент через Keystatic"

# Відправити на GitHub
git push origin main
```

**Vercel автоматично задеплоїть нову версію!**

---

## 🤖 Автоматизація {#автоматізація}

### Автоматичний git push після змін

**Створіть скрипт для автопушу:**

```bash
nano ~/scripts/auto-push-content.sh
```

**Вміст скрипту:**
```bash
#!/bin/bash

# Шлях до проекту
PROJECT_DIR="/home/astro-app/projects/three-holy-hierarchs-church"

# Перейти у проект
cd "$PROJECT_DIR" || exit

# Перевірити, чи є зміни
if [[ -n $(git status -s src/content/) ]]; then
    echo "[$(date)] Виявлено зміни контенту. Пушимо на GitHub..."

    # Додати всі зміни у content
    git add src/content/

    # Закомітити з timestamp
    git commit -m "Автооновлення контенту - $(date '+%Y-%m-%d %H:%M:%S')"

    # Запушити на GitHub
    git push origin main

    echo "[$(date)] Контент успішно опубліковано!"
else
    echo "[$(date)] Немає змін у контенті."
fi
```

**Зробіть скрипт виконуваним:**
```bash
chmod +x ~/scripts/auto-push-content.sh
```

### Налаштування cron для автопушу

```bash
# Відкрити crontab
crontab -e

# Додати рядок для перевірки кожні 5 хвилин
*/5 * * * * /home/astro-app/scripts/auto-push-content.sh >> /home/astro-app/logs/auto-push.log 2>&1

# АБО кожні 30 хвилин
*/30 * * * * /home/astro-app/scripts/auto-push-content.sh >> /home/astro-app/logs/auto-push.log 2>&1

# АБО раз на годину
0 * * * * /home/astro-app/scripts/auto-push-content.sh >> /home/astro-app/logs/auto-push.log 2>&1
```

**Перевірити логи:**
```bash
tail -f ~/logs/auto-push.log
```

### Webhook для негайного пушу

**Альтернативний підхід: кнопка для пушу в UI**

**Створіть просту веб-форму:**

```bash
nano ~/projects/three-holy-hierarchs-church/public/admin/publish.html
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>Опублікувати зміни</title>
    <style>
        body {
            font-family: Inter, sans-serif;
            max-width: 500px;
            margin: 100px auto;
            text-align: center;
        }
        button {
            padding: 16px 32px;
            font-size: 18px;
            background: #0070f3;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        button:hover { background: #0051cc; }
        .status { margin-top: 20px; font-size: 16px; }
    </style>
</head>
<body>
    <h1>Опублікувати контент</h1>
    <p>Натисніть кнопку для відправки змін на GitHub</p>
    <button onclick="publish()">🚀 Опублікувати зміни</button>
    <div class="status" id="status"></div>

    <script>
        async function publish() {
            document.getElementById('status').textContent = '⏳ Публікуємо...';

            try {
                const response = await fetch('/api/publish', { method: 'POST' });
                const data = await response.json();

                if (data.success) {
                    document.getElementById('status').textContent = '✅ Опубліковано! Зміни будуть на сайті через 2-3 хв.';
                } else {
                    document.getElementById('status').textContent = '❌ Помилка: ' + data.error;
                }
            } catch (error) {
                document.getElementById('status').textContent = '❌ Помилка: ' + error.message;
            }
        }
    </script>
</body>
</html>
```

**Створіть API endpoint:**

```bash
mkdir -p ~/projects/three-holy-hierarchs-church/src/pages/api
nano ~/projects/three-holy-hierarchs-church/src/pages/api/publish.ts
```

```typescript
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST() {
  try {
    const { stdout, stderr } = await execAsync(
      'cd /home/astro-app/projects/three-holy-hierarchs-church && /home/astro-app/scripts/auto-push-content.sh'
    );

    return new Response(JSON.stringify({
      success: true,
      message: stdout
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

**Доступ:**
```
http://localhost:4321/admin/publish.html
```

---

## 🔒 Безпека {#безпека}

### 1. Обмеження доступу через Teleport RBAC

**У Teleport створіть роль для контент-менеджерів:**

```yaml
kind: role
version: v5
metadata:
  name: keystatic-editors
spec:
  allow:
    app_labels:
      'env': 'production'
      'project': 'three-holy-hierarchs'
    logins:
      - astro-app
  deny: {}
```

**Призначте роль користувачам:**
```bash
tctl create -f keystatic-editors-role.yaml
tctl users update user@example.com --set-roles=keystatic-editors
```

### 2. Firewall на сервері

```bash
# Дозволити тільки Teleport з'єднання
sudo ufw allow from 10.0.0.0/8 to any port 4321 proto tcp

# Заборонити прямий доступ ззовні
sudo ufw deny 4321/tcp

# Увімкнути firewall
sudo ufw enable
```

### 3. Регулярні бекапи

**Створіть скрипт для бекапів:**

```bash
nano ~/scripts/backup-content.sh
```

```bash
#!/bin/bash

BACKUP_DIR="/home/astro-app/backups"
PROJECT_DIR="/home/astro-app/projects/three-holy-hierarchs-church"
DATE=$(date +%Y%m%d_%H%M%S)

# Створити директорію для бекапів
mkdir -p "$BACKUP_DIR"

# Запакувати контент
tar -czf "$BACKUP_DIR/content_$DATE.tar.gz" \
    -C "$PROJECT_DIR" \
    src/content/

# Видалити старі бекапи (старші 30 днів)
find "$BACKUP_DIR" -name "content_*.tar.gz" -mtime +30 -delete

echo "[$(date)] Бекап створено: content_$DATE.tar.gz"
```

**Додати в cron (щодня о 2:00):**
```bash
crontab -e

0 2 * * * /home/astro-app/scripts/backup-content.sh >> /home/astro-app/logs/backup.log 2>&1
```

### 4. Моніторинг логів

**Налаштуйте логротate:**

```bash
sudo nano /etc/logrotate.d/keystatic
```

```
/home/astro-app/logs/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 astro-app astro-app
}
```

---

## 🔧 Troubleshooting {#troubleshooting}

### Проблема 1: PM2 процес падає

**Симптоми:** `pm2 status` показує `errored`

**Рішення:**
```bash
# Подивитися логи помилок
pm2 logs keystatic-cms --err

# Перевірити, чи встановлені залежності
cd ~/projects/three-holy-hierarchs-church
npm install

# Перезапустити
pm2 restart keystatic-cms
```

### Проблема 2: Teleport не може підключитися

**Симптоми:** `connection refused` або timeout

**Рішення:**
```bash
# Перевірити, чи працює Astro
curl http://localhost:4321

# Перевірити статус Teleport
sudo systemctl status teleport

# Перевірити логи Teleport
sudo journalctl -u teleport -f

# Перезапустити Teleport
sudo systemctl restart teleport
```

### Проблема 3: Git push не працює

**Симптоми:** `Permission denied` або `authentication failed`

**Рішення:**
```bash
# Перевірити SSH ключ
ssh -T git@github.com

# Якщо не працює, перегенеруйте ключ
ssh-keygen -t ed25519 -C "server@company.com"
cat ~/.ssh/id_ed25519.pub
# Додайте у GitHub Settings → SSH Keys

# Перевірити remote URL
cd ~/projects/three-holy-hierarchs-church
git remote -v

# Якщо HTTPS, змінити на SSH
git remote set-url origin git@github.com:artemius-info/three-holy-hierarchs-church.git
```

### Проблема 4: Keystatic не зберігає зміни

**Симптоми:** Кнопка Save не працює

**Рішення:**
```bash
# Перевірити права на запис
ls -la ~/projects/three-holy-hierarchs-church/src/content/

# Якщо потрібно, виправити права
chmod -R 755 ~/projects/three-holy-hierarchs-church/src/content/

# Перевірити, чи Keystatic в local режимі
cat ~/projects/three-holy-hierarchs-church/keystatic.config.ts | grep storage
```

### Проблема 5: Vercel не деплоїть зміни

**Симптоми:** Пуш пройшов, але сайт не оновився

**Рішення:**
```bash
# Перевірити GitHub - чи там коміт
# https://github.com/artemius-info/three-holy-hierarchs-church/commits/main

# Перевірити Vercel Dashboard
# https://vercel.com/artemius-info/three-holy-hierarchs-church/deployments

# Якщо деплой не стартує, тригернути вручну
# У Vercel Dashboard → Deployments → Redeploy
```

---

## 📊 Моніторинг та статистика

### Перевірка стану системи

**Створіть dashboard скрипт:**

```bash
nano ~/scripts/status.sh
```

```bash
#!/bin/bash

echo "========================================="
echo "Keystatic CMS Status Dashboard"
echo "========================================="
echo ""

# PM2 статус
echo "📊 PM2 Processes:"
pm2 status keystatic-cms
echo ""

# Teleport статус
echo "🔐 Teleport Status:"
sudo systemctl is-active teleport
echo ""

# Git статус
echo "📦 Git Status:"
cd ~/projects/three-holy-hierarchs-church
git status --short src/content/
echo ""

# Останній коміт
echo "📝 Last Commit:"
git log -1 --oneline
echo ""

# Disk usage
echo "💾 Disk Usage:"
df -h /home/astro-app
echo ""

# Memory usage
echo "🧠 Memory Usage:"
free -h
echo ""

echo "========================================="
```

**Зробити виконуваним:**
```bash
chmod +x ~/scripts/status.sh
```

**Запустити:**
```bash
~/scripts/status.sh
```

---

## 📚 Корисні команди

### PM2
```bash
pm2 start ecosystem.config.js    # Запустити
pm2 stop keystatic-cms            # Зупинити
pm2 restart keystatic-cms         # Перезапустити
pm2 logs keystatic-cms            # Дивитися логи
pm2 monit                         # Моніторинг
pm2 save                          # Зберегти конфігурацію
```

### Git
```bash
git status                        # Перевірити зміни
git add src/content/              # Додати контент
git commit -m "Update content"    # Закомітити
git push origin main              # Відправити на GitHub
git pull origin main              # Отримати зміни
```

### Teleport
```bash
tsh login                         # Авторизуватися
tsh app login keystatic-cms       # Підключитися до app
tsh app open keystatic-cms        # Відкрити в браузері
tsh ssh server                    # SSH доступ
```

### Systemd
```bash
sudo systemctl status teleport    # Статус
sudo systemctl restart teleport   # Перезапуск
sudo journalctl -u teleport -f    # Логи в реальному часі
```

---

## 🎉 Готово!

**Тепер у вас є:**
- ✅ Astro + Keystatic на офісному сервері
- ✅ Безпечний доступ через Teleport
- ✅ Автоматичний деплой на Vercel
- ✅ Бекапи та моніторинг

**Workflow:**
1. Користувач заходить через Teleport
2. Редагує контент у Keystatic
3. Зміни автоматично пушаться на GitHub (cron)
4. Vercel автоматично деплоїть нову версію
5. Сайт оновлюється за 2-3 хвилини

---

**Питання? Проблеми?** Перевірте розділ [Troubleshooting](#troubleshooting)

**Створено для:** Храм на честь Трьох святителів на Подолі
**Версія:** 1.0
**Дата:** 2026-02-03
