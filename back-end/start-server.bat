@echo off
cd /d "C:\Users\maxen\Documents\GitHub\Portfolio\back-end"
echo Current directory: %CD%
echo NODE_ENV: %NODE_ENV%
set NODE_ENV=development
echo Setting NODE_ENV to development...
echo NODE_ENV: %NODE_ENV%
node server.js
pause