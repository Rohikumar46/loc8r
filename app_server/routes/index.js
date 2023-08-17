var express = require('express');
var router = express.Router();

var ctrllocations = require('../controller/locations');
var ctrlothers = require('../controller/others');

router.get('/signin',ctrlothers.signin);
/* GET Locations page. */
router.get('/',ctrllocations.homelist);
router.get('/locations',ctrllocations.locationInfo);
router.get('/locations/review/new',ctrllocations.addReview);
/* get others page */
router.get('/about',ctrlothers.about);
router.get('/register',ctrlothers.register);
module.exports=router;
