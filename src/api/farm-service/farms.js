// src/api/farm-service/farms.js
import client from '../client';
import './types/farm.types';


/**
 * GET /farm/v1/simplified
 * @param {{ category?: number, feature?: number, verified?: boolean, limit?: number, offset?: number }} [params]
 * @returns {Promise<SimplifiedFarm[]>}
 */
export function getSimplifiedFarms(params) {
  return client
    .get('/farm/v1/simplified', { params })
    .then(res => res.data);
}

/**
 * GET /farm/v1/simplified/paginated
 * @param {{ page?: number, limit?: number, sort?: string, order?: 'ASC'|'DESC' }} params
 * @returns {Promise<PaginatedResponse>}
 */
export function getPaginatedSimplifiedFarms(params) {
  return client
    .get('/farm/v1/simplified/paginated', { params })
    .then(res => res.data);
}

/**
 * GET /farm/v1/simplified/open
 * @param {{ day: number, time: string, page?: number, limit?: number }} params
 * @returns {Promise<PaginatedResponse>}
 */
export function getOpenSimplifiedFarms({ day, time, page = 1, limit = 10 }) {
  return client
    .get('/farm/v1/simplified/open', { params: { day, time, page, limit } })
    .then(res => res.data);
}

/**
 * /farm/v1/simplified/search
 * @param {{ page?: number, limit?: number, sort?: string, order?: 'ASC'|'DESC', filters?: Object }} searchDto
 * @returns {Promise<PaginatedResponse>}
 */
export function searchSimplifiedFarms(searchDto) {
  return client
    .post('/farm/v1/simplified/search', searchDto)
    .then(res => res.data);
}

/**
 * GET /farm/v1/simplified/trending
 * @param {{ limit?: number }} [opts]
 * @returns {Promise<SimplifiedFarm[]>}
 */
export function getTrendingSimplifiedFarms({ limit = 5 } = {}) {
  return client
    .get('/farm/v1/simplified/trending', { params: { limit } })
    .then(res => res.data);
}

/**
 * GET /farm/v1/simplified/featured
 * @param {{ banners?: string, limit?: number }} [opts]
 * @returns {Promise<SimplifiedFarm[]>}
 */
export function getFeaturedSimplifiedFarms({ banners = '', limit = 6 } = {}) {
  const params = { limit };
  if (banners) params.banners = banners;
  return client
    .get('/farm/v1/simplified/featured', { params })
    .then(res => res.data);
}


/**
 * GET /farm/v1/simplified/by-category
 * @param {{ categoryId?: number, page?: number, limit?: number }} [opts]
 * @returns {Promise<SimplifiedFarm[]>}
 */
export function getCategorySimplifiedFarms({ categoryId, page = 1, limit = 10 } = {}) {
  const url = `/farm/v1/simplified/by-category/${categoryId}`;
  return client
    .get(url, { params: { page, limit } })
    .then(res => res.data);
}


/**
 * GET /farm/v1/simplified/by-feature
 * @param {{ featureId?: number, page?: number, limit?: number }} [opts]
 * @returns {Promise<SimplifiedFarm[]>}
 */
export function getFeatureSimplifiedFarms({featureId, page = 1, limit = 10} = {}) {
  const url = `/farm/v1/simplified/by-feature/${featureId}`;
  return client
    .get(url, { params: { page, limit } })
    .then(res => res.data);

}


/**
 * GET /farm/v1/simplified/recently-added
 * @param {{ limit?: number, days?: number }} [opts]
 * @returns {Promise<SimplifiedFarm[]>}
 */
export function getRecentlyAddedFarmsSimplified({ limit = 5, days = 30 } = {}) {
  return client
    .get('/farm/v1/simplified/recently-added', { params: { limit, days } })
    .then(res => res.data);
}

