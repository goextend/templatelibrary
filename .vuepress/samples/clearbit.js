/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  let lead = context.body;
  let clearbit = require('clearbit')(context.secrets.clearbit_key);
  
  clearbit.Enrichment.find({email: lead.email, stream: true})
  .then(function (response) {
    lead.clearbit = { person:response.person, company:response.company };
    cb(null, { lead });

  })
  .catch(function (err) {
    console.error(err);
  });
  
};