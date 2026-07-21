#!/bin/bash
# 部署脚本 — 构建并部署到服务器
# 用法: bash deploy/deploy.sh [user@host]

set -e

SERVER="${1:-root@rorinais.cn}"
DEPLOY_DIR="/var/www/rorinais"

echo "🔨 构建项目..."
npm run build

echo "📦 打包..."
tar -czf build.tar.gz -C build .

echo "🚀 上传到 $SERVER..."
scp build.tar.gz "$SERVER:/tmp/"

echo "📂 部署到 $DEPLOY_DIR..."
ssh "$SERVER" << 'EOF'
    sudo mkdir -p /var/www/rorinais
    sudo rm -rf /var/www/rorinais/*
    sudo tar -xzf /tmp/build.tar.gz -C /var/www/rorinais
    sudo chown -R www-data:www-data /var/www/rorinais
    rm /tmp/build.tar.gz
    sudo nginx -t && sudo nginx -s reload
    echo "✅ 部署完成"
EOF

rm build.tar.gz
echo "🎉 全部完成"
