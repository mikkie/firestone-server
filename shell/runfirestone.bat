@echo off
cd %FR_ENG_HOME%
pipenv run firestone 000000 -v --md
REM pipenv run firestone 000000 --hours 18 --minutes * -v --date 2019-10-30 -m --md