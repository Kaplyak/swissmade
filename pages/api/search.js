import { items } from '../../cache/data'

export default (req, res) => {
    const results = req.query.q ?
        items.filter(item => item.name.toLowerCase().includes(req.query.q.toLowerCase())) : []
    res.statusCode = 200
    
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}