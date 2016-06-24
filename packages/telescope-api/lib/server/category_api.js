serveCategoriesAPI = function(terms){

  
   var categories = Categories.find();
   var cats = [];

    categories.forEach(function (category) {



      // var childrenCategories = category.getChildren();
      // var categoryIds = [category._id].concat(_.pluck(childrenCategories, "_id"));
      // var cursor = Posts.find({$and: [{categories: {$in: categoryIds}}, {status: Posts.config.STATUS_APPROVED}]});
      
    //  Counts.publish(publication, category.getCounterName(), cursor, { noReady: true });


    cats.push(category);

    });

    

  return JSON.stringify(cats);
};
