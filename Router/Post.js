const App = require('express').Router()
const Data = require('../Database/Data')
App.post('/',async(req,res)=>{
const Post = await new Data({
         bg:{
            burl: req.body.burl,
            burl_id: req.body.burl_id
            },   
         name:{
            n1: req.body.n1,
            n2: req.body.n2,
            n3: req.body.n3,
            n4: req.body.n4
        },
        about:{
            aurl: req.body.aurl,
            aurl_id: req.body.aurl_id,
            def: req.body.def
        },
        about_nm:{
            anm1: req.body.anm1,
            anm2: req.body.anm2,
            anm3: req.body.anm3,
            anm4: req.body.anm4,
            anm5: req.body.anm5,
            anm6: req.body.anm6,
            anm7: req.body.anm7,
            anm8: req.body.anm8,
        },
        skill:{
            html:req.body.html,
            nhtml:req.body.nhtml,
            css:req.body.css,
            ncss:req.body.ncss,
            js:req.body.js,
            njs:req.body.njs,
             react:req.body.react,
            nreact:req.body.nreact,
             boot:req.body.boot,
            nboot:req.body.nboot,
             reactn:req.body.reactn,
            nreactn:req.body.nreactn,
             node:req.body.node,
            nnode:req.body.nnode,
             cpp:req.body.cpp,
            ncpp:req.body.ncpp,
             mongo:req.body.mongo,
            nmongo:req.body.nmongo,
            fb:req.body.fb,
            nfb:req.body.nfb,
            php:req.body.php,
            nphp:req.body.nphp,
            java:req.body.java,
            njava:req.body.njava,
        },
        portfolio:{
            purl: req.body.purl,
            purl_id: req.body.purl_id,
            name: req.body.name,
            time: req.body.time,
            git: req.body.git,
            live: req.body.live
        },
        service:{
            stitle: req.body.stitle,
            desc: req.body.desc
        },
        social:{
            link: req.body.link,
        },
        msg:{
            email: req.body.email,
            mtitle: req.body.mtitle,
            message: req.body.message
        },
})

   try {
    const Save = await Post.save()
    await res.status(200).json(Save)
   } catch (error) {
    await res.status(400).json(error)
   }
   
})

module.exports=App