@echo off
set TRADEID=%1
set CODES=
shift
:loop1
if "%1"=="" goto after_loop
if "%CODES%"=="" (set CODES=%1) else set CODES=%CODES% %1
shift
goto loop1
:after_loop
rem echo %CODES%
rem echo %TRADEID% 
start %cd%\shell\runfirestone.bat %CODES%
start %cd%\shell\runfirerock.bat %TRADEID%