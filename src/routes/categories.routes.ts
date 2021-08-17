import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExisting = categoryRepository.findByName(name);

  if (categoryAlreadyExisting) {
    return response.status(400).json({ error: 'Category already existing' });
  }

  categoryRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoryRepository.list();

  return response.status(201).json(all);
});

export { categoriesRoutes };
