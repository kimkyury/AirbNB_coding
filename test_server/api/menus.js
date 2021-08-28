var express = require('express');
var router = express.Router();
var Menu = require('../models/menu');
var mongoose = require('mongoose');
const { query } = require('express');


/* 정렬하기: 특정 어절에 대하여, 메뉴이름을 정렬하여 보여준다 */
router.get('/',
    function(req, res, next) {
        var query = {};
        //menu이름의 일부어절만을 검색한 상태라면
        if(req.query.menuName) query.menuName = {$regex:req.query.menuName, $options:'i'};
        
        Menu.find(query)        // 해당 어절 searching
        .sort({menuName: 1})    // menuName을 오름차순sorting
        .exec(function(err, menus) {     // 오류 안내
            if(err) {
                res.status(500);
                res.json({success:false, message:err});
            }
            else {  // 성공시 정렬된 data전송
                res.json({success:true, data:menus});
            }
        });
    }
);