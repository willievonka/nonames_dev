import db from '../db.js';

class GenreController {
    async createGenre(req, res) {
        try {
            const { name } = req.body;
            const newGenre = await db.query(
                "INSERT INTO genre (name) VALUES ($1) RETURNING *", 
                [name]
            );
            res.json(newGenre.rows[0]);
        } catch (error) {
            console.error("Ошибка при создании жанра:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async getGenres(req, res) {
        try {
            const genres = await db.query("SELECT * FROM genre");
            res.json(genres.rows);
        } catch (error) {
            console.error("Ошибка при получении жанров:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async getOneGenre(req, res) {
        try {
            const { id } = req.params;
            const genre = await db.query("SELECT * FROM genre WHERE id = $1", [id]);
            
            if (genre.rows.length === 0) {
                return res.status(404).json({ message: "Жанр не найден" });
            }

            res.json(genre.rows[0]);
        } catch (error) {
            console.error("Ошибка при получении жанра:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async updateGenre(req, res) {
        try {
            const { id, name } = req.body;
            const genre = await db.query(
                "UPDATE genre SET name = $1 WHERE id = $2 RETURNING *", 
                [name, id]
            );

            if (genre.rows.length === 0) {
                return res.status(404).json({ message: "Жанр не найден" });
            }

            res.json(genre.rows[0]);
        } catch (error) {
            console.error("Ошибка при обновлении жанра:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }

    async deleteGenre(req, res) {
        try {
            const { id } = req.params;
            const genre = await db.query("DELETE FROM genre WHERE id = $1 RETURNING *", [id]);

            if (genre.rows.length === 0) {
                return res.status(404).json({ message: "Жанр не найден" });
            }

            res.json({ message: "Удаление выполнено", deletedGenre: genre.rows[0] });
        } catch (error) {
            console.error("Ошибка при удалении жанра:", error);
            res.status(500).json({ message: "Ошибка сервера" });
        }
    }
}

export default new GenreController();
