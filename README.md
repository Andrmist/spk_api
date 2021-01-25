
# spk_api
<p>Модуль создан Qugalego (Andrmist) для серверов SP, SPM, SPK.</p>

<p>Пример:<p>

```js 
const SPK = require("spk_api");
const spk = new spkAPI("token", "response_key");
(async () => {
    console.log(await spk.test());
})()
```

## Класс

<dl>
<dt><a href="#spkAPI">spkAPI</a></dt>
<dd><p>Модуль создан Qugalego (Andrmist) для серверов SP, SPM, SPK.</p>
</dd>

## Методы


<dt><a href="#run">run</a> ⇒ <code>Object</code></dt>
<dd><p>Прямое обращение к SPK API</p>
</dd>
<dt><a href="#test">test</a> ⇒ <code>Object</code></dt>
<dd><p>Запрос, не выполняющий никаких действий. Создан для настройки и проверки работоспособности API.</p>
</dd>
<dt><a href="#pay">pay</a> ⇒ <code>Object</code></dt>
<dd><p>API, позволяющее производить банквские транзакции. Предназначено для оплаты услуг и товара на Ваших сайтах.
Оплата производится в АР, получателем средств является банковский счёт, указанный в параметрах Вашего приложения
в разделе SP Dev. Комиссии за переводы отсутствуют</p>
</dd>
<dt><a href="#get_permission">get_permission</a> ⇒ <code>Object</code></dt>
<dd><p>При первом запуске Вашего приложения, вы можете сразу рассказать пользователю, какие разрешения вам необходимы
для работоспособности приложения и запросить их все с помощью данного запроса.
Полный список всех разрешений:
1 - Тестовое разрешение.
2 - Чтение информации о банковских счетах.
3 - Чтение уведомлений.
4 - Пометка уведомлений прочитанными.</p>
</dd>
<dt><a href="#permission_test">permission_test</a> ⇒ <code>Object</code></dt>
<dd><p>Запрос, не выполняющий никаких действий. Создан для проверки работы механизма выдачи прав доступа.</p>
</dd>
<dt><a href="#get_cards_info">get_cards_info</a> ⇒ <code>Object</code></dt>
<dd><p>Получение данных о банковских счетах пользователя.</p>
</dd>
<dt><a href="#get_unread_notifications">get_unread_notifications</a> ⇒ <code>Object</code></dt>
<dd><p>Получение списка непрочитанных уведомлений.</p>
</dd>
<dt><a href="#mark_notifications_as_read">mark_notifications_as_read</a> ⇒ <code>Object</code></dt>
<dd><p>Пометка всех непрочитанных уведомлений пользователя как &quot;прочитано&quot;.</p>
</dd>
</dl>

<a name="spkAPI"></a>

## spkAPI
**Kind**: global class  
<a name="new_spkAPI_new"></a>

## spkAPI
Модуль создан Qugalego (Andrmist) для серверов SP, SPM, SPK.

**Kind**: global variable  
<a name="new_spkAPI_new"></a>

### new spkAPI(token, responseKey)
Инициализация


| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Секретный TOKEN вашего приложения. |
| responseKey | <code>String</code> | Ключ ответа. Используется для проверки подлинности источника серверного ответа. |

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
API, позволяющее производить банквские транзакции. Предназначено для оплаты услуг и товара на Ваших сайтах.
Оплата производится в АР, получателем средств является банковский счёт, указанный в параметрах Вашего приложения
в разделе SP Dev. Комиссии за переводы отсутствуют

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| spPayCode | <code>String</code> | Временный код, полученный в кошельке на этом сайте. |
| sum | <code>String</code> \| <code>Number</code> | Сумма АР которая будет снята. |
| transactionMessage | <code>String</code> | Описание транзакции. |

<a name="get_permission"></a>

## get\_permission ⇒ <code>Object</code>
При первом запуске Вашего приложения, вы можете сразу рассказать пользователю, какие разрешения вам необходимы
для работоспособности приложения и запросить их все с помощью данного запроса.
Полный список всех разрешений:
1 - Тестовое разрешение.
2 - Чтение информации о банковских счетах.
3 - Чтение уведомлений.
4 - Пометка уведомлений прочитанными.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |
| permission_id | <code>String</code> \| <code>Number</code> | ID запрашиваемого разрешения. |

<a name="permission_test"></a>

## permission\_test ⇒ <code>Object</code>
Запрос, не выполняющий никаких действий. Создан для проверки работы механизма выдачи прав доступа.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

<a name="get_cards_info"></a>

## get\_cards\_info ⇒ <code>Object</code>
Получение данных о банковских счетах пользователя.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

<a name="get_unread_notifications"></a>

## get\_unread\_notifications ⇒ <code>Object</code>
Получение списка непрочитанных уведомлений.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

<a name="mark_notifications_as_read"></a>

## mark\_notifications\_as\_read ⇒ <code>Object</code>
Пометка всех непрочитанных уведомлений пользователя как "прочитано".

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| license_key | <code>String</code> | Ключ лицензии пользователя, у которого запрашивается разрешение. |

