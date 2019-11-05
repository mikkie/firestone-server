@echo off
cd %FR_ENG_HOME%
pipenv run firestone %1 --hours 13 14 17 --minutes * * * -v
rem pipenv run firestone %1 -v