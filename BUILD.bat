@echo off
setlocal enabledelayedexpansion

:: Always run from the folder where this .bat lives
cd /d "%~dp0"

:: Keep window open even if something crashes early
if "%1"=="LAUNCHED" goto MAIN
cmd /k "%~f0" LAUNCHED
exit

:MAIN
chcp 437 >nul
title EDR-Vault Builder
mode con: cols=70 lines=55
color 0B
cls

echo.
echo  +====================================================================+
echo  ^|                                                                    ^|
echo  ^|              V  A  U  L  T     B  U  I  L  D  E  R               ^|
echo  ^|                                                                    ^|
echo  ^|        Personal Game Library  ^&  Save Backup Manager              ^|
echo  ^|                  Windows 10 / 11  x64   v1.0.1                      ^|
echo  ^|                                                                    ^|
echo  +====================================================================+
echo.
echo   Working folder: %CD%
echo.
timeout /t 2 /nobreak >nul

:: -----------------------------------------------------------------------
:: STEP 1 - Check Node.js
:: -----------------------------------------------------------------------
echo   [........................................]   0%%
echo   [ 1/5 ]  Checking Node.js...
echo.
where node >nul 2>nul
if errorlevel 1 (
    color 0C
    echo  ERROR: Node.js not found!
    echo  Install it from:  https://nodejs.org  ^(LTS version^)
    echo.
    pause
    exit /b 1
)
for /f "tokens=*" %%V in ('node -v') do set NODE_VER=%%V
for /f "tokens=*" %%V in ('npm -v')  do set NPM_VER=%%V
echo   [########................................]  20%%
echo   [ 1/5 ]  Node.js %NODE_VER%  /  npm v%NPM_VER%  -  OK
echo.
timeout /t 1 /nobreak >nul

:: -----------------------------------------------------------------------
:: STEP 2 - Check package.json exists
:: -----------------------------------------------------------------------
echo   [############............................]  25%%
echo   [ 2/5 ]  Checking project files...
echo.
if not exist "package.json" (
    color 0C
    echo  ERROR: package.json not found in current folder!
    echo  Make sure you run BUILD.bat from inside the project folder.
    echo  Current folder: %CD%
    echo.
    pause
    exit /b 1
)
echo   [ 2/5 ]  package.json found  -  OK
echo.
timeout /t 1 /nobreak >nul

:: -----------------------------------------------------------------------
:: STEP 3 - Clean dist
:: -----------------------------------------------------------------------
echo   [################........................]  35%%
echo   [ 3/5 ]  Cleaning previous output...
if exist "dist\" rd /s /q "dist\"
echo   [ 3/5 ]  Clean  -  OK
echo.
timeout /t 1 /nobreak >nul

:: -----------------------------------------------------------------------
:: STEP 4 - npm install
:: -----------------------------------------------------------------------
echo   [####################....................]  50%%
echo   [ 4/5 ]  Installing dependencies...
echo   ^(First run downloads Electron ~150MB - may take a few minutes^)
echo.
call npm install
if errorlevel 1 (
    color 0C
    echo.
    echo  ERROR: npm install failed.
    echo  Check your internet connection and try again.
    echo.
    pause
    exit /b 1
)
echo.
echo   [############################............]  70%%
echo   [ 4/5 ]  Dependencies installed  -  OK
echo.
timeout /t 1 /nobreak >nul

:: -----------------------------------------------------------------------
:: STEP 5 - Build
:: -----------------------------------------------------------------------
echo   [##################################......]  85%%
echo   [ 5/5 ]  Building EDR-Vault-Portable.exe...
echo   ^(This may take 1-3 minutes^)
echo.
call npx electron-builder --win --x64
if errorlevel 1 (
    color 0C
    echo.
    echo  ERROR: electron-builder failed.
    echo  Read the output above for the specific error message.
    echo.
    pause
    exit /b 1
)
echo.
echo   [########################################] 100%%
echo   [ 5/5 ]  Build finished!
echo.
timeout /t 1 /nobreak >nul

:: -----------------------------------------------------------------------
:: Result
:: -----------------------------------------------------------------------
set EXEFILE=
if exist "dist\EDR-Vault-Portable.exe" set EXEFILE=EDR-Vault-Portable.exe
if not defined EXEFILE (
    for %%F in ("dist\*.exe") do if not defined EXEFILE set EXEFILE=%%~nxF
)

if defined EXEFILE (
    color 0A
    echo  +====================================================================+
    echo  ^|                                                                    ^|
    echo  ^|   SUCCESS!   dist\!EXEFILE! is ready.          ^|
    echo  ^|   Double-click it to run.  No installation needed.               ^|
    echo  ^|                                                                    ^|
    echo  +====================================================================+
) else (
    color 0E
    echo  WARNING: Build ran but no .exe found in dist\
    if exist "dist\" dir /b "dist\"
)

echo.
color 0B
pause
exit /b 0
