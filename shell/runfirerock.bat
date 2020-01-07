@echo off
cd %cd%\shell
calculate.exe %1 --seconds=%2 -v -m
REM calculate.exe %1 -m --hours 18 --minutes * -v -i --date 2019-10-30-m