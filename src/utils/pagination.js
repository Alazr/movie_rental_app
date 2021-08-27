import _ from 'lodash'

export const paginate = (movies,pageNum,perPage) =>{
    const start = (pageNum - 1 ) * perPage

    return _(movies).slice(start).take(perPage).value()
}


