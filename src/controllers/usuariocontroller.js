const Usuario = require('../models/usuario');
const status = require('http-status');

exports.SearchAll = (req, res, nest) => {
    Usuario.findAll()
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        }
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const telefone = req.body.telefone;


    Usuario.create({
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone
       
    })
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.params.id;''
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const telefone = req.body.telefone;

    Usuario.findByPk(id)
    .then (usuario => {
        if(usuario){
            usuario.update({
                nome: nome,
                cpf: cpf,
                email: email,
                telefone: telefone
       
            }, 
                {
                where: {id: id}
                }
            )
            .then (() => {
                res.status(status.OK).send();
            }).catch(error => next(error));
        } else { res.status(status.NOT_FOUND).send()}
    }) .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            usuario.destroy({
                where: {id: id}
            })
            .then (() => {
                res.status(status.OK).send();
            })
        
        } else {
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}