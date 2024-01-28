import express from "express";
import gitHubService, { config } from '../services/repositoriesServices';  // Importa la instancia del servicio

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const githubUser = config.user; 
    const repositories = await gitHubService.getRepositories(githubUser);
    // Ordenar por stargazers_count de mayor a menor
    const sortedRepos = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
    // Devolver los 10 repositorios más populares
    const top10Repos = sortedRepos.slice(0, config.perPage);
    res.json(top10Repos);
  } catch (error) {
    // errores
    res.status(500).json({ error: 'Error al obtener repositorios' });
  }
});

export { router as repositoriesRouter };
