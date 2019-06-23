import fs, { write } from 'fs'
import Map from './map'

export default class Store
{
    name: string
    map: Map<any, any>

    constructor(name: string)
    {
        this.name = name + '.db'
        this.map = new Map()
        
        if (fs.existsSync('./' + this.name))
        {
            let parse = JSON.parse(fs.readFileSync('./' + this.name, 'utf8'))
            this.map.keys = parse.keys
            this.map.values = parse.values
        }
    }

    add(key: any, value: any)
    {
        let result = this.map.setValue(key, value)
        this.write()
        return result
    }

    get(key: any)
    {
        return this.map.getValue(key)
    }

    remove(key: any)
    {
        let result = this.map.removeEntry(key)
        this.write()
        return result
    }

    private read()
    {
        let data = fs.readFileSync('./' + this.name, 'utf8')

        this.map = JSON.parse(data)
    }

    private write()
    {
        fs.writeFileSync('./' + this.name, JSON.stringify(this.map), 'utf8')
    }
}