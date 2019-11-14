@echo off
cd %cd%\shell
main.exe 000000 -v --md --hours %time:~0,2% --minutes *
REM main.exe 000000 --hours 18 --minutes * -v --date 2019-10-30 -m --md