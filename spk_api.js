/**
 * @name spkAPI
 * @description Модуль создан Qugalego (Andrmist) для серверов SP, SPM, SPK.
 */


const fetch = require('node-fetch');

class spkAPI {
    /**
     * @description Инициализация
     * @param {String} token - Секретный TOKEN вашего приложения.
     * @param {String} responseKey - Ключ ответа. Используется для проверки подлинности источника серверного ответа.
     */
    constructor(token, responseKey) {
        if (!token || !responseKey)
            throw new Error("token или responseKey не указан");
        this.token = token;
        this.responseKey = responseKey;
    }

    /**
     * @name run
     * @description Прямое обращение к SPK API
     * @param {Object} data - что передать на сервер
     * @return {Object}
     */
    async run (data) {
        let body = [];
        for (let i in data) body.push(`${i}=${data[i]}`);
        console.log(body);

        return await fetch('https://spk.jakksoft.com/api/request', {
            method: 'POST',
            headers: {"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"},
            body: encodeURI(body.join("&"))
        })
            .then(res => res.json()) // expecting a json response
            .then(json => {
                if (json.response_key !== this.responseKey)
                    return {success: false, responseKey: this.responseKey, data: [], errors: ["Ответ от сервера не прошёл валидацию."]};
                return json;
            })
            .catch(err => ({success: false, responseKey: this.responseKey, data: [], errors: ["error: " + err]}));
    }
    /**
     * @name test
     * @description Запрос, не выполняющий никаких действий. Создан для настройки и проверки работоспособности API.
     * @return {Object}
     */
    async test () {
        return await this.run({token: this.token, action: "test"});
    }
    /**
     * @name pay
     * @description API, позволяющее производить банквские транзакции. Предназначено для оплаты услуг и товара на Ваших сайтах.
     * Оплата производится в АР, получателем средств является банковский счёт, указанный в параметрах Вашего приложения
     * в разделе SP Dev. Комиссии за переводы отсутствуют
     * @param {String} spPayCode - Временный код, полученный в кошельке на этом сайте.
     * @param {String | Number} sum - Сумма АР которая будет снята.
     * @param {String} transactionMessage - Описание транзакции.
     * @return {Object}
     */
    async pay (spPayCode, sum, transactionMessage) {
        return await this.run({token: this.token, action: "pay", spPayCode, sum, transactionMessage});
    }


    /**
     * @name get_permission
     * @description При первом запуске Вашего приложения, вы можете сразу рассказать пользователю, какие разрешения вам необходимы
     * для работоспособности приложения и запросить их все с помощью данного запроса.
     * Полный список всех разрешений:
     * 1 - Тестовое разрешение.
     * 2 - Чтение информации о банковских счетах.
     * 3 - Чтение уведомлений.
     * 4 - Пометка уведомлений прочитанными.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @param {String | Number} permission_id - ID запрашиваемого разрешения.
     * @returns {Object}
     * @deprecated
     */
    async get_permission(license_key, permission_id) {
        return await this.getPermission(license_key, permission_id);
    }

    /**
     * @name getPermission
     * @description При первом запуске Вашего приложения, вы можете сразу рассказать пользователю, какие разрешения вам>     * для работоспособности приложения и запросить их все с помощью данного запроса.
     * Полный список всех разрешений:
     * 1 - Тестовое разрешение.
     * 2 - Чтение информации о банковских счетах.
     * 3 - Чтение уведомлений.
     * 4 - Пометка уведомлений прочитанными.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @param {String | Number} permission_id - ID запрашиваемого разрешения.
     * @returns {Object}
     */
    async getPermission(license_key, permission_id) {
        return this.run({token: this.token, action: "get_permission", license_key, permission_id});
    }


    /**
     * @name permission_test
     * @description Запрос, не выполняющий никаких действий. Создан для проверки работы механизма выдачи прав доступа.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     * @deprecated
     */
    async permission_test(license_key) {
        return await this.permissionTest(license_key);
    }

    /**
     * @name permissionTest
     * @description Запрос, не выполняющий никаких действий. Создан для проверки работы механизма выдачи прав доступа.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     */
    async permissionTest(license_key) {
        return await this.run({token: this.token, action: "permission_test", license_key});
    }


    /**
     * @name get_cards_info
     * @description Получение данных о банковских счетах пользователя.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     * @deprecated
     */
    async get_cards_info(license_key) {
	    return await this.getCardsInfo(license_key);
    }

    /**
     * @name getCardsInfo
     * @description Получение данных о банковских счетах пользователя.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     */
    async getCardsInfo(license_key) {
        return await this.run({token: this.token, action: "get_cards_info", license_key});
    }


    /**
     * @name get_unread_notifications
     * @description Получение списка непрочитанных уведомлений.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     * @deprecated
     */
    async get_unread_notifications(license_key) {
        return await this.getUnreadNotifications(license_key);
    }

    /**
     * @name getUnreadNotifications
     * @description Получение списка непрочитанных уведомлений.
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     */
    async getUnreadNotifications(license_key) {
        return await this.run({token: this.token, action: "get_unread_notifications", license_key});
    }


    /**
     * @name mark_notifications_as_read
     * @description Пометка всех непрочитанных уведомлений пользователя как "прочитано".
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     * @deprecated
     */
    async mark_notifications_as_read(license_key) {
        return await this.markNotificationsAsRead(license_key);
    }

    /**
     * @name markNotificationsAsRead
     * @description Пометка всех непрочитанных уведомлений пользователя как "прочитано".
     * @param {String} license_key - Ключ лицензии пользователя, у которого запрашивается разрешение.
     * @return {Object}
     */
    async markNotificationsAsRead(license_key) {
        return await this.run({token: this.token, action: "mark_notifications_as_read", license_key});
    }
}

module.exports = spkAPI;
