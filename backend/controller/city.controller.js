import db from '../db.js';

class CityController {
    async createCity(req, res) {
        try {
            const { name } = req.body;
            const newCity = await db.query(
                "INSERT INTO city (name) VALUES ($1) RETURNING *", 
                [name]
            );
            res.json(newCity.rows[0]);
        } catch (error) {
            console.error("Ошибка при создании города:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async getCities(req, res) {
        try {
            const cities = await db.query("SELECT * FROM city");
            res.json(cities.rows);
        } catch (error) {
            console.error("Ошибка при получении городов:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async getOneCity(req, res) {
        try {
            const { id } = req.params;
            const city = await db.query("SELECT * FROM city WHERE id = $1", [id]);
            
            if (city.rows.length === 0) {
                return res.status(404).json({ message: "Город не найден" });
            }

            res.json(city.rows[0]);
        } catch (error) {
            console.error("Ошибка при получении города:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async updateCity(req, res) {
        try {
            const { id, name } = req.body;
            const city = await db.query(
                "UPDATE city SET name = $1 WHERE id = $2 RETURNING *", 
                [name, id]
            );

            if (city.rows.length === 0) {
                return res.status(404).json({ message: "Город не найден" });
            }

            res.json(city.rows[0]);
        } catch (error) {
            console.error("Ошибка при обновлении города:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async deleteCity(req, res) {
        try {
            const { id } = req.params;
            const city = await db.query("DELETE FROM city WHERE id = $1 RETURNING *", [id]);

            if (city.rows.length === 0) {
                return res.status(404).json({ message: "Город не найден" });
            }

            res.json({ message: "Удаление выполнено", deletedCity: city.rows[0] });
        } catch (error) {
            console.error("Ошибка при удалении города:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }
}

export default new CityController();
