const Member = require("../models/member")
const {age, date, blooded}  = require('../../lib/utils')
module.exports = {
    index(req,res){
        let {filter, page, limit} = req.query
        
        
        page = page || 1 
        limit = limit || 2 
        offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(members){
                const pagination = {
                    page,
                    total: Math.ceil(members[0].total/limit)
                }
                return res.render("members/index",{members,filter, pagination})
            }
        }

        Member.paginate(params)

       

    },
    create(req,res){
        Member.instructorSelectOption(function(options){
           return res.render("members/create",{instructorSelect: options})
        })
    },
    post(req,res){
        const keys = Object.keys(req.body)

        for(key of keys){ 
        if(req.body[key] == ""){
            
            return res.send("Preencha todos os campos")
            
            }
        }

        Member.create(req.body,function(member){
            return res.redirect(`members/${member.id}`)
        })
    
    },
    show(req,res){
        Member.find(req.params.id, function(member){
            
            if(!member) return res.send('Instrutor not found')

            member.birth = date(member.birth).birthDay
            member.blood = blooded(member.blood)
            

            return res.render("members/show",{member})
        })
    },
    edit(req,res){
        Member.find(req.params.id, function(member){
            if(!member) return res.send('Member not found')

            member.birth = date(member.birth).iso

            Member.instructorSelectOption(function(options){
               return res.render("members/create",{member, instructorSelect: options})
            })
        })

        
     
    },
    put(req,res){
        const keys = Object.keys(req.body)

        for(key of keys){ 
            if(req.body[key] == ""){
                
                return res.send("Preencha todos os campos")
                
            }
        }

       Member.update(req.body,function(){
           return res.redirect(`/members/${req.body.id}`)
       })
    },
    delete(req,res){
        Member.delete(req.body.id,function(){
            return res.redirect('/members')
        })
    }
}









