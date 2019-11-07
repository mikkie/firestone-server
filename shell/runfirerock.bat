@echo off
cd %FR_ENG_HOME%
pipenv run firerock %1 -v -m
REM pipenv run firerock %1 -m --hours 18 --minutes * -v -i --date 2019-10-30-m