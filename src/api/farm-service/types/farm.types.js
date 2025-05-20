
/**
 * @typedef {Object} SimplifiedFarm
 * @property {number} id              
 * @property {string} name            
 * @property {number} rating          
 * @property {number} coverImageId    
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {SimplifiedFarm[]} items
 * @property {Object} meta
 * @property {number} meta.total
 * @property {number} meta.page
 * @property {number} meta.limit
 */