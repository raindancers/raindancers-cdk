#!/bin/bash -ex
yum -y groupinstall "Development Tools"
yum -y install cmake3
cd /geneve
cmake3 .
make
echo "[Unit]" > /usr/lib/systemd/system/gwlbtun.service
echo "Description=AWS GWLB Tunnel Handler" >> /usr/lib/systemd/system/gwlbtun.service
echo "" >> /usr/lib/systemd/system/gwlbtun.service
echo "[Service]" >> /usr/lib/systemd/system/gwlbtun.service
echo "ExecStart=/root/aws-gateway-load-balancer-tunnel-handler/gwlbtun -c /root/aws-gateway-load-balancer-tunnel-handler/example-scripts/create-nat.sh -p 80" >> /usr/lib/systemd/system/gwlbtun.service
echo "Restart=always" >> /usr/lib/systemd/system/gwlbtun.service
echo "RestartSec=5s" >> /usr/lib/systemd/system/gwlbtun.service

systemctl daemon-reload
systemctl enable --now --no-block gwlbtun.service
systemctl start gwlbtun.service
echo