"use client"
import React from "react"

const ContactsPage = () => {
  return (
    <div className="py-12">
      <div className="content-container">
        <div className="w-full max-w-3xl px-6 py-12 bg-white rounded-lg shadow-lg mx-auto">
          <h1 className="text-3xl font-bold mb-6">Контактная информация</h1>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">ФИО владельца</h2>
            <p>Критюк Илья Витальевич</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">ИНН самозанятого</h2>
            <p>621402683132</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Адрес</h2>
            <p>Рязанская область, г. Ряжск, ул. Береговая, д. 37</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Телефон</h2>
            <p>
              <a href="tel:+79537542769" className="text-blue-600 underline">+7 (953) 754-27-69</a>
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Электронная почта</h2>
            <p>
              <a href="mailto:ikritiuk@gmail.com" className="text-blue-600 underline">ikritiuk@gmail.com</a>
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Вы можете связаться с нами по любым вопросам, связанным с заказами, доставкой или дополнительной информацией.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage
