# dzenWeather
Десктоп виджет с картой осадков с сайта dzen.ru
![image](https://github.com/user-attachments/assets/78a4a24c-e266-4a6b-bca1-e51c9351a614)

## Сборка
```
npm install electron
npx electron . // test if all works
electron-packager <sourcedir> <appname> --platform=win32 --arch=x86_64
```
##P.S.
Проект был сделан буквально за вечер, по умолчанию открывает окно с виджетом на втором экране в левом верхнем углу, но это можно изменить поменяв строку 8 в main.js
```
return display.bounds.x !== 0 || display.bounds.y !== 0; на  return display.bounds.x === 0 && display.bounds.y
```
btw скрипт обновляет страницу каждые 10 мин, чтоб показывать актуальную информацию 
