"use client"
import React from "react"

const LegalPage = () => {
  return (
    <div className="py-12">
      <div className="content-container">
        <div className="w-full max-w-4xl px-6 py-12 bg-white rounded-lg shadow-lg mx-auto">
          <h1 className="text-3xl font-bold mb-6">Правовая информация</h1>

          <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
          <p className="mb-4">
            Настоящее Соглашение регулирует использование сайта gagarin-shop.ru и является обязательным к соблюдению
            для всех пользователей. Пользуясь сайтом, вы подтверждаете свое согласие с условиями.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Права и обязанности сторон</h2>
          <p className="mb-2">
            Пользователь обязуется предоставлять достоверную информацию при оформлении заказов и не нарушать
            законодательство РФ. Администрация вправе изменять содержимое сайта, приостанавливать доступ и
            аннулировать заказы при подозрении на недобросовестные действия.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Условия предоставления услуг</h2>
          <p className="mb-2">
            Все товары и услуги представлены в информационных целях. Оплата, доставка и возврат регулируются
            действующим законодательством РФ. Вся информация на сайте может быть изменена без предварительного уведомления.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Интеллектуальная собственность</h2>
          <p className="mb-2">
            Все изображения, тексты и элементы дизайна являются собственностью администрации сайта или правообладателей
            и защищены авторским правом. Копирование запрещено без письменного разрешения.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Ограничение ответственности</h2>
          <p className="mb-2">
            Сайт не несёт ответственности за возможные убытки, возникшие в результате использования размещенной информации.
            Пользователь действует на свой страх и риск.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Контакты</h2>
          <p className="mb-2">
            Для связи с администрацией сайта: <a href="mailto:info@gagarin-shop.ru" className="text-blue-600 underline">info@gagarin-shop.ru</a>
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Последнее обновление: 12 мая 2025 года
          </p>
        </div>
      </div>
    </div>
  )
}

export default LegalPage
