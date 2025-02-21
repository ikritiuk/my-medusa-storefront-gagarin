import { useState, useEffect, useCallback } from "react";
import { useMedusa } from "medusa-react";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { client } = useMedusa();

  // Функция для выполнения поиска с API Medusa
  const fetchProducts = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { products } = await client.products.list({ q: searchTerm });
      setResults(products);
    } catch (err) {
      setError("Ошибка загрузки товаров. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  // Дебаунсим функцию запроса (ждём 300 мс перед отправкой)
  const debouncedSearch = useCallback(debounce(fetchProducts, 300), []);

  // Отслеживаем изменение ввода и вызываем поиск с задержкой
  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Искать товары..."
        className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Отображаем состояние загрузки */}
      {loading && <p className="text-gray-500 text-sm mt-2">Загрузка...</p>}

      {/* Выводим ошибку, если есть */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Отображаем результаты поиска */}
      {results.length > 0 && (
        <ul className="absolute bg-white shadow-lg mt-2 w-full rounded-lg border max-h-60 overflow-y-auto">
          {results.map((product) => (
            <li key={product.id} className="p-2 hover:bg-gray-100 cursor-pointer">
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
