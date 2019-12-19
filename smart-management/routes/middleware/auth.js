var express = require('express');
var firebase = require('firebase');
var router = express.Router();

module.exports = {

// Essa função confere se o usuário está logado antes de entrar nas páginas
// A const user pega as informações do usuário que está logado no firebase e compara com o usuário que quer acessar as páginas
// Caso não haja nenhum usuário logado, a página é redirecionada para o login. Caso haja um usuário logado, a página que o usuário quer acessar é carregada
  isAuthenticated: (req, res, next) => {
    const user = firebase.auth().currentUser;
    if(user!== null){
      next();
    }
    else {
      res.redirect('/');
    }
  },

// Essa função confere se o tipo do usuário é "ClienteADM" e permite que ele entre nas páginas disponíveis apenas para ClienteADM
// A const type identifica qual o tipo do usuário que está logado e compara essa string com "ClienteADM", se o usuário for ClienteADM ele poderá acessar a página desejada, caso contrário, ele é redirecionado para a página de login
  isClienteADM: (req, res, next) => {
    const type = req.session.user.type;
    if(type === 'ClienteADM'){
      next();
    }
    else {
      res.redirect('/');
    }
  },

// Essa função confere se o tipo do usuário é "ADM" e permite que ele entre nas páginas disponíveis apenas para ADM
// A const type identifica qual o tipo do usuário que está logado e compara essa string com "ADM", se o usuário for gerente ele poderá acessar a página desejada, caso contrário, ele é redirecionado para a página de login

  isADM: (req, res, next) => {
    const type = req.session.user.type;
    if(type === 'ADM'){
      next();
    }
    else {
      res.redirect('/');
    }
  },

// Essa função confere se o tipo do usuário é "Gestor" e permite que ele entre nas páginas disponíveis apenas para gestores
// A const type identifica qual o tipo do usuário que está logado e compara essa string com "Gestor", se o usuário for convenio ele poderá acessar a página desejada, caso contrário, ele é redirecionado para a página de login

  isManager: (req, res, next) => {
    const type = req.session.user.type;
    if(type === 'Gestor'){
      next();
    }
    else {
      res.redirect('/');
    }
  },

// Essa função confere se o tipo do usuário é "Analista" e permite que ele entre nas páginas disponíveis apenas para analistas
// A const type identifica qual o tipo do usuário que está logado e compara essa string com "Analista", se o usuário for analista ele poderá acessar a página desejada, caso contrário, ele é redirecionado para a página de clientes

  isAnalyst: (req, res, next) => {
    const type = req.session.user;
    if(type === 'Analista'){
      next();
    }
    else {
      res.redirect('/user');
    }
  },

// Essa função confere se o tipo do usuário é "administrador" e permite que ele entre nas páginas disponíveis apenas para administradores
// A const type identifica qual o tipo do usuário que está logado e compara essa string com "Admin", se o usuário for administrador ele poderá acessar a página desejada, caso contrário, ele é redirecionado para a página de clientes

  isAdmin: (req, res, next) => {
    const type = req.session.user;
    if(type === 'Admin'){
      next();
    }
    else {
      res.redirect('/user');
    }
  },
}
