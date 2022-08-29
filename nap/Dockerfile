# syntax=docker/dockerfile:1
# For Ubuntu 18.04:
FROM lb

RUN apt-get install -y app-protect && chown nginx /etc/nginx

# Copy configuration files:
COPY entrypoint.sh /root/

CMD ["sh", "/root/entrypoint.sh"]
