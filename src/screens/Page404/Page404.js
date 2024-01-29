import React from "react";

const Page404 = () => {
  return (
    <div className="text-center error_screen">
      <div className="">
        <span className="font-type font-size-3 bold mr-8">Erro 404</span>
        <i className="fa fa-ban fa-2x"></i>
      </div>
      <div className="mt-16 mb-16">
        <span className="font-type font-size-4 block">
          Esta página não existe.
        </span>
        <span className="font-type font-size-6 block">
          Você pode ter digitado o endereço errado, ou a página foi removida.
        </span>
      </div>
      <div className="mb-16">
        <a className="fb-btn btn-primary" href="/">
          <i className="fa fa-arrow-left fa-fw"></i> Voltar
        </a>
      </div>
    </div>
  );
};

export default Page404;