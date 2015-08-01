var database = {
    tableName: 'dblist',
    schema: true,
    attributes: {
        config: {
            //json string of db config
            type: 'json',
            required: true
        }
    },
}