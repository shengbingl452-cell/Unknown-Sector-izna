# 使用最轻量级的 Nginx 镜像
FROM nginx:alpine

# 删除默认页面文件（解决 "Welcome to nginx"）
RUN rm -rf /usr/share/nginx/html/*

# 复制项目所有文件
COPY . /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
