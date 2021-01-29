const models=require('../src/models/db')

//insert some initial (seed)data to the project
async function seed(){
    // eslint-disable-next-line no-useless-catch
    try{
        await models.User.bulkCreate([
            {username:'firstuser',password:'firstpass'},
            {username:'seconduser',password:'secondpass'},
            {username:'thirduser',password:'thirdpass'}
        ])
        await models.Dish.bulkCreate([
            {
                title:'',
                content:'',
                imageUrl:'',
                authorId:'1'
            },
            {
               title:'',
               content:'',
               imageUrl:'',
               authorId:'2'
           },
           {
               title:'',
               content:'',
               imageUrl:'',
               authorId:'3'
           }
        ])
    }catch(e){
        throw e
    }
     
}

seed()