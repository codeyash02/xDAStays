import Review from "../db/models/reviewmodel";

const request = {
  getReview: async (req, res) => {
      console.log('hello')
    try {
    const reviews =  await Review.find({}).sort({createdAt:-1}).lean().populate([{
        path: 'Publisher',
        model: 'User',
        select: { 'Name':1},
      },{
        path: 'Place',
        model: 'Places',
        select: { 'Name':1},
      }])
    console.log(reviews,'<<<>>>')
      return res.send(reviews)
    } catch (error) {
      return res.send(error);
    }
  },

  getSingleReview:async(req,res)=>{
const _id =req.body
const review  = await Review.findById(_id) 
  },
  addReview: async (req, res) => {
    try {
      const input = req.body;
      const review = await Review(input).save().then((data) => {
        return res.json(data);
      });
    } catch (error) {
      return res.json(error);
    }
  },
};
export default request;
