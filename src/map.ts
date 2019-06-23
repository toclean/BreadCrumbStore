export default class Map<X, Y>
{
    keys: X[]
    values: Y[]

    constructor()
    {
        this.keys = []
        this.values = []
    }

    getValue(key: any)
    {
        for (let i = 0; i < this.keys.length; i++)
        {
            if (this.keys[i] == key)
                return this.values[i]
        }

        return null
    }

    setValue(key: any, value: any)
    {
        let found = this.getValue(key)

        if (found != null) return -1

        this.keys.push(key)
        this.values.push(value)
        
        return 0
    }

    removeEntry(key: any)
    {
        for (let i = 0; i < this.keys.length; i++)
        {
            if (this.keys[i] == key)
            {
                this.keys.splice(i, 1)
                this.values.splice(i, 1)
            }
        }
    }
}