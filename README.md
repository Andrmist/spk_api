# spk_api
<p>Модуль создан Qugalego (Andrmist) для серверов SP, SPM, SPK.</p>

### Установка:

```shell
$ npm install spk_api
```

### Пример:

```js 
const SPK = require("spk_api");
const spk = new SPK("token", "response_key", "spk");
(async () => {
    console.log(await spk.test());
})()
```

# API Reference

P.S: deprecated методы будут удалены после обновления API на сайте https://spk.jakksoft.com
## Методы

<dl>
<dt><a href="#run">run</a> ⇒ <code>Object</code></dt>
<dd><p>Прямое обращение к SPK API</p>
</dd>
<dt><a href="#test">test</a> ⇒ <code>Object</code></dt>
<dd><p>Запрос, не выполняющий никаких действий. Создан для настройки и проверки работоспособности API.</p>
</dd>
<dt><a href="#pay">pay</a> ⇒ <code>Object</code></dt>
<dd><p>API, позволяющее производить банковские транзакции. Предназначено для оплаты услуг и товара на Ваших сайтах.
Оплата производится в АР, получателем средств является банковский счёт, указанный в параметрах Вашего приложения
в разделе SP Dev. Комиссии за переводы отсутствуют</p>
</dd>
<dt><a href="#getPermission">getPermission</a> ⇒ <code>Object</code></dt>
<dd><p>При первом запуске Вашего приложения, вы можете сразу рассказать пользователю, какие разрешения вам необходимы
для работоспособности приложения и запросить их все с помощью данного запроса.</p>
Полный список всех разрешений:

* 1 - Тестовое разрешение.
* 2 - Чтение информации о банковских счетах.
* 3 - Чтение уведомлений.
* 4 - Пометка уведомлений прочитанными.
</dd>
<dt><a href="#permissionTest">permissionTest</a> ⇒ <code>Object</code></dt>
<dd><p>Запрос, не выполняющий никаких действий. Создан для проверки работы механизма выдачи прав доступа.</p>
</dd>
<dt><a href="#getCardsInfo">getCardsInfo</a> ⇒ <code>Object</code></dt>
<dd><p>Получение данных о банковских счетах пользователя.</p>
</dd>
<dt><a href="#getUnreadNotifications">getUnreadNotifications</a> ⇒ <code>Object</code></dt>
<dd><p>Получение списка непрочитанных уведомлений.</p>
</dd>
<dt><a href="#markNotificationsAsRead">markNotificationsAsRead</a> ⇒ <code>Object</code></dt>
<dd><p>Пометка всех непрочитанных уведомлений пользователя как &quot;прочитано&quot;.</p>
</dd>
</dl>

<a name="spkAPI"></a>

## spkAPI
**Kind**: global class

* [spkAPI](#spkAPI)
    * [new spkAPI(token, responseKey)](#new_spkAPI_new)
    * [.get_permission()](#spkAPI+get_permission)
    * [.permission_test()](#spkAPI+permission_test)
    * [.get_cards_info()](#spkAPI+get_cards_info)
    * [.get_unread_notifications()](#spkAPI+get_unread_notifications)
    * [.mark_notifications_as_read()](#spkAPI+mark_notifications_as_read)

<a name="new_spkAPI_new"></a>

### new spkAPI(token, responseKey)
Модуль создан Qugalego (Andrmist) для серверов SP, SPM, SPK.


| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Секретный TOKEN вашего приложения. |
| responseKey | <code>String</code> | Ключ ответа. Используется для проверки подлинности источника серверного ответа. |

<a name="spkAPI+get_permission"></a>

### ~~spkAPI.get\_permission()~~
***Deprecated***

Тоже самое, что и [getPermission](#getPermission)

**Kind**: instance method of [<code>spkAPI</code>](#spkAPI)  
<a name="spkAPI+permission_test"></a>

### ~~spkAPI.permission\_test()~~
***Deprecated***

Тоже самое, что и [permissionTest](#permissionTest)

**Kind**: instance method of [<code>spkAPI</code>](#spkAPI)  
<a name="spkAPI+get_cards_info"></a>

### ~~spkAPI.get\_cards\_info()~~
***Deprecated***

Тоже самое, что и [getCardsInfo](#getCardsInfo)

**Kind**: instance method of [<code>spkAPI</code>](#spkAPI)  
<a name="spkAPI+get_unread_notifications"></a>

### ~~spkAPI.get\_unread\_notifications()~~
***Deprecated***

Тоже самое, что и [getUnreadNotifications](#getUnreadNotifications)

**Kind**: instance method of [<code>spkAPI</code>](#spkAPI)  
<a name="spkAPI+mark_notifications_as_read"></a>

### ~~spkAPI.mark\_notifications\_as\_read()~~
***Deprecated***

Тоже самое, что и [markNotificationsAsRead](#markNotificationsAsRead)

**Kind**: instance method of [<code>spkAPI</code>](#spkAPI)  
<a name="run"></a>

## run ⇒ <code>Object</code>
Прямое обращение к SPK API

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | что передать на сервер |

<a name="test"></a>

## test ⇒ <code>Object</code>
Запрос, не выполняющий никаких действий. Создан для настройки и проверки работоспособности API.

**Kind**: global variable  
<a name="pay"></a>

## pay ⇒ <code>Object</code>
API, позволяющее производить банковские транзакции. Предназначено для оплаты услуг и товара на Ваших сайтах.
Оплата производится в АР, получателем средств является банковский счёт, указанный в параметрах Вашего приложения
в разделе SP Dev. Комиссии за переводы отсутствуют

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| spPayCode | <code>String</code> | Временный код, полученный в кошельке на этом сайте. |
| sum | <code>String</code> \| <code>Number</code> | Сумма АР которая будет снята. |
| transactionMessage | <code>String</code> | Описание транзакции. |

<a name="getPermission"></a>

## getPermission ⇒ <code>Object</code>
При первом запуске Вашего приложения, вы можете сразу рассказать пользователю, какие разрешения вам необходимы
для работоспособности приложения и запросить их все с помощью данного запроса.
Полный список всех разрешений:
* 1 - Тестовое разрешение.
* 2 - Чтение информации о банковских счетах.
* 3 - Чтение уведомлений.
* 4 - Пометка уведомлений прочитанными.

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |
| permission_id | <code>String</code> \| <code>Number</code> | ID запрашиваемого разрешения. |

<a name="permissionTest"></a>

## permissionTest ⇒ <code>Object</code>
Запрос, не выполняющий никаких действий. Создан для проверки работы механизма выдачи прав доступа.

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

<a name="getCardsInfo"></a>

## getCardsInfo ⇒ <code>Object</code>
Получение данных о банковских счетах пользователя.

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

<a name="getUnreadNotifications"></a>

## getUnreadNotifications ⇒ <code>Object</code>
Получение списка непрочитанных уведомлений.

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

<a name="markNotificationsAsRead"></a>

## markNotificationsAsRead ⇒ <code>Object</code>
Пометка всех непрочитанных уведомлений пользователя как "прочитано".

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

