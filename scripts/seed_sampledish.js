// require('dotenv').config()  <-- instead of loading .evn variables here
// try to run file using commnad: `node -r dotenv/config scripts/seed_sampledish.js`

// make sure tables(dishes and users) exist in dishdb database
// if they dont then first create tables then run this script or try to catch it via try-catch
// or create tables here only to avoid errors
// another option create api endpoint for admin users which when they hit seed data gets filled

const bcrypt = require('bcryptjs')
const {User,Dish,db} = require('../src/models/db')
// insert some initial (seed)data to the project
async function seed() {
  // eslint-disable-next-line no-useless-catch

  try {
    await db.sync({ force: true })
    // await db.sync(/* force:process.env.FORCE_DB_RESET */)
    await User.bulkCreate([
      {
        firstName: 'Rhythm',
        lastName: 'Agrawal',
        username: 'rhythm98',
        email: 'rhyagr@gmail.com',
        password: bcrypt.hashSync('Rhythm@98', 10),
      },
      {
        firstName: 'Darshan',
        lastName: 'Agrawal',
        username: 'darshan76',
        email: 'darshan76@gmail.com',
        password: bcrypt.hashSync('Darshan@76', 10),
      },
      {
        firstName: 'Ajit',
        lastName: 'Rathore',
        username: 'asrathore',
        email: 'asrathore@gmail.com',
        password: bcrypt.hashSync('AjitSingh', 10),
      },
    ])
    await Dish.bulkCreate([
      {
        name: 'Aloo Tikki',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/chaat-bae.appspot.com/o/alooTikki.jpg?alt=media&token=28d459fb-6954-4b3b-bc6e-733d187e1152',
        price: '140.0',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo sunt dolore sed aut iusto repellendus porro numquam pariatur dolorem, amet voluptates praesentium fugit laboriosam vel quas fuga accusantium rerum.',
      },
      {
        name: 'Dahi Bhalla',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/chaat-bae.appspot.com/o/dahiBhalla.jpg?alt=media&token=ce65a97a-fd0b-4e52-8b14-56beebe2c57e',
        price: '50.0',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo sunt dolore sed aut iusto repellendus porro numquam pariatur dolorem, amet voluptates praesentium fugit laboriosam vel quas fuga accusantium rerum.',
      },
      {
        name: 'Momos',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/chaat-bae.appspot.com/o/momos.jpg?alt=media&token=8ca63e61-3d77-4e5e-a970-0a20eb91cad0',
        price: '80.0',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo sunt dolore sed aut iusto repellendus porro numquam pariatur dolorem, amet voluptates praesentium fugit laboriosam vel quas fuga accusantium rerum.',
      },
    ])
    /*
    await models.Comment.bulkCreate([
      {
        title: 'nice article',
        message: 'really nice written article, thanks!',
        userId: 1,
        articleId: 1,
      },
      {
        title: 'good article',
        message: `o take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses `,
        userId: 1,
        articleId: 1,
      },
      {
        title: 'could be better',
        message: `, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh`,
        userId: 1,
        articleId: 2,
      },
      {
        title: 'thanks for writing this',
        message: `hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain `,
        userId: 2,
        articleId: 3,
      },
      {
        title: 'did not like your article',
        message: `pedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis volupt`,
        userId: 1,
        articleId: 3,
      },
      {
        title: 'really bad article',
        message: `ure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and `,
        userId: 2,
        articleId: 4,
      },
    ])*/
  } catch (e) {
    throw e
  }
}

seed()
