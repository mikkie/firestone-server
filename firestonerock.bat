@echo off
cd %FR_ENG_HOME%
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
pipenv run firestone %CODES% --hours 13 14 17 --minutes * * * -v&
pipenv run firerock %TRADEID% -m --hours 13 14 17 --minutes * * * -v
rem start pipenv run firestone %CODES% -v&
rem start pipenv run firerock %TRADEID% -m -v