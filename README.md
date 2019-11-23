# project1

Начало проекта на node.js и тесты.

1. Скачать и установить node.js и терминал (у нас VSCode) из официальных сайтов

2. Инициализируем npm в проекте (нпм помогает управлять пакетами, которые есть в приложении):
npm init

После инициализации появляется файл package.json, который можно также создать командой:
npm init -y

Установить зависимости (config) :

npm install config

После этого появляется папка node_modules. Также зависимости нужно сохранить для файла package.json install config --save.

3. Пишем код и запускаем командой node script.js.
* Бывает что скрипты не бегут т к в Execution Policy на это есть запрет, и надо этот запрет отменить:
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

Для импортирования классов и модулей в ЕС 5 используются команды require и module.exports. В ЕС 6 - import и export/export default.
Но для того чтобы их использовать надо установить babel.

4. Устанавливаем babel (он транслирует код ис ЕС 6 в ЕС 5, таком образом используются самые современные фичи дс, даже те которых нет в node)

Для babel добавляем в проект файлы .babelrc (манифест зависимостей и трансформ рантайм)  и .gitignore и добавляем содержимое из гиста, любезно предоставленым Алексеем Данчиным:
https://gist.github.com/Aleksey-Danchin/4170890f2d50ebe6e1d6d8cf6a05a3f3

Запускаем 2 команды для установки babel и теперь запускаем скрипт вот так: babel-node script.js

5. Устанавливаем webpack (для работы с браузером - проект собирается и запускается в браузере, имеет гибкую систему потоков):
--save-dev webpack webpack-dev-server webpack-cli

5.1 Создаем в проекте файл index.html

5.2 Добавляем scripts в package.json

5.3 Добавляем в проект файл webpack.config.js

5.4 Запускаем проект через webpack: npm run serve , в браузере проект будет тут: http://localhost:8080/. Теперь проект будет обновляться автоматически, без перезагрузки.

6. Устанавливаем nodemon:  npm install -g nodemon
Помогает с тестированием проекта, запускает скрипт автоматически после сохранения изменений. Теперь скрипт запускается так:
nodemon --exec babel-node script.js

7. Тестирование.
7.1 Устанавливаем mocha и chai:
npm install mocha
npm install chai /-g (нужно устанавливать глобально и локально)

7.2 Запустить chai, предварительно импортируя его в файле скрипта:

import chai from 'chai'
chai.should()

7.3 Написать тесты в тестовом файле

7.4 Установить babel/register :
npm install -g @babel/register
7.5 Запускать тесты через babel/register : mocha --require @babel/register
