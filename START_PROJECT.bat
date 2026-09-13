@echo off
title Smart Price Prediction – Launcher
color 0A

echo.
echo  ================================================
echo   Smart Price Prediction  ^|  AI-Powered System
echo  ================================================
echo.
echo  [*] Starting your project...
echo.

REM Get the directory where this batch file lives
set "PROJECT_DIR=%~dp0"
set "INDEX_FILE=%PROJECT_DIR%index.html"

REM Open in default browser
start "" "%INDEX_FILE%"

echo  [OK] Opened in your default browser!
echo  [OK] File: %INDEX_FILE%
echo.
echo  Tip: If the page doesn't open, right-click index.html
echo       and choose 'Open with...' -> your browser.
echo.
echo  Press any key to close this window...
pause >nul
