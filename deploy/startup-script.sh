set -v

# Install logging monitor. The monitor will automatically pick up logs sent to
# syslog.
curl -s "https://storage.googleapis.com/signals-agents/logging/google-fluentd-install.sh" | bash
service google-fluentd restart &

# Install dependencies from apt
apt-get update
apt-get install -yq ca-certificates git build-essential supervisor

# Install nodejs
mkdir /opt/nodejs
curl https://nodejs.org/dist/v12.13.0/node-v12.13.0-linux-x64.tar.gz | tar xvzf - -C /opt/nodejs --strip-components=1
ln -s /opt/nodejs/bin/node /usr/bin/node
ln -s /opt/nodejs/bin/npm /usr/bin/npm

# Get the application source code from the Google Cloud Repository.
# git requires $HOME and it's not set during the startup script.
export HOME=/opt/app/yog2a-melanoma-web
git config --global credential.helper gcloud.sh
git clone https://github.com/virgiawan/yog2a-melanoma-web.git /opt/app/yog2a-melanoma-web

# Install app dependencies
cd /opt/app/yog2a-melanoma-web
git fetch origin develop
git checkout -b develop origin/develop
git branch

npm install
npm run prod-skip-source-map

# Create a virgiawan_huda_akbar user. The application will run as this user.
useradd -m -d /home/cd  virgiawan_huda_akbar
chown -R virgiawan_huda_akbar:virgiawan_huda_akbar /opt/app

# Configure supervisor to run the node app.
cat >/etc/supervisor/conf.d/node-app.conf << EOF
[program:virgiawan_huda_akbar]
directory=/opt/app/yog2a-melanoma-web
command=npm run start
autostart=true
autorestart=true
user=virgiawan_huda_akbar
environment=HOME="/opt/app/yog2a-melanoma-web",USER="virgiawan_huda_akbar",NODE_ENV="production"
stdout_logfile=syslog
stderr_logfile=syslog
EOF

supervisorctl reread
supervisorctl update

# Application should now be running under supervisorls