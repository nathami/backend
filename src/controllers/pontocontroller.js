const Ponto = require('../models/ponto');
const status = require('http-status');

exports.SearchAll = (req, res, nest) => {
    Ponto.findAll()
    .then(ponto => {
        if(ponto){
            res.status(status.OK).send(ponto);
        }
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const data_hora_entrada = req.body.data_hora_entrada;
    const data_hora_inicio_intervalo = req.body.data_hora_inicio_intervalo;
    const data_hora_fim_intervalo = req.body.data_hora_fim_intervalo;
    const data_hora_saida = req.body.data_hora_saida;
    const idusuario = req.body.idusuario;
    const observacao = req.body.observacao;
  

    Ponto.create({
    data_hora_entrada: data_hora_entrada,
    data_hora_inicio_intervalo: data_hora_inicio_intervalo,
    data_hora_fim_intervalo: data_hora_fim_intervalo,
    data_hora_saida: data_hora_saida,
    idusuario: idusuario,
    observacao: observacao
        
    })
    .then(ponto => {
        if(ponto){
            res.status(status.OK).send(ponto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const codigo = req.params.codigo;''
    const data_hora_entrada = req.body.data_hora_entrada;
    const data_hora_inicio_intervalo = req.body.data_hora_inicio_intervalo;
    const data_hora_fim_intervalo = req.body.data_hora_fim_intervalo;
    const data_hora_saida = req.body.data_hora_saida;
    const idusuario = req.body.idusuario;
    const observacao = req.body.observacao;

    Ponto.findByPk(id)
    .then (ponto => {
        if(ponto){
            ponto.update({
                data_hora_entrada: data_hora_entrada,
                data_hora_inicio_intervalo: data_hora_inicio_intervalo,
                data_hora_fim_intervalo: data_hora_fim_intervalo,
                data_hora_saida: data_hora_saida,
                idusuario: idusuario,
                observacao: observacao
                            
            }, 
                {
                where: {codigo: codigo}
                }
            )
            .then (() => {
                res.status(status.OK).send();
            }).catch(error => next(error));
        } else { res.status(status.NOT_FOUND).send()}
    }) .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const codigo = req.params.codigo;

    Ponto.findByPk(codigo)
    .then(ponto => {
        if(ponto){
            res.status(status.OK).send(ponto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const codigo = req.params.codigo;

    Ponto.findByPk(codigo)
    .then(ponto => {
        if(ponto){
            ponto.destroy({
                where: {codigo: codigo}
            })
            .then (() => {
                res.status(status.OK).send();
            })
        
        } else {
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}